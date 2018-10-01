import React, {Component} from 'react'
import {submitProduct} from '../../reducers/products'

class SubmitProblemForm extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h1>Put Form Here</h1>
    )
  }
}

const mapDispatchToProps = {
  submitProduct
}
export default SubmitProblemForm