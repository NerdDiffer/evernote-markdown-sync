import React, { Component } from 'react';
import Editor from './components/Editor';
import Renderer from './components/Renderer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Type markdown here'
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(md) {
    this.setState({ value: md });
  }

  render() {
    return (
      <section>
        <section className="editor">
          <Editor
            value={this.state.value }
            onChange={ this.updateValue }
          />
        </section>
        <section className="renderer">
          <Renderer
            source={ this.state.value }
          />
        </section>
      </section>
    );
  }
}

export default App;
