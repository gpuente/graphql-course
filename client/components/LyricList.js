import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { likeLyric } from '../graphql/mutations';

export class LyricList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          likes: likes + 1,
        },
      },
    });
  }

  renderLyrics() {
    const content = this.props.lyrics.map(lyric => (
      <li key={lyric.id} className="collection-item">
        { lyric.content }
        <div>
          <i
            className="material-icons"
            onClick={() => this.onLike(lyric.id, lyric.likes)}
          >
            thumb_up
          </i>
          { lyric.likes }
        </div>
      </li>
    ));

    return (
      <ul className="collection">
        { content }
      </ul>
    );
  }

  render() {
    return (
      <div>
        { this.renderLyrics() }
      </div>
    )
  }
}

export default graphql(likeLyric)(LyricList);
