// write your CatList component here

import React, { Component } from 'react'

export default class CatList extends Component {
    
    renderCats = () => this.props.catPics.map(pic => <img src={pic.url}/>)
    
    render() {
        return (
            <div>
                {this.renderCats()}
            </div>
        )
    }
}
