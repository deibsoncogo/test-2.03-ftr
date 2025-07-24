import { expect } from "chai"
import { fetchData, fetchDataPromise } from "../src/async-functions.js"

describe("fetchData function with callback", () => {
  it("Must return 'received data'", (done) => {
    fetchData((result) => {
      expect(result).to.equal("received data")
      done()
    })
  })
})

describe("fetchDataPromise function with promise", () => {
  it("Must return 'received data'", () => {
    return fetchDataPromise().then((result) => {
      expect(result).to.equal("received data")
    })
  })
})

describe("fetchDataPromise function with promise and async/await", () => {
  it("Must return 'received data'", async () => {
    const result = await fetchDataPromise()
    expect(result).to.equal("received data")
  })
})
