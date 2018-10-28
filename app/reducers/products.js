import axios from 'axios'

const initialState = {
    inReview: [],
    recent: [],
    featured:[],
    past:[]
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        //TODO remove set in review products
        case 'SET_IN_REVIEW_PRODUCTS':
            return {
                ...state,
                inReview: action.products
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                [action.productClass]: products
            }
        default:
            return state
    }
}


export const setInReviewProducts = (products) => {
    return {
        type: 'SET_IN_REVIEW_PRODUCTS',
        products
    }
}

export const setProducts = (productClass, products) => {
    return {
        type: 'SET_PRODUCTS',
        productClass,
        products
    }
}

export const submitProduct = (productName, shortDescription, longDescription, founderInfo, link) => {
  return (dispatch) => {
      axios.post(`/api/products`, {productName, shortDescription, longDescription, founderInfo, link})
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

export const changeProductStatus = (productId, status) => {
    return (dispatch) => {
        axios.put(`/api/products`, {productId, status})
            .then((result) => {
                if (result.data == 'error'){
                    window.alert('Sorry an error has occured. Please try again')
                }  
                else{
                   dispatch(getInReviewProducts()) 
                }
            })
    }
}

export const getRecent = () => {
    return (dispatch) => {
        axios.get('/api/products/recent')
            .then((result) => {
                if (result.data == 'error'){
                    window.alert('Sorry an error has occured. Please try again')
                }
                else{
                    dispatch(setProducts('recent', result.data)) 
                }
            })
    }
}

export const getFeatured = () => {
    return (dispatch) => {
        axios.get('/api/products/featured')
            .then((result) => {
                if (result.data == 'error'){
                    window.alert('Sorry an error has occured. Please try again')
                }
                else{
                    dispatch(setProducts('featured', result.data)) 
                }
            })
    }
}

export const getPast = () => {
    return (dispatch) => {
        axios.get('/api/products/past')
            .then((result) => {
                if (result.data == 'error'){
                    window.alert('Sorry an error has occured. Please try again')
                }
                else{
                    dispatch(setProducts('past', result.data)) 
                }
            })
    }
}

export default reducer