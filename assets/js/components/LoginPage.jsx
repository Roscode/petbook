import React from 'react';
import { createSession, createUser } from 'api';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

function LoginForm({ onSubmit }) {
  return (
    <div className="card card-signin my-5">
      <div className="card-body">
        <h5 className="card-title text-center">Sign In</h5>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values).then(() => setSubmitting(false));
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form signin-form">
              <label>
                Email:
                <Field type="email" name="email" />
              </label>
              <ErrorMessage name="email" component="div" />
              <label>
                Password:
                <Field type="password" name="password" />
              </label>
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
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
          onSubmit={(values, { setSubmitting }) => onSubmit(values).then(() => setSubmitting(false))
          }
        >
          {({ isSubmitting }) => (
            <Form component="form">
              <label>
                Email:
                <Field type="email" name="email" />
              </label>
              <ErrorMessage name="email" component="div" />
              <label>
                Password:
                <Field type="password" name="password" />
              </label>
              <ErrorMessage name="password" component="div" />
              <label htmlFor="signUpPasswordConfirmation">
                Confirm Password
                <Field type="password" name="passwordConfirmation" />
              </label>
              <ErrorMessage name="passwordConfirmation" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>);
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
          onSubmit={({ email, password }) => createSession(email, password)}
        />
      )
      : (
        <SignUpForm
          onSubmit={({
            email,
            password,
            passwordConfirmation,
          }) => createUser(email, password, passwordConfirmation)}
        />
      );
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card my-5">
              <div className="card-body">
                {form}
              </div>
              {loginMode ? 'already have an account' : 'an account'}
              <button
                onClick={() => this.setState({ loginMode: !loginMode })}
                type="button"
                className="btn btn-primary"
              >
                {loginMode ? 'Sign Up' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default LoginPage;
