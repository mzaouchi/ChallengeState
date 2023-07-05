import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks : [
        {desc : "Buy coffee",valid : false, id : Math.random()},
        {desc : "Buy milk",valid : false, id : Math.random()},
        {desc : "Buy butter",valid : false, id : Math.random()},
      ],
      textP : ''
    }
  }
  handleAdd=()=>{
    if (this.state.textP == '') {
      alert("Empty String")
    } else {
      this.setState({tasks : [...this.state.tasks,{desc : this.state.textP,valid : false,id : Math.random()}]})
      this.setState({textP : ''})
    }
  } 

  handleDelete=(a)=> this.setState({tasks : this.state.tasks.filter((el,i,t)=>el.id != a)})
  
  handleValid=(a)=> this.setState({tasks : this.state.tasks.map((el,i,t)=> el.id == a ? {...el,valid : !el.valid} : el)})
  render(){
    return(
      <div>
        <h1>TO DO</h1>
        {
          this.state.tasks.map((el,i,t)=> 
          <>
          <h2 className={el.valid && "djeja"}>{el.desc}</h2>
          {/* <h3>{el.valid ? "TRUE" : "FALSE"}</h3> */}
          <button onClick={()=>this.handleValid(el.id)}>Valid</button>
          <button onClick={()=>this.handleDelete(el.id)}>Delete</button>         
          </>
          )
        }
        <br/>
        <br/>
        <input value={this.state.textP} type='text' onChange={(e)=>this.setState({textP : e.target.value})}/>
        <button onClick={this.handleAdd}>Add</button>

      </div>
    )
  }
}

export default App;
