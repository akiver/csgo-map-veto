import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
