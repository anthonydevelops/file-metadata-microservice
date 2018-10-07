import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>File Metadata Microservice</h1>
        </header>
        <h4>Please Upload a File...</h4>
        <div className="View">
          <form
            encType="multipart/form-data"
            method="POST"
            action="/api/fileanalyze"
          >
            <input type="file" name="upfile" id="inputfield" required />
            <div>
              <input type="submit" value="Upload" id="button" />
            </div>
          </form>
        </div>
        <footer className="sticky-footer">
          Coded with &#10084; by{" "}
          <a href="github.com/anthonydevelops">anthonydevelops</a>
        </footer>
      </div>
    );
  }
}

export default App;
