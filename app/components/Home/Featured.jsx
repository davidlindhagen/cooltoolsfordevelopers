import React, {Component} from 'react'
import {connect} from 'react-redux'

class Featured extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.products) {
      this.props.getFeatured()
    }
  }
  render() {
    return this.props.products.map((product) => {
      return (
        <div key={product.id}>
          <h3>{product.link}</h3>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h6>{product.informationOnFounders}</h6>
          <button onClick={() => this.props.changeProductStatus(product.id, 'accepted')}>Accept</button>
          <button onClick={() => this.props.changeProductStatus(product.id, 'rejected')}>Reject</button>
        </div>
      )
    })
  }
}

const mapDispatchToProps = {
    getFeatured
}

const mapStateToProps = (state)=> {
  return{
    products: state.products.featured
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured)
