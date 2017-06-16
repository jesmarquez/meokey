import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Router from 'next/router'

function touchAppBarRight(e) {
  console.log('e')
}

function touchItemTap(event, value) {
  if (value === 3) {
    const url = {
      pathname: '/',
      query: {logged: false}
    }
    Router.push(url)
  }
  console.log(value)
}

class Login extends React.Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Nobitco" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    onChange={touchItemTap}
  >
    <MenuItem value={1} primaryText="Refrescar" />
    <MenuItem value={2} primaryText="Ayuda" />
    <MenuItem value={3} primaryText="Sign out!" />
  </IconMenu>
)

Logged.muiName = 'IconMenu'

class AppBarMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <AppBar
          title="Meokey"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.props.logged ? <Logged /> : <Login />}
          onRightIconButtonTouchTap={touchAppBarRight}
        />
      </div>
    );
  }
}

export default AppBarMain;
