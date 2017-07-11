import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { createNewApplicant } from '../actions/pageActions';

const mapDispatchToProps = (dispatch) => {
        return { createNewApplicant: () => dispatch(createNewApplicant()) }
};

const NewApplicantButton = (props) => (
        <Button bsStyle='primary' onClick={ props.createNewApplicant }>New Applicant</Button>);

export default connect(null, mapDispatchToProps)(NewApplicantButton);
