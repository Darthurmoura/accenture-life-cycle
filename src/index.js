import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
    clicou: 'ainda não clicou',
  }

  componentDidMount() {
    console.log('[APP] - Componente foi montado');
  }

  componentDidUpdate() {
    console.log('[APP] - Componente foi atualizado');
  }

  handleClick() {
    this.setState({
      clicou: 'clicou',
    });
  }

  handleTextChange(e) {
    this.setState({
      texto: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Dale, {this.props.stuff.name}.</h1>
        <h2>Tu tem {this.props.stuff.age} anos.</h2>
        <p>Você {this.state.clicou}</p>
        <button onClick={this.handleClick.bind(this)}>Exibir alerta</button>
        <h3>{this.state.texto}</h3>
      </div>
    )
  }
}

const stuff = {
  name: 'Daniel',
  age: 35,
};

ReactDOM.render(
  <React.StrictMode>
    <App stuff={stuff} />
  </React.StrictMode>,
  document.getElementById('root')
);
