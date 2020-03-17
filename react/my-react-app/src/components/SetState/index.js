import React from 'react';

export default class SetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0
    }
  }
  addv1 = ()=>{
    setTimeout(() => {
      this.setState({count1:this.state.count1+1});
      this.setState({count1:this.state.count1+1});
      this.setState(prevState=>({
        count1:prevState.count1+1
      }));
      this.setState(prevState=>({
        count1:prevState.count1+1
      }));
    }, 0);
  }
  addv2 = ()=>{
    this.setState({count2:this.state.count2+1});
    this.setState({count2:this.state.count2+1});
    this.setState(prevState=>({
      count2:prevState.count2+1
    }));
    this.setState(prevState=>({
      count2:prevState.count2+1
    }));
  }
  render() {
    const { count1, count2 } = this.state;
    return (
      <div className="App">
        <div>
          {count1}
          <button onClick={()=>this.addv1()}>addv1</button>
        </div>
        <div>
          {count2}
          <button onClick={()=>this.addv2()}>addv2</button>
        </div>
      </div>
    );
  }
}
