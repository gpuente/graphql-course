import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs } from '../queries';

class SongList extends Component {
  renderSongs() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    const { songs = [] } = this.props.data;
    const content = songs.map(song => <li key={song.id} className="collection-item">{song.title}</li>);

    return <ul className="collection">{ content }</ul>;
  }

  render() {
    return (
      <div>
        { this.renderSongs() }
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(fetchSongs)(SongList);
