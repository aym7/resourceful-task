import {Component, Fragment} from 'react'

class AuthenticationUX extends Component {
  /** Simple component containing the explanation for the Authentication UX question.
  */
  render() {
    return (
      <Fragment>
        <h3> Authentication UX </h3>
        <p>
    In order to do this, the application would have a Login component.<br/>
    The user would be redirected to this component when the 401 error occured.<br/>
    The previous page is retrieved using the "useHistory" hook from React Router.<br/>
    Hence, once the login is validated, the user will then be redirected to the previous page.<br/>
        </p>
      </Fragment>
    );
  }
}

export default AuthenticationUX;
