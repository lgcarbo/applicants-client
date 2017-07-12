import React from 'react';
import ApplicantsGridContainer from 'containers/ApplicantsGridContainer';
import ConfirmDeleteContainer from 'containers/ConfirmDeleteContainer';
import { PageHeader } from 'react-bootstrap';

export default () => (
    <div>
        <PageHeader style={{ textAlign: 'center'}}>HR Applicants</PageHeader>
        <ApplicantsGridContainer />
        <ConfirmDeleteContainer />
    </div>
);