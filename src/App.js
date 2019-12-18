import React from "react";
import "./App.css";
import Header from "./App/Common/Header";
import Main from "./App/Main";
import Footer from "./App/Common/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: JSON.parse(sessionStorage.getItem("userDetail"))
    };
  }

  removeSession = () => {
    sessionStorage.removeItem("userDetail");
    sessionStorage.clear();
    this.setState({
      name: null
    });
  };

  render() {
    return (
      <>
        <Header removeSession={this.removeSession} name={this.state.name} />
        <Main name={this.state.name} />
        <Footer />
      </>
    );
  }
}

export default App;
