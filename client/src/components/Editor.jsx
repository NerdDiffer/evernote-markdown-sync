import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/markdown/markdown');
require('codemirror/keymap/vim');

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        lineNumbers: true,
        keyMap: 'vim',
        mode: 'markdown',
        autofocus: true
      }
    };

    this.updateParentValue = this.updateParentValue.bind(this);
  }

  updateParentValue(code) {
    this.props.onChange(code);
  }

  render() {
    return (
      <CodeMirror
        value={ this.props.value }
        onChange={ this.updateParentValue }
        options={ this.state.options }
      />
    );
  }
}

export default Editor;
