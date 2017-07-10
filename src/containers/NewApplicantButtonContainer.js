import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { createNewApplicant } from '../actions/pageActions';

const NewApplicantButton = (props) => (
        <Button bsStyle='primary' 
                onClick={() => props.dispatch(createNewApplicant())}>New Applicant</Button>);

export default connect()(NewApplicantButton);
