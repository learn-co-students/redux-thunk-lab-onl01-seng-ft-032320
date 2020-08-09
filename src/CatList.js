import React from 'react';

class CatList extends React.Component {
//   cats = () => {
//     return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
//   }

  render() {
    return (
      <div>
        {this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)}
      </div>
    )
  }
}

export default CatList;