import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp'
import Error from '../Pages/Error'; 
const AllRoutes = () => {
    return (
        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp/>}/>
            <Route path='*' element={<Error />} />
        </Routes>
    );
};

export default AllRoutes;
