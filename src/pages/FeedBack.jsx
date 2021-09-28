import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/feedback.css';

class FeedBack extends Component {
  render() {
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    const three = 3;
    return (
      <div>
        <Header />
        <span>Correct answers: </span>
        <span data-testid="feedback-total-question">
          {assertions}
        </span>
        <br />
        <span>Total score: </span>
        <span data-testid="feedback-total-score">
          {score}
        </span>
        <p data-testid="feedback-text">
          {assertions < three ? 'Podia ser melhor...' : 'Mandou bem!'}
        </p>
        <Link to="/ranking">
          <button
            className="btn-rank-feed"
            type="button"
            data-testid="btn-ranking"
          >
            Ver Ranking
          </button>
        </Link>
        <Link to="/">
          <button
            className="btn-play"
            data-testid="btn-play-again"
            type="button"
          >
            Jogar novamente
          </button>
        </Link>
      </div>);
  }
}

export default FeedBack;
