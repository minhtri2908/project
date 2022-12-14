import React, { useContext, useState } from 'react';
// import { AuthContext } from '../contenr/AuthContext';
import axios from 'axios';
import { BsFacebook, BsGoogle, BsTwitter, BsGithub } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import '../styles/css/bootstrap.min.css';
import '../page/login.css';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

function Login() {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });

  // const { loading, error, dispatch } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   const {dispatch} = this.props;
  //   e.preventDefault();
  //   dispatch({ type: 'LOGIN_START' });

  //   try {
  //     const res = await axios.post('http://localhost:3000/api/author/login', credentials);
  //     dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  //     navigate('/');
  //   } catch (error) {
  //     dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  //   }
  // };
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log({ username, email, password });
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlelogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    axios
      .post('/api/author/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        navigate('/');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleregister = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    axios
      .post('/api/author/register', {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        navigate('/');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="app1">
      <div className="App-header1">
        <nav className="navbar navbar-light justify-content-center">
          <a href="/" className="navbar-brand logo_team1">
            Tour & Travel
          </a>
        </nav>
        <nav className="navbar navbar-light justify-content-center">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            L??u Tr??
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Chuy???n Bay
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Chuy???n Bay + Kh??ch s???n
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Thu?? xe
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            ?????a ??i???m tham quan
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Taxi s??n bay
          </button>
        </nav>
      </div>
      <div className="form">
        <MDBContainer className="p-3 my-5 d-flex flex-column w-25 login-form">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick('tab1')}
                active={justifyActive === 'tab1'}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick('tab2')}
                active={justifyActive === 'tab2'}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === 'tab1'}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: '40%' }}
                >
                  <BsFacebook
                    className="icon-link"
                    style={{ color: '#00aa76' }}
                  />
                  <BsGoogle
                    className="icon-link"
                    style={{ color: '#00aa76' }}
                  />
                  <BsTwitter
                    className="icon-link"
                    style={{ color: '#00aa76' }}
                  />
                  <BsGithub
                    className="icon-link"
                    style={{ color: '#00aa76' }}
                  />
                </div>

                <p className="text-center mt-3">or:</p>
              </div>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                placeholder="name@example.com"
                type="email"
                value={email}
                onChange={handleEmail}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                placeholder="Password"
                id="form2"
                value={password}
                onChange={handlePassword}
                type="password"
              />
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="">Forgot password?</a>
              </div>
              {/* <MDBBtn className="mb-4 w-100">Sign in</MDBBtn> */}
              {/* <button className="mb-4 w-100">Sign in</button> */}
              <div>
                <button
                  type="button"
                  className="btn btn-primary mb-4 w-100 color-btn"
                  onClick={handlelogin}
                >
                  Sign in
                </button>
                {/* {error && <h2>{error.message}</h2>} */}
              </div>

              <p className="text-center">
                Not a member?
                <a
                  href="#!"
                  onClick={() => handleJustifyClick('tab2')}
                  active={justifyActive === 'tab2'}
                >
                  Register
                </a>
              </p>
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === 'tab2'}>
              <div className="text-center mb-3">
                <p>Sign up with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: '40%' }}
                >
                  <BsFacebook
                    className="icon-link"
                    style={{ color: '#00aa76' }}
                  />{' '}
                  <BsGoogle
                    className="icon-link"
                    style={{ color: '#00aa76' }}
                  />{' '}
                  <BsTwitter
                    className="icon-link"
                    style={{ color: '#00aa76' }}
                  />{' '}
                  <BsGithub
                    className="icon-link"
                    style={{ color: '#00aa76' }}
                  />
                </div>
                <p className="text-center mt-3">or:</p>
              </div>
              <MDBInput
                wrapperClass="mb-4"
                label="UserName"
                value={username}
                onChange={handleUsername}
                id="form1"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                value={email}
                onChange={handleEmail}
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                value={password}
                onChange={handlePassword}
                id="form1"
                type="password"
              />
              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="I have read and agree to the terms"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary mb-4 w-100 color-btn"
                onClick={handleregister}
              >
                Sign up
              </button>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Login;
