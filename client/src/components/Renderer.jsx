import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <ReactMarkdown
        source={ this.props.source }
        skipHtml={ true }
        escapeHtml={ true }
      />
    );
  }
}

export default Renderer;
