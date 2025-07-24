import { expect } from "chai"
import { Repository } from "../../../src/domain/repositories/repository.js"

describe("Repository", () => {
  let repository

  beforeEach(() => {
    repository = new Repository()
  })

  it("Should add and retrieve an entity by ID", () => {
    const entity = { name: "John Doe" }
    repository.add(1, entity)

    expect(repository.findById(1)).to.deep.equal(entity)
  })

  it("Should throw an error when adding an entity with an existing ID", () => {
    repository.add(1, { name: "John Doe" })
    expect(() => repository.add(1, { name: "Jane Doe" })).to.throw("Entity already exists")
  })

  it("Should return all entities", () => {
    repository.add(1, { name: "John Doe" })
    repository.add(2, { name: "Jane Doe" })

    expect(repository.findAll()).to.have.lengthOf(2)
  })

  it("Should update an existing entity", () => {
    repository.add(1, { name: "John Doe" })
    repository.update(1, { name: "John Updated" })

    expect(repository.findById(1).name).to.equal("John Updated")
  })

  it("Should throw an error when updating a non-existent entity", () => {
    expect(() => repository.update(99, { name: "Non-existent" })).to.throw(
      "Entity not found"
    )
  })

  it("Should delete an existing entity", () => {
    repository.add(1, { name: "John Doe" })
    repository.delete(1)

    expect(repository.findById(1)).to.be.null
  })

  it("Should throw an error when deleting a non-existent entity", () => {
    expect(() => repository.delete(99)).to.throw("Entity not found")
  })
})
