const ERROR_HIDE = 'veto.options.hideError';

const hideError = () => {
  return {
    type: ERROR_HIDE as typeof ERROR_HIDE,
  };
};

type HideErrorAction = ReturnType<typeof hideError>;

export { ERROR_HIDE, hideError, HideErrorAction };
