import React, { Component } from 'react';
import DiaryEntry from './components/diaryEntry';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      entries: []
    }
    this.getDiaryEntries = this.getDiaryEntries.bind(this);
  }

  componentDidMount(){
    this.getDiaryEntries();
  }

  async getDiaryEntries(){
    const response = await fetch('http://localhost:4000/api/momdiaries',{
      mode: 'cors',
      method: 'GET'
    });
    const responseJson = await response.json();
    this.setState({entries: responseJson});
  }

  render() {
    const diaryEntries = this.state.entries.map(e => <DiaryEntry title={e.title} week={e.week} diary={e.diary}/>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {diaryEntries}
        </div>
      </div>
    );
  }
}

export default App;
