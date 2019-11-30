import React from 'react';
import { Router } from '@reach/router'
import TemporaryPage from './TemporaryPage'
import MainPage from './MainPage'

const Homade = () => {
    return (
        <Router>
            <TemporaryPage path='/' />
            <MainPage path='home/*' />
        </Router>
    );
}

export default Homade;