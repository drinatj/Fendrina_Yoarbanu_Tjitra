import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                Filter
                <div className="filterCateogry">
                    category 
                    <select value={this.props.category} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="clothes">Clothes</option>
                        <option value="tech">Technology</option>
                    </select>
                </div>
            </div>
        )
    }
}
