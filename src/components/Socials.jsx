import { social_links } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Socials = () => {
  return (
    <div className='w-full flex items-center justify-center bg-secondary border-t border-border p-2 lg:p-4 gap-2'>
        {social_links.map((item, index) => (
            <div key={index}>
                <Image src={item.image} alt="social" width={40} height={40}  />
            </div>
        ))}
    </div>
  )
}

export default Socials;