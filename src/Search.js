import React from 'react';



class Search extends React.Component {
  constructor(props){
    super(props)
  }

  render() { 
    return  (
        <div className="search-area">
            <input type="text" placeholder="business type" onChange={(e)=> this.props.handleInput(e)}/>
            <input type="text" placeholder="location" onChange={(e)=>this.props.handleLocation(e)}/>
            <button onClick={()=>this.props.handleClick()}>Search</button>
        </div>
    )
  }
}
 
export default Search;