import React, {useState } from 'react'
import Items from './Items'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const RightSide = () => {
    const [inputData, setInputData] = useState('');
    const [closeIcon , setCloseIcon] = useState(false); 
    const [filterData , setFilterData] = useState([]);
    let {cocktails , loading ,categorysFilterData } = useSelector(state => ({...state.app}));

    const searchByName = ()=>{
        setCloseIcon(true)
        let fiter = cocktails.filter(ele => ele.strDrink.toLowerCase() === inputData.toLowerCase())
        setFilterData(fiter);
    }

  return (
    <div className="right_content">
        <div className="search d-flex align-items-center">
            <input onChange={(e)=>{setInputData(e.target.value);}} className='form-control shadow bg-body rounded' name='searchBox' type="text" value={inputData}  placeholder='search you favourite....' />
            {closeIcon ?  <samp onClick={()=>{setCloseIcon(false);setFilterData([]);setInputData('');}}> <i className="fa fa-times" ></i> </samp> :  <samp onClick={searchByName}> <i className="fa fa-search" ></i> </samp>    }
        </div>
        <div className="items my-5">
            {loading ? 
            <>
               <Loading/>
            </> : ( 
                categorysFilterData.length === 0 && filterData.length === 0 ? 
                cocktails.map(ele => {
                    return (
                        <Items key={ele.idDrink} idDrink={ele.idDrink} strDrink={ele.strDrink} strCategory={ele.strCategory} strDrinkThumb={ele.strDrinkThumb}/>
                    )
                }) 
                :     
               filterData.length !== 0  ?  
                filterData.map(ele => {
                    return (
                        <Items key={ele.idDrink} idDrink={ele.idDrink} strDrink={ele.strDrink} strCategory={ele.strCategory} strDrinkThumb={ele.strDrinkThumb}/>
                    )
                })
                :
                categorysFilterData.map(ele => {
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