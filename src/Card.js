import React from 'react';


class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.business.image_url} alt="" />
        <h2>{this.props.business.name}</h2>
        <p>Rating: {this.props.business.rating}</p>
        <p>Price: {this.props.business.price}</p>
        <p>Address: {this.props.business.location.address1}</p>
        <button>Check it out</button>
      </div>
    )
  }
}

export default Card;