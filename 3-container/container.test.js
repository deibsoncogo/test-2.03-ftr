import { expect } from "chai"
import { GenericContainer } from "testcontainers"

let container

before(async function () {
  this.timeout(30000)

  container = await new GenericContainer("alpine")
    .withCommand(["sh", "-c", "sleep -60"])
    .start()

  console.log(`Container iniciado: ${container.getId()}`)
})

after(async function () {
  if (container) {
    await container.stop()
    console.log("Container encerrado")
  }
})

describe("Sum", () => {
  it("Should be possible to add two numbers", () => {
    const result = 2 + 3
    expect(result).to.equal(5)
  })
})
