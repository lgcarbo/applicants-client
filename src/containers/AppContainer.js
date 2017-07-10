import React from 'react';
import { connect } from 'react-redux';
import MainPage from 'components/MainPage';
import DataPageContainer from 'containers/DataPage/DataPageContainer';

const mapStateToProps = (state) => {
    return { showMainPage: (state.page.selectedApplicantId === -1 && !state.page.isCreating) };
};

const App = ({ showMainPage }) => (
    <div>
        { showMainPage ? <MainPage /> : <DataPageContainer />}
    </div>
);

export default connect(mapStateToProps)(App);