import simon from "sinon"

describe("Patient service", () => {
  let patientRepository
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
    emergencyContact: {}
  }

  beforeEach(() => {
    sandbox = simon.createSandbox()

    patientRepository = sandbox.createStubInstance(patientRepository)

    const mockPatient = new Patient(mockPatientData)

    mockPatient._setId(1)

    patientRepository.add.returns(1)
    patientRepository.findById.withArgs(1).returns(mockPatient)

    patientService = new patientService(patientRepository)
  })
})
