import { ComponentPropsWithoutRef } from "react"

export type Props = ComponentPropsWithoutRef<"section"> & {
  handleOpen: () => void
  handleCurrentId: (id: string) => void
}
