import { Patient } from "../entities/patient.js"

export class PatientService {
  constructor(patientRepository) {
    if (!patientRepository) throw new Error("patientRepository is required")
    this.patientRepository = patientRepository
  }

  addPatient(data) {
    if (!(data instanceof Patient)) throw new Error("Invalid patient object")

    const id = this.patientRepository.add(data)

    const savedPatient = this.patientRepository.findById(id)

    if (!savedPatient) throw new Error("Failed to save patient")

    return savedPatient
  }

  findAllPatients() {
    return this.patientRepository.findAll()
  }

  updatePatient(id, data) {
    const patient = this.patientRepository.findById(id)

    if (!patient) throw new Error("Patient not found")

    if (data.name) patient.name = data.name
    if (data.phone) patient.phone = data.phone
    if (data.email) patient.email = data.email
    if (data.emergencyContact) patient.emergencyContact = data.emergencyContact
    if (data.address) patient.address = data.address

    this.patientRepository.update(id, patient)

    return patient
  }

  deletePatient(id) {
    const patient = this.patientRepository.findById(id)

    if (!patient) throw new Error("Patient not found")

    this.patientRepository.delete(id)

    return patient
  }

  findPatientByName(name) {
    return this.patientRepository.findByName(name) || null
  }

  findPatientByBloodType(bloodType) {
    return this.patientRepository.findByBloodType(bloodType) || null
  }
}
