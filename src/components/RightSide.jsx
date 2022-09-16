import React, { useEffect, useState } from 'react'
import Itams from './Itams'
import {fetchCocktails} from '../Redux/features/cocktil'
import { useDispatch , useSelector } from 'react-redux'
import Loading from './Loading'

const RightSide = () => {
    const [inputData, setInputData] = useState('') 
    let {cocktails , loading} = useSelector(state => ({...state.app}));

    const InputHendler = e => {
        setInputData(e.target.value);
    }
    const searchByName = ()=>{
        cocktails =  cocktails.filter(ele => ele.strDrink === inputData);
        // console.log(cocktails);
    }
    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchCocktails());
    }, [searchByName])
  return (
    <div className="right_content">
        <div className="search d-flex align-items-center">
            <input onChange={(e)=>{InputHendler(e)}} className='form-control shadow bg-body rounded' name='searchBox' type="text" value={inputData}  placeholder='search you favourite....' />
            <samp onClick={searchByName}> <i className="fa fa-search" ></i> </samp>  
        </div>

        <div className="items my-5">
            {loading ? 
            <>
               <Loading/>
            </> : (
                cocktails.map(ele => {
                    return (
                        <Itams key={ele.idDrink} idDrink={ele.idDrink} strDrink={ele.strDrink} strCategory={ele.strCategory} strDrinkThumb={ele.strDrinkThumb}/>
                    )
                })
               
            )}
        </div>
    </div>
  )
}

export default RightSide