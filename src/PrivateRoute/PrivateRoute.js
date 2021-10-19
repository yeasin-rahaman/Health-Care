import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContexts } = UseAuth();
    const { user } = allContexts
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.displayName ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;

