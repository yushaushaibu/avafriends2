import React from "react";
import ReactDOM from "react-dom/client";
import Card from './Card';
import './index.css';
import tachyons from 'tachyons';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Card id="0" name="Rose" email="d.rose@nba.com"/>
        <Card id="1" name="Wall" email="j.wall@nba.com"/>
        <Card id="2" name="Irving" email="k.irving@nba.com"/>
    </div>

);
