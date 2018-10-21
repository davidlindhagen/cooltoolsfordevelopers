import axios from 'axios'
import {browserHistory} from 'react-router'

const initialState = {
    inReview: []
}

const reducer = (state=initialState, action) => {
    return state
}

export const submitNewEmail = (email) => {
    return (dispatch) => {
        axios.post(`/api/emails`, {email})
            .then((result) => {
                if (result.data === 'bad email') {
                    window.alert('Please ensure the email entered was correct')
                }
                else{
                    window.alert('Thanks for signing up! Look forward to curated weekly updates on cool tools for engineers')
                    browserHistory.push("/home")
                }
            })
    }
  }


export default reducer