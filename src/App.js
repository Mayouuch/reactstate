import React, { Component } from 'react'
import Im1 from '../src/175889183_264785515373475_7273384263359610096_n.jpg'
export default class App extends Component {
  constructor(props){
    super(props)
  }
    state = {
      person: {
        fullname:'Khiari Samar',
        bio:'I have passion with web development',
        imgSrc: Im1,
        Profession:'Student'
      },
      show:true,
      timer:0
    };
    showProfile= () =>{
     this.setState({...this.state,show: !this.state.show})
    }
    componentDidMount(){
     setInterval(()=>this.setState({timer:this.state.timer+1}),1000)
    }
    componentDidUpdate(){
      console.log('componentDidUpdate')

    }
    componentWillUnmount(){
      console.log('componentWillUnmount')
    }
  render() {
    console.log('rendering')
    return (
      <div>
      {this.state.show && (

      <div >
        <h1 style={{ display:'flex',justifyContent:'center'   }}> {this.state.person.fullname}  </h1>
        <h2 style={{ display:'flex',justifyContent:'center'   }}>  {this.state.person.bio}  </h2>
        <h3 style={{ display:'flex',justifyContent:'center'   }}>  {this.state.person.Profession} </h3>
        <img src={this.state.person.imgSrc} alt='Photo' style={{ display:'flex',justifyContent:'center',alignItems:'center'}}></img>
<p>{this.state.timer}</p>
      </div>
    )}
    <button onClick={()=>this.showProfile({show:this.state.show})}>Person Profile | Hide Profile</button>
    </div>
  
  );
      }
}
