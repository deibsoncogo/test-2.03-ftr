import { expect } from "chai"
import { Allergy } from "../../../src/domain/value-objects/allergy.js"

describe("Allergy", () => {
  it("Should create an allergy with valid data", () => {
    const allergy = new Allergy("Peanuts")
    expect(allergy.name).to.equal("Peanuts")
  })

  it("Should throw an error when creating an allergy without a name", () => {
    expect(() => new Allergy("")).to.throw("Allergy name is required")
  })
})
