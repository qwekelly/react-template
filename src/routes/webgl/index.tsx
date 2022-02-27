import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import './index.scss'

function Webgl() {
  return (
    <Link underline="none" variant="button" component={RouterLink} to="/webgl/test">测试用例</Link>
  );
}

export default Webgl;