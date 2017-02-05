import React, { Component, PropTypes} from 'react'; 
import './task.css';

class Task extends  Component{
  constructor(props){
    super(props);
    this.state = {...props, rename: false, tempName: props.name};
  } 

  onChange(e){ 
    this.setState({tempName: e.target.value});  
  }

  save(){ 
    if(this.state.tempName === ''){
      this.delete();
      return;
    }

    this.props.tosave({...this.state, name: this.state.tempName});
    this.onRename();
  }

  cancel(){  
    this.setState({ tempName: this.state.name, rename: !this.state.rename}); 
  }

  delete(){ 
    this.props.todelete(this.state.taskId);
  }

  onCheckBoxChange(){    
    this.setState({...this.state, state: !this.state.state}); 
    this.props.tosave({...this.state, state: !this.state.state});
 
  }
  componentWillReceiveProps(props){    
    this.setState({...props, rename: false, tempName: props.name}); 
  }

  onRename(){ 
    this.setState({rename: !this.state.rename}); 
  }

  render(){
    return <li>
              <input checked={this.state.state}
                onChange={()=>this.onCheckBoxChange()}
                className="checkBox" type="checkbox"/>
              {(!this.state.rename)?
                <span className={this.state.state? 'crossed' : null } onClick={()=>this.onRename()}> {this.state.name}</span>:
                <div>
                  <input className="task" value={this.state.tempName}
                    onChange={(event)=>this.onChange(event)}
                  />
                    <div  className="line">
                    <button className="task" name="save" onClick={()=>this.save()}>Save</button>
                    <button className="task" name="cancel" onClick={()=>this.cancel()}>Cancel</button>
                    <button className="task" name="delete" onClick={()=>this.delete()}>Delete</button>
                    </div> 
                  </div>
                }
              </li>
  }
}

export default Task;

Task.defaultProps = {name:'empty', state: false};
Task.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired
}
