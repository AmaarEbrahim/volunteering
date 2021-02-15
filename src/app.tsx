import React from "react";
import ReactDOM from "react-dom";
//import "../dist/test.css";
import { Form } from "./myForm";

class MainApp extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="content">
        <h1>Hello World</h1>
        <Form/>
      </div>
    );
  }

  blah() {
    return 3;
  }

}

ReactDOM.render(<MainApp />, document.getElementById("app"));