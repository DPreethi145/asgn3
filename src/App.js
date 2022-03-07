import React, { Component } from 'react'

import './App.css'
import Nextpage from './Nextpage'

class App extends Component {
    state={
        name:"",
        dept:"",
        rating:"",
        user:[],
        show: true,
    }


    handleUpdate=(event)=>{
        this.setState({
        [event.target.name]:event.target.value
    })
    }

    handleClick=(e)=>{
        e.preventDefault()
        console.log(this.state);

        var Arr=[]
        // console.log(Arr);
        var tempObj={
        name: this.state.name,
        dept: this.state.dept,
        rating: this.state.rating
        }

        Arr=this.state.user
        Arr.push(tempObj)
        this.setState({user:Arr})
        this.setState({name:'',dept:'',rating:''})
        this.setState({show: !this.state.show})
        // console.log(this.state.user);
    }

    NextFile = ()=>{
      this.setState({show: !this.state.show});
    }

  render() {
    return (
      <>    
        {this.state.show?
        <div className="body">
        <div className="title">EMPLOYEEE FEEDBACK FORM</div>
        <form  onSubmit={this.handleClick} className='form_part'>
            <label>Name:</label>
            <input type="text" name="name" autoComplete='off'   className='inpt' value={this.state.name} onChange={this.handleUpdate} /><br />
            <label>Department:</label>
            <input type="text" name="dept" autoComplete='off' className='inpt'  value={this.state.dept} onChange={this.handleUpdate} /><br />
            <label>Rating:</label>
            <input type="text" name="rating" autoComplete='off' className='inpt'  value={this.state.rating} onChange={this.handleUpdate} /><br />
            <button className='btn' onClick={this.handleClick}>submit</button>
        </form>
        

      </div> 
      : <Nextpage feedback={this.state.user}  toggleFunc={this.NextFile} />
      }

      </>
    )
  }
}

export default App