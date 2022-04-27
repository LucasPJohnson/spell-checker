import React from "react";
import './App.css';

class App extends React.Component {

    state = {
      loading: true,
      spell: null,
    };

    async componentDidMount() {
        const url = "https://www.dnd5eapi.co/api/spells";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({spell: data.results[0], loading: false });
    }
    render() {
        return (
            <div className = "tc">
                {this.state.loading || !this.state.spell ? (
                  <div>loading...</div>
                  ) : (
                  <div>
                    <div>{this.state.spell.index}</div>
                    <div>{this.state.spell.name}</div>
                    <div>{this.state.spell.url}</div>
                  </div>
                  )}
            </div>
        );
    }
}

export default App;