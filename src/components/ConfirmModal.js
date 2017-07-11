import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default (props) => (
    <Modal show={ props.show }>
        <Modal.Header>
            <Modal.Title>Are you sure you want to delete the selected Applicant?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button onClick={ props.beginDeleteApplicant }>Yes</Button>
            <Button onClick={ props.cancelApplicant }>No</Button>
        </Modal.Footer>
    </Modal>
);