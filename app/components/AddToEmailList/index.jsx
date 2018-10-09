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
      <div>
        <h1>Add to email list</h1>
        <label>Email address:</label>
        <input type="email" value={this.state.email} onChange={this.onChange} style={{display: 'block', width:'200px'}}name={"email"}></input>
        <br/>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
    submitNewEmail
}

export default connect(null, mapDispatchToProps)(SubmitEmailForm)
