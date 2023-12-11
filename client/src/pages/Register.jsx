import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import FormRow from '../components/FormRow';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defautValue="john" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defautValue="smith"
        />
        <FormRow type="text" name="location" defautValue="earth" />
        <FormRow type="email" name="email" defautValue="john@gmail.com" />
        <FormRow type="password" name="password" defautValue="secret123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
