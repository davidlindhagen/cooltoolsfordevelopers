import React, {Component} from 'react'
import {getInReviewProducts} from '../../reducers/products'
import {connect} from 'react-redux'

class Admin extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.getInReviewProducts()
  }


  render() {
    return (
      <div>
        <h1>Admin</h1>
        {this.props.adminProducts.map((product) => {
          return (
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h6>{product.informationOnFounders}</h6>
            </div>
          )
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    adminProducts: state.products.inReview
  }
}

const mapDispatchToProps = {
  getInReviewProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
