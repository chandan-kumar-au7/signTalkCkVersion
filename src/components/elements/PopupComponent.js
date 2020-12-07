import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { centralStyle } from "./centralStyle";
export const PopupComponent = ({
  modalState = false,
  setmodalState,
  Header = "Basic",
  Content = <> </>,
  ...rest
}) => {
  // const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setmodalState(false)}
      onOpen={() => setmodalState(true)}
      open={modalState}
      style={centralStyle.ModalLogin}
      dimmer={"blurring"}>
      <Modal.Content style={{ backgroundColor: "transparent" }}>
        {Content}
      </Modal.Content>
    </Modal>
  );
};
