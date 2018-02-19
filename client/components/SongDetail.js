import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList.js';

import { fetchSong } from '../graphql/queries';

export class SongDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{ song.title }</h3>
        <LyricList lyrics={ song.lyrics } />
        <LyricCreate songId={song.id} />
      </div>
    );
  }
}


const gqlWrapper = graphql(fetchSong, {
  options: props => ({
    variables: { id: props.params.id },
  }),
});

export default gqlWrapper(SongDetail);
