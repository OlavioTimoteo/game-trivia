import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchGravatar from '../redux/fetchs/fetchGravatar';
import { actionSaveImgUrl } from '../redux/actions';

class Header extends React.Component {
  render() {
    const { email, playerName, saveImg } = this.props;
    const hash = md5(email).toString();
    const imgURL = `https://www.gravatar.com/avatar/${hash}`;
    saveImg(imgURL);
    const { player: { score } } = JSON.parse(localStorage.getItem('state'));
    return (
      <header>
        <div className="player">
          <img src={ imgURL } alt="" data-testid="header-profile-picture" />
          <p data-testid="header-player-name">
            Player:
            { playerName }
          </p>
        </div>
        <div className="points">
          <p data-testid="header-score">
            {+score}
          </p>
        </div>
      </header>
    );
  }
}

// A função do mapDispatchToProps é despachar action para a store, com a finalidade de alterar o state da aplicação
// A função dispatch() serve para despachar uma action para o reducer
// Recebe como parametro uma dispatch, e retorna um objeto com chave e valor
const mapDispatchToProps = (dispatch) => ({
  pushFetch: (state) => dispatch(fetchGravatar(state)),
  saveImg: (url) => dispatch(actionSaveImgUrl(url)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  playerName: state.user.playerName,
});

// Faço a validação se os dados que recebi são válidos
Header.propTypes = {
  email: PropTypes.string,
  playerName: PropTypes.string,
  saveImg: PropTypes.func,
}.isRequired;

// O connect é responsável por fazer a conexão do meu componente Header com o mapStateToProps e o mapDispatchToProps.
export default connect(mapStateToProps, mapDispatchToProps)(Header);
