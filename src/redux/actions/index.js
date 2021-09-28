// Actions do reducer Gravatar
export const ACTION_FETCH_SUCCESS = 'ACTION_FETCH_SUCCESS';
export const actionGetGravatar = (payload) => ({ type: ACTION_FETCH_SUCCESS, payload });

// Actions do reducer Quiz
export const ACTION_FETCHING_QUIZ = 'ACTION_FETCHING_QUIZ';
export const ACTION_GET_QUIZ = 'ACTION_GET_QUIZ';
export const ACTION_TIMEOUT_FALSE = 'ACTION_TIMEOUT_FALSE';
export const ACTION_TIMEOUT_TRUE = 'ACTION_TIMEOUT_TRUE';
export const actionFetchingQuiz = () => ({ type: ACTION_FETCHING_QUIZ });
export const actionGetQuiz = (payload) => ({ type: ACTION_GET_QUIZ, payload });
export const actionTimeoutFalse = () => ({ type: ACTION_TIMEOUT_FALSE });
export const actionTimeoutTrue = () => ({ type: ACTION_TIMEOUT_TRUE });

// Actions do reducer User
export const ACTION_GET_TOKEN_SUCESS = 'ACTION_GET_TOKEN_SUCESS';
export const ACTION_GET_TOKEN_ERROR = 'ACTION_GET_TOKEN_ERROR';
export const ACTION_SAVE_DATA_USER = 'ACTION_SAVE_DATA_USER';
export const ACTION_SAVE_IMG_URL = 'ACTION_SAVE_IMG_URL';
export const ACTION_ADD_SETTING = 'ACTION_ADD_SETTING';
export const actionSaveImgUrl = (payload) => ({ type: ACTION_SAVE_IMG_URL, payload });
export const actionGetTokenSucess = (state) => ({ type: ACTION_GET_TOKEN_SUCESS, state });
export const actionGetTokenError = () => ({ type: ACTION_GET_TOKEN_ERROR });
export const actionAddSetting = (state) => ({ type: ACTION_ADD_SETTING, state });
export const actionSaveDataUser = (state) => ({ type: ACTION_SAVE_DATA_USER, state });
