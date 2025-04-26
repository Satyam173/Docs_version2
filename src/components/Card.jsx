import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { } from "motion/react"

function Card({data , reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.05}}
        dragElastic={0.1}
        dragTransition={{bounceStiffness  : 100 , bounceDamping  :30}}
    className='relative w-60 flex-shrink-0 h-72 bg-sky-200 h-64 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden' >
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}
        </p>
        <div className='footer absolute bottom-0  w-full   left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoMdClose /> :  <FaDownload size=".7em" color='#fff' />}
                    </span>
            </div>
            {data.tag.isOpen && (
                 <div className={`tag w-full py-4 ${data.tag.tagColour === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                 <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
         </div>
            )  }
           
        </div>
    </motion.div>
  )
}

export default Card