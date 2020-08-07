import React from 'react'

export const CatList = (props) => {

    const DisplayCats = (catsArray) => {
        return catsArray.map((catInfo, i) => {
            return (
            <li><img src={catInfo.url} alt="cat" key={i} /></li>
            )
        })
    }

    return (
        <div>
            {DisplayCats(props.catPics)}
            {console.log(props.catPics)}
        </div>
    )
}

export default CatList

