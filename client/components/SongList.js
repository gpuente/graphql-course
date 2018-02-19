import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import { fetchSongs } from '../graphql/queries';
import { deleteSong } from '../graphql/mutations';

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({
      variables: { id },
    }).then(() => this.props.data.refetch());
  }


  renderSongs() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    const { songs = [] } = this.props.data;
    const content = songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          <Link to={`/songs/${song.id}`}>{song.title}</Link>
          <i className="material-icons" onClick={() => this.onSongDelete(song.id)}>
            delete
          </i>
        </li>
      );
    });

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

export default graphql(deleteSong)(
  graphql(fetchSongs)(SongList)
);
