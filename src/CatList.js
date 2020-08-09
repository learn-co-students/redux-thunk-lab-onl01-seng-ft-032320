import React, { Component } from "react"
 

class CatList extends Component {

list = () => {
    return (this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />));
}
    
    render() {
        return (
            <div>
                {this.list()}
            </div>
        )
    }
}

export default CatList
