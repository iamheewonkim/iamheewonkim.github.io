const win =
  typeof window !== `undefined`
    ? window
    : ({} as {
        localStorage: any;
        sessionStorage: any;
      });

export const localStorage = win.localStorage;
export const sessionStorage = win.sessionStorage;
