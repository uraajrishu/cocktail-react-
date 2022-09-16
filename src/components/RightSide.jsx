import React, { useEffect, useState } from 'react'
import Items from './Items'
// import {fetchCocktails} from '../Redux/features/cocktil'
import {useSelector } from 'react-redux'
import Loading from './Loading'

const RightSide = () => {
    let {cocktails , loading} = useSelector(state => ({...state.app}));
    useEffect(() => {
        // dispatch(fetchCocktails());
    }, [])
  return (
    <div className="right_content">
        <div className="search d-flex align-items-center">
            <input className='form-control shadow bg-body rounded' name='searchBox' type="text" placeholder='search you favourite....' />
            <samp> <i className="fa fa-search" ></i> </samp>  
        </div>

        <div className="items my-5">
            {loading ? 
            <>
               <Loading/>
            </> : (
                cocktails.map(ele => {
                    return (
                        <Items key={ele.idDrink} idDrink={ele.idDrink} strDrink={ele.strDrink} strCategory={ele.strCategory} strDrinkThumb={ele.strDrinkThumb}/>
                    )
                })
               
            )}
        </div>
    </div>
  )
}

export default RightSide