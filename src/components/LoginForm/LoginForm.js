import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { setUser } from '../../redux/user/userActions';
import { loginUser } from '../../controllers/user';
import './LoginForm.scss';

const LoginForm = ({ onLoginSuccess, user, setUserIntoRedux }) => {
  const { register, handleSubmit, errors } = useForm();

  const handleFormSubmit = async (data) => {
    const result = await loginUser(data.email, data.password);
    console.log('IMTCHLG ~ file: LoginForm.js ~ line 12 ~ handleFormSubmit ~ result', result);
    setUserIntoRedux(result)
    onLoginSuccess();
  }

  return <div className="login_form">
    {
      user 
      ? (
        <button onClick={onLoginSuccess}>Already logged in, proceed to beers</button>
      ) : (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="login_form__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" ref={register({ required: true })}/>
            <div className="login_form__error">
              {errors?.email?.type === 'required' && "Campo obligatorio"}&nbsp;
            </div>
          </div>
          <div className="login_form__field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" ref={register({ required: true })}/>
          </div>
          <button>Login</button>
        </form>
      )
    }
  </div>
}

// Leemos de redux
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// Escribimos en redux
const mapDispatchToProps = dispatch => {
  return {
    setUserIntoRedux: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
