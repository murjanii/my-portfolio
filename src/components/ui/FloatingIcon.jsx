import React from 'react'


export default function FloatingIcon({children}){
return (
<div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center font-semibold">{children}</div>
)
}