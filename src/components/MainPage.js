import React from 'react';
import { CenteredDiv } from 'styled-components/GridWrappers';
import ApplicantsGridContainer from 'containers/ApplicantsGridContainer';
import ConfirmDeleteContainer from 'containers/ConfirmDeleteContainer';

export default () => (
    <div>
        <ApplicantsGridContainer />
        <ConfirmDeleteContainer />
    </div>
);