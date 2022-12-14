import { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"div"> & {
  handleClose: () => void
  id: string
}
