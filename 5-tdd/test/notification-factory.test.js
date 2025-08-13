import { expect } from "chai"
import sinon from "sinon"
import { NotificationFactory } from "../src/notification-factory.js"

describe("Notification Factory - TDD", () => {
  it("Should be possible to create an email notification", () => {
    const emailNotifier = NotificationFactory.create("email")
    expect(emailNotifier.send()).to.equal("Enviando Email: Olá, usuário!")
  })

  it("Should possible create an SMS notification", () => {
    const smsNotifier = NotificationFactory.create("sms")
    const spy = sinon.spy(smsNotifier, "send")
    smsNotifier.send()
    expect(spy.calledOnce).to.be.true
  })
})
