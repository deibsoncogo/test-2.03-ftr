import sinon from "sinon"
import { PatientService } from "../../../src/domain/services/patient-service.js"
import { PatientController } from "../../../src/interfaces/controllers/patient-controller.js"

describe("PatientController", () => {
  let patientController
  let patientService
  let sandbox

  const mockPatientData = {
    identificationDocument: "12345678901",
    name: "John Doe",
    birthDate: "1990-01-01",
    gender: "Male",
    bloodType: "A+",
    address: {},
    phone: "555-1234",
    email: "john@example.com",
    emergencyContact: {},
  }

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    patientService = sandbox.createStubInstance(PatientService)
    patientController = new PatientController(patientService)
  })
})
