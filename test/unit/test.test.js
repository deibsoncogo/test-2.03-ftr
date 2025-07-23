const { assert, expect } = require("chai")

// mocha
describe("Calculadora", () => {
  it("deve somar dois números corretamente", () => { })
  it("deve multiplicar dois números corretamente", () => { })
  it("deve dividir dois números corretamente", () => { })
  it("deve subtrair dois números corretamente", () => { })
})

// chai
assert.equal(1 + 1, 2)

expect(1 + 1).to.equal(2)

  (1 + 1).should.equal(2)

// sinon
const stub = sinon.stub().returns(42)
expect(stub()).to.equal(42)

const mock = sinon.mock(object)
mock.expects("method").once().withArgs(1)
object.method(1)
mock.verify()
