import React, { Component } from 'react';
import './addtask.css';

class AddTask extends Component{
  constructor(){
    super();
    this.state = {disabled : true};
  }

  validation(){
    if(this.refs.title.value.length > 0)
      this.setState({disabled: false})
    else if(!this.state.disabled)
      this.setState({disabled: true})
  }

  addTask(){
    this.props.update({
      name: this.refs.title.value,
      state: false
    });
    this.refs.title.value = '';
    this.setState({disabled: true})
  }


  render() {
    return (
      <form className="add" >
        <label className="add" htmlFor="title">New task: </label>
        <input className="add" ref="title" onChange={this.validation.bind(this)}
           type="text" name="title"/>
        <button className="add" disabled={this.state.disabled} type="button"
          onClick={this.addTask.bind(this)}>Add</button >
      </form>
      );
  }
}

export default AddTask;
