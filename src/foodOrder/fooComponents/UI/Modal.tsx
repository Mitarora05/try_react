import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

interface IModalProps extends React.PropsWithChildren {
  //   children: React.ReactNode;
  onClose: () => void;
}

interface IModalOverlayProps extends React.PropsWithChildren {
  //   children: React.ReactNode;
}

const Backdrop: React.FC = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay: React.FC<IModalOverlayProps> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement: Element | null = document.getElementById("overlays");

// createPortal is an inbuild method imported from React-DOM 
const Modal: React.FC<IModalProps> = (props) => {
  return (
    <Fragment>   
      {ReactDOM.createPortal(<Backdrop />, portalElement!)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </Fragment>
  );
};

export default Modal;
