import React, { Component } from 'react'

export default class Nextpage extends Component {
  render() {
    return (
      <>
         <div className="body">
         <div className="title">FEEDBACK PAGE</div>
             <br /><br />

            <div className="box feedback">
             {this.props.feedback.map((item,index)=>{
                return(
               <div key={index} className='inside' >
               Name : {item.name} | Department :  {item.dept} | Rating {item.rating}
      
              </div>
                ) 
                })}
            </div> 
            <div>
                <button onClick={this.props.toggleFunc} className='btn'>BACK</button>
            </div>
            </div>
      </>
    )
  }
}