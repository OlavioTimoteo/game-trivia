import {
  actionGetTokenError,
  actionGetTokenSucess,
} from '../actions';

// Essa função tem o objetivo de gerar um token aleatório e salvar no localStorage. Para que cada jogador tenha seu token de sessão
const fetchToken = () => async (dispatch) => {
  const resp = await fetch('https://opentdb.com/api_token.php?command=request');
  // Se resp retornar false, é porque não deu certo a conexão com a API e já é disparada uma action de erro no token
  if (!resp.ok) return dispatch(actionGetTokenError);
  // Guardar na respObject o JSON encontrado
  const respObject = await resp.json();
  // Descontroi a variável acima, com o retorno do JSON, para pegar somente a chave token
  const { token } = respObject;
  // Guardar no localStorage o token
  localStorage.setItem('token', JSON.stringify(token));
  if (!localStorage.ranking)localStorage.setItem('ranking', JSON.stringify([]));
  // Disparar uma action de conexão com a API e getToken de sucesso
  dispatch(actionGetTokenSucess({ token }));
};

export default fetchToken;
