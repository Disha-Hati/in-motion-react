import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideContainer = () => {

  const[videos,setVideos]=useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos= async ()=>{
    const data=await fetch(YOUTUBE_API)
    const json=await data.json();
    console.log(json.items)
    setVideos(json.items)
  }


  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=><Link key={video.id} to={"/watch?v=" +video.id}><VideoCard info={video}/></Link>)}
      
    </div>
  )
}

export default VideContainer
