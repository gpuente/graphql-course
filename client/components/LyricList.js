import React, { Component } from 'react';

export class LyricList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderLyrics() {
    const content = this.props.lyrics.map(lyric => (
      <li key={lyric.id} className="collection-item">{ lyric.content }</li>
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

export default LyricList;
