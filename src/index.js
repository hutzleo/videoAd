import {App} from "./js/components/container/app.jsx"
import ReactDOM from "react-dom";
import React, { Component } from "react";
import './style/base.scss';
import './style/ads.scss';


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;