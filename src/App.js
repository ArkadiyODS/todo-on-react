import React, { Component } from 'react';
import AddTask from './addtask.js';
import Task from './task.js';
import Service from './service.js';
import './App.css';
import './index.css';

class App extends Component {
  name = 'Todo list'

  constructor(props){
    super(props);
    this.serv = new Service();  
    this.state = { taskList : this.serv.getTasks() }; 
  }
 
 addTask(task){ 
  this.serv.addTask(task);
  this.setState({taskList: this.serv.getTasks()});
 }
 saveTask(task){   
  this.serv.changeTask(task, task.taskId);  
  this.setState({taskList: this.serv.getTasks()});
 }
 deleteTask(index){ 
  this.serv.removeTask(index);
  this.setState({taskList: this.serv.getTasks()});
 }

  render() { 
    return <div>
            <h1>{this.name}</h1> 
            <hr/>
              <AddTask update={this.addTask.bind(this)}></AddTask>
              <hr/>
              <ul>
                {
                   this.state.taskList.map((el,i)=>(
                    <Task key={i}  {...el}
                    taskId={i}
                    tosave={this.saveTask.bind(this)}
                    todelete={this.deleteTask.bind(this)} 
                    />
                 ))
                }
              </ul>
          </div>

  }
}

export default App;
