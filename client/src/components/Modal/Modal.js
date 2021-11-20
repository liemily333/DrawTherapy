import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function TitleModal(props) {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={props.title}
            onChange={(e) => e.target.value}
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.closeModal(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={props.save}>
            Save drawing
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default TitleModal;
