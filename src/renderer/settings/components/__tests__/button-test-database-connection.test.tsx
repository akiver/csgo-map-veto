import React from 'react';
import { fireEvent, waitForElement, wait } from '@testing-library/react';
import { renderWithRedux } from 'test/render-with-redux';
import { DEFAULT_API_ADDRESS } from 'renderer/constants/api';
import { KEY_API_ADDRESS } from 'renderer/constants/local-storage';
import { ButtonTestDatabaseConnection } from '../button-test-database-connection';

describe('ButtonTestDatabaseConnection', () => {
  const renderComponent = () => renderWithRedux(<ButtonTestDatabaseConnection />);

  it('should render a button', async () => {
    const { getByText, getByRole } = renderComponent();

    await wait(() => {
      expect(getByText('Test connection')).toBeTruthy();
      expect(getByRole('button')).toBeTruthy();
    });
  });

  it('should be disabled while making request', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise(res => setTimeout(res, 10000));
    });

    const { getByText } = renderComponent();
    fireEvent.click(getByText('Test connection'));

    await wait(() => {
      expect(getByText('Test connection')).toBeDisabled();
    });
  });

  it('should show a success message and persist the address', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return {
        status: 200,
      };
    });

    const { getByText, queryByAltText } = renderComponent();
    fireEvent.click(getByText('Test connection'));

    await waitForElement(() => getByText(/Connection success/i));
    expect(localStorage.setItem).toHaveBeenCalledWith(KEY_API_ADDRESS, DEFAULT_API_ADDRESS);

    fireEvent.click(getByText(/close/i));
    expect(queryByAltText(/Connection success/i)).not.toBeInTheDocument();
  });

  it('should show an error message', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return {
        status: 500,
      };
    });

    const { getByText, queryByAltText } = renderComponent();

    fireEvent.click(getByText('Test connection'));
    await waitForElement(() => getByText(/Connection failed/i));
    fireEvent.click(getByText(/close/i));
    expect(queryByAltText(/Connection failed/i)).not.toBeInTheDocument();
  });
});
