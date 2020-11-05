import RegisterPage from './scenes/RegisterPage';
import {connect} from 'react-redux';
import {registerUser} from './actions';

const mapState = (stateRedux) =>
{
    return {
        loading: stateRedux.register.loading
    }
}

const Register = RegisterPage;
export default connect(mapState, {registerUser})(Register);