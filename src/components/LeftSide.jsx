import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getCocktailByCategory , fetchCocktails} from '../Redux/features/cocktil'
import Loading from './Loading';

const LeftSide = () => {
     const dispatch = useDispatch();
     const {categorys, loading} = useSelector(state => ({...state.app}))

useEffect(() => {
  dispatch(fetchCocktails())
}, [])
    
   
  return (
    <div className="left_content shadow">
      <h3 className='text-center'>Category</h3>
      <hr />
      <ul className='navBar'>
        {
          loading ?
           <>
             <Loading/>
           </> 
          :
          [...new Set(categorys)].map((ele,index) => {
            return (<li key={index} onClick={()=>{dispatch(getCocktailByCategory(ele));}}> {ele} </li>)
          })
        }
       
        
      </ul>
    </div>
  )
}

export default LeftSide