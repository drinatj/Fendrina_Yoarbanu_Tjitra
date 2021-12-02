import React, { Component } from 'react'
import '../App.css';

export default class ListCurrencies extends Component {
    render() {
        return (
          <div>
            
            <select> 
              <option value="">$ USD</option>
              <option value="clothes">£ GBP</option>
              <option value="tech">$ AUD</option>
              <option value="tech">¥ JPY</option>
              <option value="tech">₽ RUP</option>
            </select>
          </div>
      )
    }
}
