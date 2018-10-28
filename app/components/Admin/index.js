import React, {Component} from 'react'
import {getInReviewProducts} from '../../reducers/products'
import {changeProductStatus} from '../../reducers/products'
import {connect} from 'react-redux'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.publish = this.publish.bind(this)
  }

  componentDidMount(){
    this.props.getInReviewProducts()
  }

  renderInReview(){
    console.log("this.props", this.props)
    return this.props.adminProducts.map((product)=>{
      if(product.status == "review"){
        return(
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h6>{product.informationOnFounders}</h6>
            <button onClick={() => this.props.changeProductStatus(product.id, 'accepted')}>Accept</button>
            <button onClick={() => this.props.changeProductStatus(product.id, 'rejected')}>Reject</button>
          </div>
        )
      }
    })
  }

  renderAccepted(){
    return this.props.adminProducts.map((product)=>{
      if(product.status == "accepted"){
        return(
          <div key={product.id}>
            <h3>{product.name}</h3>
          </div>
        )
      }
    })
  }

  publish(){
    this.props.adminProducts.forEach((product)=>{
      if(product.status == "accepted"){
        this.props.changeProductStatus(product.id, 'published')
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        {this.renderInReview()}
        <h3>Waiting To Be Published</h3>
        {this.renderAccepted()}
        <button onClick={this.publish}>Publish</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    adminProducts: state.products.inReview
  }
}

const mapDispatchToProps = {
  getInReviewProducts,
  changeProductStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
