import { expect } from "chai"
import { sum } from "../src/math-utils.js"

describe("Sum", () => {
  it("Should add two numbers", () => {
    expect(sum(2, 3)).to.equal(5)
  })

  it("Should throw error for non-number inputs", () => {
    expect(() => sum("2", 3)).to.throw("Invalid arguments")
  })
})
