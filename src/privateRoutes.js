import React from 'react';
import {Route,Switch,Router,Redirect} from 'react-router';
import {connect} from 'react-redux';

export const PrivateRoute = ({isAuth , component:Component, ...rest}) =>(

    <Route {...rest} component ={(props)=>(isAuth?
        (<Component {...props} />):
        (<Redirect to="/" />)
    )} />

);

const mapStateToProps = (state) =>({
    isAuth: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);