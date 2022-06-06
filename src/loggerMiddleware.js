export const loggerMiddleware = (store) => (next) => (action) => {
    console.log('azione ricevuta', action)
    const result = next(action)
    console.log('stato corrente', store.getState())
    return result
}

