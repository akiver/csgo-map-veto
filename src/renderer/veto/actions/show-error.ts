const ERROR_SHOW = 'veto.options.showError'

const showError = (error: string) => {
  return {
    type: ERROR_SHOW as typeof ERROR_SHOW,
    payload: error,
  }
}

type ShowErrorAction = ReturnType<typeof showError>

export { ERROR_SHOW, showError, ShowErrorAction }
