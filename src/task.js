import React, { Component } from 'react';

class Task extends Component {
    state = {
        tsk:this.props.tsk

      }
    render() { 
        return ( 
            <div>
                <p className="badge bade-large badge-info ml-5 ">{this.state.tsk}</p>
                <button onClick={()=>this.props.onDelete(this.props.tskid)} className="btn btn-sm btn-warning ml-2">Delete</button>
            </div>
         );
    }
}
 
export default Task;