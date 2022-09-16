import React from 'react'
import {useSelector} from 'react-redux'
const SingleCocktill = () => {
    const { cocktail } = useSelector(state => ({...state.app}))
  return (
    <>
    <div className="singleCocktill ">
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={cocktail.strDrinkThumb} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{cocktail.strDrink}</h5>
                <h5 className="card-title">{cocktail.strMeasure1}</h5>
                <h6 className="card-text">{cocktail.strIngredient2}</h6>
                <p className="card-text">{cocktail.strInstructionsIT}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default SingleCocktill