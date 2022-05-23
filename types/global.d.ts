declare global {
  const IS_PRODUCTION: boolean;
  const IS_ELECTRON: boolean;
  const APP_VERSION: number;
  const GITHUB_URL: string;

  namespace NodeJS {
    interface Global {
      IS_ELECTRON: boolean;
      APP_VERSION: number;
      GITHUB_URL: string;
      fetch: (url: string) => Promise;
    }
    interface ProcessEnv {
      VITE_DEV_SERVER_URL: string;
    }
  }

  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
}

// Ensure this is treated as a module.
export {};
