import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResult } from '../utils/searchSlice';
import { json } from 'react-router-dom';

const Head = () => {

  const[searchQuery,setSearchQuery]=useState("");
  const[suggestions,setSuggestions]=useState([]);
  const[showSuggestion,setShowSuggestion]=useState(false)

  const searchCache=useSelector((store)=>store.search)
  const dispatch=useDispatch();

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSuggestions()}
      },200)
      

    return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery])

  const getSuggestions= async ()=>{
      const data=await fetch(YOUTUBE_SEARCH_API+searchQuery )
      const json=await data.json();
      setSuggestions(json[1]);

    //update cache
      dispatch(cacheResult({
        [searchQuery]:json[1],
      }));
  }


 

  const sideClickHandler=()=>{
        dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={()=>sideClickHandler()} className='h-8 pt-2 cursor-pointer' src="https://www.pikpng.com/pngl/m/38-384769_hamburger-menu-icon-menu-icon-png-grey-clipart.png" alt="menu"/>
        <img className='h-12 w-25 mx-2 cursor-pointer' src="https://i.imgur.com/YWpp8ll.png" alt="main-logo"/>
       </div>
      <div className='col-span-10'>
        <div>
        <input className='w-1/2  rounded-l-full  border border-red-500 p-2'type="text" value={searchQuery} 
         onChange={(e)=>setSearchQuery(e.target.value)} 
         onFocus={()=>setShowSuggestion(true)} 
         onBlur={()=>setShowSuggestion(false)}></input>
        <button className= 'border border-red-600 bg-red-400 text-white rounded-r-full py-2 px-5'>Search 🔍</button>
        </div>
        {showSuggestion && 
          (<div className='fixed absolute  bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border-gray-100'>

        <ul>
          {suggestions.map((s)=>
          (<li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
          {s}
          </li>
          ))}
        </ul>

        </div>)}
      </div>
      <div className='col-span-1'>
        <img className='h-12 w-25' src="https://static.vecteezy.com/system/resources/previews/008/506/404/original/contact-person-red-icon-free-png.png" alt="user"/>
      </div>
    </div>
  )
}

export default Head;
