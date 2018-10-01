export const submitProduct = (id) => {
  return (dispatch) => {
      axios.post(`/api/products`)
          .then((result) => {
              //handle response
          })
  }
}
