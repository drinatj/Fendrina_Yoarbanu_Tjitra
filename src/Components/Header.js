import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <ul>
        <Link to="/"><a href="/"><li class="active">Women</li></a></Link>
        <li>Men</li>
        <li>Kids</li>
        </ul>
      </div>
    )
  }
}
