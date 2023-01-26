import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      <div
        className="modal-overlay"
        style={{ display: props.isOpen ? "flex" : "none" }}
      >
        <div className="modal-box">{props.children}</div>
      </div>
    </>
  );
}
