
import React, {Component} from 'react';
import'./App.css'
import User from './compone/User';





class App extends Component {
state = {
  users: [
    {id:'drrr',name:'john',age:20},
    {id:'erew',name:'sabari',age:23},
    {id:'fdfd',name:'murali',age:25},
  ]
} 
deleteuser=(index, e)=>{
  const users=Object.assign([], this.state.users);
  users.splice(index, 1);
  this.setState({users:users})

}

  render() {
  return (
    <div className="App">
      <ul>
        {
          this.state.users.map((user,index)=>{
          return(<User age={user.age}
            delEvent={this.deleteuser.bind(this,index)}>{user.name} </User>)
          
          })
        }
      </ul>
</div>
  );
}
}

export default App;
