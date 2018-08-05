import React from 'react';
import { NavLink ,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../action/auth';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const Login = ({startLogin}) =>{
    return(
        <div className="login-container">
            <div className="login-box">
                <div>
                    <Button variant="contained" onClick={startLogin} color="secondary">
                        Login With Google
                    </Button>
                    {/* <button onClick={startLogin} className="btn btn-success" >Login</button> */}
                </div>
            </div>
           
        </div>
    )
}

const mapDispatchToProps =(dispatch)=> ({
    startLogin: ()=> dispatch(startLogin())
});
export default connect(undefined,mapDispatchToProps)(Login);