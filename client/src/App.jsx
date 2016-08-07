import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <section>
        <textarea className="writeMarkdown" cols="100" defaultValue="Write text here"></textarea>
        <section className="renderMarkdown"></section>
      </section>
    );
  }
}

export default App;
