import React, {Component} from 'react'
import {submitNewEmail} from '../../reducers/emails'
import {connect} from 'react-redux'

class SubmitEmailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event){
    this.setState({
      email: event.target.value
    })
  }

  onSubmit(){
    if (this.state.email){
      this.props.submitNewEmail(
        this.state.email
      )
    }
    else {
      alert("Ensure you have filled in all fields ")
    }
  }

  render() {
    return (
      <div style={{display:'flex', height:'100vh', alignItems:'center', justifyContent: 'center'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:'48px'}}>Add to email list</h1>
        <label>Email address:</label>
        <input style={{display:'block', width:'100%'}} type="email" value={this.state.email} onChange={this.onChange} name={"email"}></input>
        <br/>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
    submitNewEmail
}

export default connect(null, mapDispatchToProps)(SubmitEmailForm)
