import React, {Component} from 'react'
import {submitProduct} from '../../reducers/products'
import {connect} from 'react-redux'

class SubmitProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: '',
      shortDescription: '',
      longDescription: '',
      founderInfo: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event){
    if (event.target.name!=='shortDescription' || event.target.value.length<60){
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  onSubmit(){
    if (this.state.productName && 
      this.state.shortDescription && 
      this.state.longDescription && 
      this.state.founderInfo
    ){
      this.props.submitProduct(
        this.state.productName,
        this.state.shortDescription,
        this.state.longDescription,
        this.state.founderInfo
      )
    }
    else {
      alert("Ensure you have filled in all fields ")
    }
  }

  render() {
    return (
      <div>
        <h1>Submit Product For Developers</h1>
        <label>Product Name</label>
        <input value={this.state.productName} style={{display: 'block', width:'200px'}}onChange={this.onChange}name={"productName"}></input>
        <label>60 Character Max Description for Emails</label>
        <input value={this.state.shortDescription} style={{display: 'block', width: '300px'}}onChange={this.onChange}name={"shortDescription"}></input>
        <label>Full Description</label>
        <textarea value={this.state.longDescription} style={{display: 'block', width:'300px', resize:'none'}}onChange={this.onChange}name={"longDescription"} rows={4}></textarea>
        <label>Information On Founders</label>
        <textarea value={this.state.founderInfo} style={{display: 'block', width:'300px', resize:'none'}}onChange={this.onChange}name="founderInfo" rows={2}></textarea>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  submitProduct
}

export default connect(null, mapDispatchToProps)(SubmitProductForm)
