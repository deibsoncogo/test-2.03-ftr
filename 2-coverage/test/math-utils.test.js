import { expect } from "chai"
import { divide, sum } from "../src/math-utils.js"

describe("Sum", () => {
  it("Should add two numbers", () => {
    expect(sum(2, 3)).to.equal(5)
  })

  it("Should throw error for non-number inputs", () => {
    expect(() => sum("2", 3)).to.throw("Invalid arguments")
  })
})

describe("Divide", () => {
  it("Should divide two numbers", () => {
    expect(divide(6, 3)).to.equal(2)
  })

  it("Should throw error for division by zero", () => {
    expect(() => divide(6, 0)).to.throw("Division by zero")
  })
})
