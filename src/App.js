import React from 'react';
import catLogo from './images/catLogo.png';
import bars from './images/bars.png';
import './App.css';
import Search from './Search';
import Card from './Card';
import Result from './Result';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      data: [],
      term: '',
      location: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleInput (e) {
    let input = e.target.value;
    this.setState({term:input})
  }

  handleLocation (e){
    let locationInput = e.target.value;
    this.setState({location:locationInput})
  }


  handleClick (){
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 0wfInv6-U7H5J7CxTRc66mCsAN_VVRPNCqBeDcG-BMD4It3CnEvLa5WZwAnoLBvfinCD3g0N7ZCwm8HQWJoiad0iJS4u3h90dScUynDbW19pdQsUw3a_-uby6AZMYnYx");
    
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?term=${this.state.term}&location=${this.state.location}`, requestOptions)
      .then(response => response.json())
      .then(result => this.setState({data:result.businesses}))
      .catch(error => console.log('error', error));
  }

  componentDidMount () {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 0wfInv6-U7H5J7CxTRc66mCsAN_VVRPNCqBeDcG-BMD4It3CnEvLa5WZwAnoLBvfinCD3g0N7ZCwm8HQWJoiad0iJS4u3h90dScUynDbW19pdQsUw3a_-uby6AZMYnYx");
    
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?location=london", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({data:result.businesses}))
      .catch(error => console.log('error', error));
  }


  render() { 
    return(
      <div className="App">
        <header>
            <div className="logo">
                <img src={catLogo} alt="search"/>
            </div>
            <Search handleClick={this.handleClick} handleInput={this.handleInput} handleLocation={this.handleLocation}/>
            <div className="bars">
                <img src={bars} alt="bars"/>
            </div>
        </header>

        <main>
            <Result data={this.state.data}/>
        </main>
      
      </div>
    )
  }
}
 
export default App;

