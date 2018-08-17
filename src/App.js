import React, { Component } from 'react';
import DiaryEntry from './components/diaryEntry';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      entries: [],
      title: '',
      week: '',
      content: ''
    }
    this.getDiaryEntries = this.getDiaryEntries.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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

  handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      week: this.state.week,
      title: this.state.title,
      content: this.state.content
    })
    fetch('http://localhost:4000/api/momdiaries', {
      method: 'post',
      body: data,
      headers: {
        "Content-type": "application/json"
      }
    }).then(data => {
      this.getDiaryEntries();
    })
  }

  handleDelete(e, id){
    e.preventDefault();
    console.log('id is: ', id)
    fetch(`http://localhost:4000/api/momdiaries/${id}`, {
      method: 'delete'
    }).then(data => {
      this.getDiaryEntries();
    })
  }

  handleUpdate(e, id){
    e.preventDefault();
    const data = JSON.stringify({
      week: this.state.week,
      title: this.state.title,
      content: this.state.content,
    })
    console.log('id is: ', id)
    fetch(`http://localhost:4000/api/momdiaries/${id}`, {
      method: 'put',
      body: data,
      headers: {
        "Content-type": "application/json"
      }
  }).then(data => {
    this.getDiaryEntries();
    })
  }

  render() {
    const diaryEntries = this.state.entries.map(e => 
      <DiaryEntry 
        id={e._id}
        title={e.title} 
        week={e.week} 
        content={e.content}
        deleteAction={this.handleDelete}
        updateAction={this.handleUpdate}/>
    );
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} style={{position: 'fixed'}}>
        <input type="text" placeholder="title" onChange={e => this.setState({title: e.target.value})}/>
        <input type="text" placeholder="week" onChange={e => this.setState({week: e.target.value})}/>
        <input type="text" placeholder="content" onChange={e => this.setState({content: e.target.value})}/>
        <button type="submit">Submit</button>
        </form>
        <div className="container">
          {diaryEntries}
        </div>
      </div>
    );
  }
}

export default App;
