import React from "react";
import ReactDOM from "react-dom/client";
import CardList from "./CardList";
import "./index.css";
import tachyons from "tachyons";
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList robots={robots} />);
