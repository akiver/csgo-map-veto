import React from 'react';
import { renderWithRedux } from 'test/render-with-redux';
import { DeleteVetoButton } from '../delete-veto-button';
import { VetosProvider } from 'renderer/vetos/vetos-context';
import { fireEvent, waitFor } from '@testing-library/react';

describe('DeleteVetoButton', () => {
  const renderComponent = () => {
    return renderWithRedux(
      <VetosProvider
        value={[
          {
            id: 1,
            bestOf: 3,
            teamOneName: 'Team one',
            teamTwoName: 'Team two',
            createdAt: new Date(),
            votes: [],
          },
        ]}
      >
        <DeleteVetoButton vetoId={1} />
      </VetosProvider>,
      {
        initialState: {
          settings: {
            apiAddress: 'https://hi.com',
          },
        },
      }
    );
  };

  it('should render a delete button', () => {
    const { getByText } = renderComponent();

    const button = getByText(/delete/i);
    expect(button).toBeTruthy();
    expect(button).toBeEnabled();
  });

  it('should make a delete request', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return {
        status: 200,
      };
    });
    const { getByText } = renderComponent();

    const button = getByText(/delete/i);
    fireEvent.click(button);

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith('https://hi.com/api/vetos/1', {
        method: 'DELETE',
      })
    );
  });

  describe('when the request is pending', () => {
    it('should be disabled', async () => {
      const { getByText } = renderComponent();

      const button = getByText(/delete/i);
      fireEvent.click(button);

      await waitFor(() => expect(getByText(/delete/i)).toBeDisabled());
    });
  });
});
