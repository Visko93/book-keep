import { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<"dialog"> & {
  isOpen: boolean;
  handleClose: () => void;
};
