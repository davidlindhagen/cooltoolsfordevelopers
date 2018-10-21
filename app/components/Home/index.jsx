import React, {Component} from 'react'
import {submitNewEmail} from '../../reducers/emails'
import {connect} from 'react-redux'
import Featured from './Featured'
import Past from './Past'
import Recent from './Recent'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panel: 'featured'
    }
    this.showPanel.bind(this)
  }

  changePanel(panel){
    this.setState({
      panel
    })
  }

  render() {
    <nav style={{display:'flex', justifyContent:'space-around'}}>
      <h3 onClick={()=>{this.changePanel('featured')}}>Featured Products</h3>
      <h3 onClick={()=>{this.changePanel('past')}}>Past Featured Products</h3>
      <h3 onClick={()=>{this.changePanel('recent')}}>Other Recent Products</h3>
    </nav>
    if (this.state.panel === 'featured'){
      return <Featured/>
    }
    else if(this.state.panel === 'past'){
      return <Past/>
    }
    else{
      return <Recent/>
    }
    // 10 Recent curated products

      //Need way to differentiate problems based on batch -> batch id

    // Old curated products
      // just show sorted list
    
    // Rejected problems from most recent cycle
      // rejected plus batch
    return (
    );
  }
}

export default connect(null, mapDispatchToProps)(Home)
