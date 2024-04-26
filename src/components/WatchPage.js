import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Commentscontainer from './Commentscontainer';

const WatchPage = () => {

    const[searchParam]=useSearchParams();

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeMenu())
    },[])

  return (
    <div>
      <div className='px-5'>
      <iframe width="1100" height="550" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
    </div>
    <button className='border border-red-600 bg-red-400 text-white rounded-full m-5 px-5 py-2'> Like 👍</button>
    <button className='border border-red-600 bg-red-400 text-white rounded-full m-5 px-5 py-2'> Subscribe </button>
    
    </div>
  )
}

export default WatchPage
