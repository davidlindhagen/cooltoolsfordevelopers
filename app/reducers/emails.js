import axios from 'axios'

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
                console.log("not sure what you want with result", result)
            })
    }
  }


export default reducer