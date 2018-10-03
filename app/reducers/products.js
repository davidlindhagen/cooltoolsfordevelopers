import axios from 'axios'

export const submitProduct = (productName, shortDescription, longDescription, founderInfo) => {
  return (dispatch) => {
      axios.post(`/api/products`, {productName, shortDescription, longDescription, founderInfo})
          .then((result) => {
              console.log("not sure what you want with result", result)
          })
  }
}
