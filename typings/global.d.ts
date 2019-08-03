declare global {
  const __static: string // Created by electron-webpack and point to static files.
  const IS_ELECTRON: boolean
  const APP_VERSION: number
  const GITHUB_URL: string

  namespace NodeJS {
    interface Global {
      __static: string
      IS_ELECTRON: boolean
      APP_VERSION: number
      GITHUB_URL: string
      open: (url: string) => void
      fetch: (url: string) => Promise
    }
  }

  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }

  type EnumLiteralsOf<T extends object> = T[keyof T]

  type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>
  }
}

// Ensure this is treated as a module.
export {}
