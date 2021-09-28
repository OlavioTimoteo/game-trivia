// Importa o combineReducers do redux para fazer a junção dos reducers do app
import { combineReducers } from 'redux';
import gravatar from './gravatar';
import quiz from './quiz';
import user from './user';

const rootReducer = combineReducers({
  user,
  quiz,
  gravatar,
});

export default rootReducer;
