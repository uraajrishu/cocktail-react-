import React from 'react'
import {getCocktailById} from '../Redux/features/cocktil'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Itams = ({strDrink , strCategory ,strDrinkThumb ,idDrink }) => {
  const navigate =  useNavigate()
  const dispatch = useDispatch()
  // const product = (id)=>{
  //   console.log(id);
  // }
  return (
    <>
     
     <div className="card mb-3 shadow " onClick={()=>{dispatch(getCocktailById(idDrink)); navigate('/singlecocktill') }} style={{"maxWidth":"640px"}}>
        <div className="row g-0">
            <div className="col-md-4 ">
                <img src={strDrinkThumb} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{strDrink}</h5>
                    <span className="badge bg-success mb-2">{strCategory}</span>
                    <br />
                    <button type="button" className="btn btn-outline-primary btn-sm shadow">Add</button>
                </div>
        </div>
     </div>
    </div>
</>
  )
}

export default Itams