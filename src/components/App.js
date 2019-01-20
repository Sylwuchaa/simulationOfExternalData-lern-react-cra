import React, { Component } from 'react';

import './App.css';
import { setInterval } from 'core-js';

const data = [
  {id:1, title: 'Tytuł wiadomości numer 1 ...',body: 'Zawartość wiadomości numer 1 ...'},
  {id:2, title: 'Tytuł wiadomości numer 2 ...',body: 'Zawartość wiadomości numer 2 ...'}
]
setInterval(() =>{
  const index = data.length + 1;
  data.push({id: index,
  title:`Tytuł wiadomości numer ${index} ...`,
  body: `Zawartość wiadomości numer ${index} ...`
})
console.log(data);
}, 3000)

class App extends Component {
  state = {
    comments: [...data]

  }

  getData = () => {
    if(this.state.comments.length !== data.length) {
    this.setState({
      comments: [...data]
    })
    }else {
      console.log('dane takie same - nie aktualizuje')
    }
  }
  componentDidMount() {
   this.idInteval = setInterval(this.getData, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.idInteval)
  }


  render() {
    const comments = this.state.comments.map(comment => (
      <div key= {comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ))
    return (
      <div className="App">
        {comments.reverse()}
      </div>
    )


  }
}

export default App;
