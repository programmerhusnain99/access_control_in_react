import React from 'react';
import { Navigate } from 'react-router-dom';

function UserElement(props) {
    const { CURRENT_USER_TYPE, children } = props;

    if (CURRENT_USER_TYPE === 'Normal User' || CURRENT_USER_TYPE === 'Admin User') {
        return <>{children}</>;
    } else {
        return <><Navigate to='/public' /></>;
    }
}

export default UserElement;
