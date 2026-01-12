export const logger = {
  log: (...args: any[]) => {
    if (__DEV__) {
      console.log('[LOG]', ...args)
    }
  },
}
