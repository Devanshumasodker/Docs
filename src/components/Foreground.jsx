import React, { useState } from 'react'
import Card from './Card'

function Foreground() {
  const data = [
    {desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae velit officiis voluptates!",
    filesize:"5mb",
    close:true,
    tag:{isOpen:true,tagTitle:"Download now",tagColor:"green"}},
    {desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae velit officiis voluptates!",
    filesize:"5mb",
    close:true,
    tag:{isOpen:true,tagTitle:"Download now",tagColor:"green"}},
    {desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae velit officiis voluptates!",
    filesize:"5mb",
    close:true,
    tag:{isOpen:true,tagTitle:"Download now",tagColor:"green"}},
   
  ]
  
  return (
    <>
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap">
    { data.map((item,ind)=> (
      <Card data={item} />
    ))  }
    </div>
    </>
  )
}

export default Foreground