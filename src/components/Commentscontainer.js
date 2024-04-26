import React from 'react'

const commentsData=[
  { name: "Alice", 
  text: "Great job!",
  replies:[] 
  },
  { name: "Bob",
   text: "I'm impressed!" ,
   replies:[]
  },
  { name: "Charlie", text: "This is fantastic!",replies:[] },
  { name: "David", text: "Keep up the good work!" ,replies:[{ name: "David", text: "Keep up the good work!" ,replies:[]},]},
  { name: "Eva", text: "Brilliant!" ,replies:[{name: "Alice", text: "Great job!",replies:[]}]},
  { name: "Frank", text: "Well done!",replies:[{ name: "David", text: "Keep up the good work!" ,replies:[]},] },
  { name: "Grace", text: "I love it!",replies:[{name: "Alice", text: "Great job!",replies:[{ name: "David", text: "Keep up the good work!" ,replies:[{ name: "David", text: "Keep up the good work!" ,replies:[]},]},]}] },
  { name: "Hannah", text: "Incredible work!" ,replies:[]},
  { name: "Ian", text: "Amazing!",replies:[{name: "Alice", text: "Great job!",replies:[]}] },
  { name: "Jasmine", text: "Absolutely stunning!" ,replies:[]},
  { name: "Kevin", text: "This is superb!" ,replies:[{name: "Alice", text: "Great job!",replies:[]}]},
  { name: "Lily", text: "Impressive!" ,replies:[]},
  { name: "Mark", text: "I'm blown away!" ,replies:[{name: "Alice", text: "Great job!",replies:[{ name: "David", text: "Keep up the good work!" ,replies:[{ name: "David", text: "Keep up the good work!" ,replies:[]},{ name: "Oliver", text: "I'm speechless!",replies:[] }]},{ name: "Lily", text: "Impressive!" ,replies:[]}]}]},
  { name: "Nina", text: "Such talent!",replies:[] },
  { name: "Oliver", text: "I'm speechless!",replies:[] }
  
];

const Comment=({data})=>{
  const [name,text,replies]=data;
  return(
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img className='w-8 h-8' src='https://static.vecteezy.com/system/resources/previews/008/506/404/original/contact-person-red-icon-free-png.png' alt='user' />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
};

const CommentList=({comments})=>{
  return comments.map((comment,index)=>(
    <div key={index}>
      <Comment  data={comment}/>
      <div className='pl-5 border border-l-black ml-5'>
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ))
}

const Commentscontainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default Commentscontainer;
