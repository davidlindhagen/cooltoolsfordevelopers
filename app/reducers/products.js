import axios from 'axios'

const initialState = {
    inReview: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_IN_REVIEW_PRODUCTS':
          return {
              ...state,
              inReview: action.products
          }
        }
        return state
}


export const setInReviewProducts = (products) => {
    return {
        type: 'SET_IN_REVIEW_PRODUCTS',
        products
    }
}

export const submitProduct = (productName, shortDescription, longDescription, founderInfo) => {
  return (dispatch) => {
      axios.post(`/api/products`, {productName, shortDescription, longDescription, founderInfo})
          .then((result) => {
              console.log("not sure what you want with result", result)
          })
  }
}

export const getInReviewProducts = () => {
    return (dispatch) => {
        axios.get(`/api/products/admin`)
            .then((result) => {
                if (result.data == 'error'){

                }
                else{
                    dispatch(setInReviewProducts(result.data))
                }
            })
    }
  }

export default reducer