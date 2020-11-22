import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './task.js'
import { PrimaryButton, HoverCard} from 'office-ui-fabric-react';



class App extends Component {
  state = { 
    tasks:[]  ,
    number:0,
    text:null
   }

  render() { 
    return ( 
      
        <div>
          <HoverCard onMouseOver="sddsd">
          <PrimaryButton>Trial </PrimaryButton>
          </HoverCard>
          
        <div className="container">
            <div className="input-group mb-3">
            <div className="input-group-prepend">
            <button onClick={()=>this.handleSubmit()} className="btn btn-outline-info mt-5" type="button">Submit</button>
             </div>
             
            <input id="myInput"  type="text"  className="form-control form-control mr-5 mt-5 " placeholder="Enter a task" value={this.state.text} aria-label="" aria-describedby="basic-addon1"></input>
        </div>
        </div>

         <div className="container">
          {this.state.tasks.map(task=>
         <Task tsk={task.value}
          tskid={task.id}
          onDelete={()=>this.handleDelete(task.id)} />)}
         </div>
    
          </div>  
      
     );
  }

  handleSubmit=(target)=>
  {
    let v=document.getElementById("myInput").value;
    
    this.state.number=this.state.number+1;
    let arr=[...this.state.tasks]
    arr.push({id:this.state.number,value:v})
    document.getElementById("myInput").value=null
     
    

    this.setState({
      tasks:arr,
    });
    
  }
  
  
  handleDelete=(taskid)=>
  {
  
  let arr=this.state.tasks.filter(e=>e.id!==taskid)
  this.setState({tasks:arr})
  }
}
 
export default App;