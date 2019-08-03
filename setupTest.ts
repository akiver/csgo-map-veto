import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import 'whatwg-fetch'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Ignore deprecated React component lifecycle from vendors
const originalConsoleWarn = console.warn
// eslint-disable-next-line
console.warn = (...args: any[]) => {
  if (/Warning.*is deprecated and will be removed/.test(args[0])) {
    return
  }
  originalConsoleWarn(...args)
}

// TODO remove when this issue is fixed https://github.com/testing-library/react-testing-library/issues/281
const originalConsoleError = console.error
// eslint-disable-next-line
console.error = (...args: any[]) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return
  }
  originalConsoleError(...args)
}
