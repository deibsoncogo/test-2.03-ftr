import express from "express"
import { PatientService } from "./domain/services/patient-service.js"
import { PatientRepository } from "./infrastructure/persistence/patient-repository.js"
import { setupRoutes } from "./interfaces/routes/apiRoutes.js"

const patientRepository = new PatientRepository()
const patientService = new PatientService(patientRepository)

const app = express()
app.use(express.json())

setupRoutes(app, patientService)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
