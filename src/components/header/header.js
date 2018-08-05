import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import {startLogout,login} from '../../action/auth';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
/*import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';*/

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    auth: true,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log(this.props)
    return (
      <div>
         <AppBar position="sticky">
          <Toolbar>
          <Link to="/add_expense" activeClassName="is-active" exact={true}>
            <IconButton  color="inherit" aria-label="Menu">
           
              <AddIcon />
            
            </IconButton>
            </Link>
            <Link to="/dashboard" activeClassName="is-active">
            <Typography variant="title" color="inherit">
              Expense
            </Typography>
            </Link>
              <div className="move-right">
              <Avatar alt="Remy Sharp" src={this.props.user.uid.photoURL} 
               aria-owns={open ? 'menu-appbar' : null}
               aria-haspopup="true"
               onClick={this.handleMenu}
               color="inherit"
              className="avator" />
                {/* <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton> */}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.props.startLogout}>Log Out</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      {/* <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/add_expense" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      <div className="text-right">
        <button onClick={this.props.startLogout} className="btn btn-info">LogOut</button>
      </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) =>({
  user: login(state.auth)
});
const mapDispatchToProps = (dispatch) =>({
  startLogout: () =>dispatch(startLogout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);