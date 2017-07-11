import React from 'react';
import { hideErrorMessage } from 'actions/pageActions';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { show: state.page.errorMessage !== '', errorMessage: state.page.errorMessage };
};

const mapDispatchToProps = (dispatch) => {
    return { hideErrorMessage: () => dispatch(hideErrorMessage()) };
};

const ErrorModal = (props) => (
    <Modal show={props.show}>
        <Modal.Header>
            <Modal.Title>{ props.errorMessage }</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button onClick={ props.hideErrorMessage }>OK</Button>
        </Modal.Footer>
    </Modal>
);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);