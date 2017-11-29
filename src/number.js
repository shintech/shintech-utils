  var queries = {}

  queries.validatePositiveNumber = (value, callback) => {
    let obj = []

    if (isNaN(value) || typeof value !== 'number' || value < 0) {
      obj.push(false, value)
      callback(new Error(`validatePositiveNumber -> ${typeof value} is not a positive number`), obj)
    } else {
      obj.push(true, value)
      callback(null, obj)
    }
  }

  export default queries
