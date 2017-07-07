import React from 'react';
import { Button } from 'react-bootstrap';
import { CenteredDiv } from '../styled-components/GridWrappers';
import ApplicantsGridWithData from '../containers/ApplicantsGridWithData'

export default () => (
    <div>
        <CenteredDiv>
            <Button bsStyle='primary'>New Applicant</Button>
        </CenteredDiv>
        <ApplicantsGridWithData />
    </div>
);