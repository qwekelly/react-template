import './index.scss';
import {
  Outlet,
  Link as RouterLink,
} from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
} from '@mui/material';

function Default() {
  return (
    <div>
      <AppBar className='header' position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Button className='header-btn' component={RouterLink} to="/hello">
              Hello React
            </Button>
            <Button className='header-btn' component={RouterLink} to='/test/1'>
              Test React
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Container className='main' maxWidth='xl'>
        <Outlet />
      </Container>
    </div>
  )
}

export default Default;