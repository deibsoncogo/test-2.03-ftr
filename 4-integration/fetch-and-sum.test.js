import { expect } from "chai"
import sinon from "sinon"
import { fetchAndSum } from "./fetch-and-sum.js"

describe("fetchAndSum", () => {
  let apiClientStub

  beforeEach(() => {
    apiClientStub = { get: sinon.stub() }
  })

  it("Must sum if the API returns valid: true", async () => {
    apiClientStub.get.resolves({ valid: true })

    const result = await fetchAndSum(apiClientStub, 2, 3)

    expect(result).to.equal(5)
    expect(apiClientStub.get.calledWith("/validate", { params: { x: 2, y: 3 } })).to.be.true
  })
})
