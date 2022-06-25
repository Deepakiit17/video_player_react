import React from 'react'
// import { motion } from 'framer-motion';
import './Item.css'
function Item({icon, name}) {

    const subheading ={
        true:{
            opacity: 1
        },
        false:{
            opacity: 0,
            display: 'none'
        }
    }
  return (
    <div className='item'
    whileHover = {{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(5.5px)",
        WebkitBackdropFilter: "blur(5.5px)",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        cursor: 'pointer'
    }}
    transition={{
        type:'none', duration: 0.1
    }}
    >
        <div className='icon'>
            {icon}
        </div>
        <span
        variants={subheading}
        >
            {name}
        </span>
    </div>
  )
}

export default Item