import React from 'react';
import { CenteredDiv } from 'styled-components/GridWrappers';
import ApplicantsGridContainer from 'containers/ApplicantsGridContainer';
import NewApplicantButtonContainer from 'containers/NewApplicantButtonContainer';

export default () => (
    <div>
        <CenteredDiv>
            <NewApplicantButtonContainer />
        </CenteredDiv>
        <ApplicantsGridContainer />
    </div>
);