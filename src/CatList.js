// write your CatList component here

import React, { Component } from 'react'

export default class CatList extends Component {
    render() {
    const catImageList = this.props.catPics.map(cat =>  <img key={cat.id}alt={cat.id} src={cat.url}></img>)
        
        return (
            <div>
                {catImageList}
            </div>
        )
    }
}
