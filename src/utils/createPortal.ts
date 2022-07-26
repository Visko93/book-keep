import { createPortal } from "react-dom";

type Props = {
  children: any;
  rootId: string;
};

function createRoot(rootId: string) {
  const rootElement = document.createElement("div");
  rootElement.setAttribute("id", rootId);
  document.body.appendChild(rootElement);
  return rootElement;
}

export function ReactPortal({ children, rootId = "new-modal" }: Props) {
  const targetElement = document.getElementById(rootId);

  return targetElement
    ? createPortal(children, targetElement)
    : createPortal(children, createRoot(rootId));
}
