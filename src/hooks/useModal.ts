import { useState } from "react"

export const useModal = (id?: string) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    // navigate.push("//" + id, { });
  }

  const handleClose = () => {
    setOpen(false)
    // navigate.push("/");
  }

  return { open, handleClose, handleOpen }
}
