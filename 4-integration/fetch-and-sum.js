export async function fetchAndSum(apiClient, x, y) {
  const response = await apiClient.get("/validate", { params: { x, y } })

  if (!response.valid) {
    throw new Error("Invalid inputs from API")
  }

  return x + y
}
