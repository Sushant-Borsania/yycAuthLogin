import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import { PostData } from "../../services/PostData";
import { Redirect } from "react-router-dom";

class LoginMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.signup = this.signup.bind(this);
  }
  signup(res, type) {
    let postData;
    console.log(res);
    if (type === "google") {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    if (postData) {
      //local storage - store the username
      let userName = JSON.stringify(postData.name);
      sessionStorage.setItem("userDetail", userName);
      //then redirect to main page
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const responseGoogle = response => {
      this.signup(response, "google");
    };
    return (
      <GoogleLogin
        clientId="API_KEY"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default LoginMain;
