import React from 'react';
import Card from './Card';

class Result extends React.Component {
  constructor(props){
    super(props)
  }
  render() { 
    return (
     
      <>
         {this.props.data.map(business => {
           return(
              <Card business={business}/>
           )
          })}
      </>
    )
  }
}
 
export default Result;