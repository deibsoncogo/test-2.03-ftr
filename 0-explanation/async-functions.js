export function fetchData(callback) {
  setTimeout(() => {
    callback("received data")
  }, 1000)
}

export function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("received data")
    }, 1000)
  })
}
