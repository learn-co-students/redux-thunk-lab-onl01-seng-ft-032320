// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

    render(){
         
        return (
            <div>
                {this.props.catPics.map(cat => <img src={cat.url} alt="cats"></img>)}
            </div>
        )

    }
}

export default CatList;