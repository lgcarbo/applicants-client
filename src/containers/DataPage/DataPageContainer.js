import React from 'react';
import { connect } from 'react-redux';
import DataPageCreateContainer from './DataPageCreateContainer';
import DataPageEditContainer from './DataPageEditContainer';

const mapStateToProps = (state) => {
    return { isEditMode: !state.page.isCreating };
};

const DataPageComponent = ({ isEditMode }) => (
    <div>
    { isEditMode ? <DataPageEditContainer /> : <DataPageCreateContainer /> }
    </div>
);

export default connect(mapStateToProps)(DataPageComponent);