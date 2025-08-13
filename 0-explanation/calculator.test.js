import { expect } from "chai"
import { sum } from "./calculator.js"

describe("Sum function", () => {
  it("Must return the sum of two numbers", () => {
    const result = sum(2, 3)
    expect(result).to.equal(5)
  })

  it("Must return the correct sum with negative numbers", () => {
    const result = sum(-1, -1)
    expect(result).to.equal(-2)
  })
})
