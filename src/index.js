import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { ThemeProvider } from "./context/themeContext";
function Render () {
 return (<div>
    <ThemeProvider>
        <App/>
    </ThemeProvider>
    </div>
 )
}

ReactDOM.render(<Render />, document.getElementById('root'))
