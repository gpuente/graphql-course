import React, { Component } from 'react';
import { graphql } from 'react-apollo';

/** Mutations */
import { addLyricToSong } from '../graphql/mutations';

export class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const { songId } = this.props;
    const { content } = this.state;

    this.props.mutate({
      variables: { content, songId },
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          type="text"
          value={this.state.content}
          onChange={e => this.setState({ content: e.target.value })}
        />
      </form>
    );
  }
}


const gqlWrapper = graphql(addLyricToSong);

export default gqlWrapper(LyricCreate);
