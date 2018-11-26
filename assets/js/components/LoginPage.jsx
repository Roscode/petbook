import React from 'react';
import { googleSignIn, createSession, createUser } from 'api';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import GoogleLogin from 'react-google-login';

function LoginForm({ onSubmit }) {
  return (
    <div className="card card-signin my-5">
      <div className="card-body">
        <h5 className="card-title text-center">Sign In</h5>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values).finally(() => setSubmitting(false));
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form signin-form">
              <label>
                Email:
                <Field className="form-control" type="email" name="email" />
              </label>
              <ErrorMessage name="email" component="div" />
              <label>
                Password:
                <Field className="form-control" type="password" name="password" />
              </label>
              <ErrorMessage name="password" component="div" />
              <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={isSubmitting}>
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>);
}

function SignUpForm({ onSubmit }) {
  return (
    <div className="card card-signin my-5">
      <div className="card-body">
        <h5 className="card-title text-center">Sign Up</h5>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values).finally(() => setSubmitting(false));
          }}
        >
          {({ isSubmitting }) => (
            <Form component="form">
              <label>
                Email:
                <Field className="form-control" type="email" name="email" />
              </label>
              <ErrorMessage name="email" component="div" />
              <label>
                Password:
                <Field className="form-control" type="password" name="password" />
              </label>
              <ErrorMessage name="password" component="div" />
              <label htmlFor="signUpPasswordConfirmation">
                Confirm Password
                <Field className="form-control" type="password" name="passwordConfirmation" />
              </label>
              <ErrorMessage name="passwordConfirmation" component="div" />
              <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>);
}

function receiveGoogleResponse(googleUser) {
  const { id_token: idToken } = googleUser.getAuthResponse(); // water
  googleSignIn(idToken);
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  }

  render() {
    const { loginMode } = this.state;
    const form = loginMode
      ? (
        <LoginForm
          onSubmit={vals => createSession(vals)}
        />
      )
      : (
        <SignUpForm
          onSubmit={vals => createUser(vals)}
        />
      );
    // TODO find out if we need to have a CSP in order to load the google scripts
    // And if so, add one
    return (

      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card my-5">
              <div className="card-body">
                {form}
                {loginMode ? 'Need an account?' : 'Already have an account?'}
                <button
                  onClick={() => this.setState({ loginMode: !loginMode })}
                  type="button"
                  className="btn btn-secondary ml-2">
                  {loginMode ? 'Sign Up' : 'Login'}
                </button>
              </div>
              <GoogleLogin
                clientId={process.env.GOOGLE_CLIENT_ID}
                onSuccess={receiveGoogleResponse}
                onFailure={receiveGoogleResponse}
              />
            </div>
          </div>
        </div>
      </div>);
  }
}

export default LoginPage;
