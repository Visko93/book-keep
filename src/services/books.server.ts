import { axiosClient } from "."

export async function fecthBooks() {
  const req = await axiosClient.get("/api/book")
  return await req.data
}
