import React from 'react';
import { connect } from 'react-redux';
import MainPage from 'components/MainPage';
import DataPageContainer from 'containers/DataPage/DataPageContainer';
import ErrorMessageContainer from 'containers/ErrorMessageContainer';

const mapStateToProps = (state) => {
    return { showMainPage: !(state.page.isCreating || state.page.isEditing) };
};

const App = ({ showMainPage }) => (
    <div>
        { showMainPage ? <MainPage /> : <DataPageContainer />}
        <ErrorMessageContainer />
    </div>
);

export default connect(mapStateToProps)(App);