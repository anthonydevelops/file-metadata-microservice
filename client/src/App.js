import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>File Metadata Microservice</h1>
        </header>
        <h4>Please Upload a File </h4>
        <div className="View">
          <form
            encType="multipart/form-data"
            method="POST"
            action="/api/fileanalyze"
          >
            <input type="file" name="upfile" id="inputfield" />
            <div>
              <input type="submit" value="Upload" id="button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
