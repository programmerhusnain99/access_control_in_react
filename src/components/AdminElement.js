import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminElement(props) {
    const { CURRENT_USER_TYPE, children } = props;

    if (CURRENT_USER_TYPE === 'Admin User') {
        return <>{children}</>;
    } else {
        return <><Navigate to='/public' /></>;
    }
}

export default AdminElement;
