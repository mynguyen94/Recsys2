import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieModule extends Component {
  getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
    }
  }

  render() {
    return (
      <div style={ this.getStyle() }>
        <p>{ this.props.movie.title }</p>
        <img src={"http://image.tmdb.org/t/p/w300" + this.props.movie.poster} alt = ""></img>
      </div>
    )
  }
}

// PropTypes
MovieModule.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieModule;