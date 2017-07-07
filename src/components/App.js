import React from 'react';
import MainPage from './MainPage';
import DataPageContainer from '../containers/DataPageContainer';

export default ({ showMainPage }) => (
    <div>
        { showMainPage ? <MainPage /> : <DataPageContainer />}
    </div>
);