import React from "react";
// import { IoMdAdd } from "react-icons/io";
// import { BiEdit } from "react-icons/bi";
// import { GrUpdate } from "react-icons/gr";
// import { RiDeleteBin6Line } from "react-icons/ri";
import "./App.css";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "",
      todo: []
    }
  }

  componentDidMount(){
    this.setState({})

    let data = localStorage.getItem("Todo_List")
    
    if(data == null){
      this.state.todo=[]
    }
    else{
      this.state.todo = JSON.parse(data)
    }

    this.setState({})
  }

  handleValue = (val) => {
    this.setState({
      value: val
    })
  }

  setdata = () => {
    
    let obj = {
      title: this.state.value,
      s: 0
    }
    this.state.todo = [...this.state.todo, obj]

    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
      
    this.setState({
      value: ""
    })
  }

  
  edit = (ind) => {
    for (var i = 0; i < this.state.todo.length; i++) {
      this.state.todo[i].s = 0;
    }
    this.state.todo[ind].s = 1;
    this.setState({});
  }

  setnewtext = (val, ind) => {
    this.state.todo[ind].title = val;
    this.setState({})
  }

  update = (i) => {
    this.state.todo[i].s = 0;
    this.setState({})
  }

  deletedata = (ind) =>{
    this.state.todo.splice(ind,1)
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
    this.setState({})
  }
render() {
  return (
    <div className="container">
    <div className="main-sec">
      <h1>TODO APP</h1>
      <input value={this.state.value} onChange={(e)=>this.handleValue(e.target.value)} type="text" placeholder="Add Your New Todo" className="addtask"/>
      <button onClick={()=>this.setdata()} className="add">
        Add
      </button><br /><br />
      {
        this.state.todo.map((v, i) => {
        return (
          v.s == 0 ?
          <div className="task">
          <li key={i}>
            {v.title}
            <button onClick={() => this.edit(i)} className="edit">Edit</button>
            <button onClick={()=>this.deletedata(i)} className="delete">Del</button>
          </li>
          </div> 
          :
          <div className="task">
          <li key={i}>
            <input type="text" value={v.title}
              onChange={(e) => this.setnewtext(e.target.value, i)}/>
            <button onClick={() => this.update(i)} className="update">Up</button>
            <button className="delete">Del</button>
          </li>
          </div> 
        )
        })
      }
    </div>
    </div>
  )
}
}
        
export default App;