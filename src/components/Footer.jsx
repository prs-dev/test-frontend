import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='px-[10rem] py-[4rem] bg-gradient-to-b from-mainColor to-[#2c2b2b] flex gap-[20px]'>
                <div className="flex-[3] mr-20 flex flex-col items-center gap-[10px] justify-center">
                    <img className='w-40' src="/assets/logov2.png" alt="" />
                    <p className='w-[80%] font-semibold text-slate-300 text-justify'>Yash Consultancy Services India strives to empower individuals and organizations through expert guidance in astrology, arbitration, legal consultancy, and natural life care. Our objective is to promote holistic well-being, resolve conflicts, and provide personalized solutions for a fulfilling and harmonious life.</p>
                    <div className="flex items-center justify-center gap-[10px]">
                        <i class="fa-brands fa-square-facebook text-white"></i>
                        <i class="fa-brands fa-twitter text-white"></i>
                        <i class="fa-brands fa-instagram text-white"></i>
                        <i class="fa-brands fa-youtube text-white"></i>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-[20px]">
                    <h2 className='text-3xl font-semibold text-white'>Categories</h2>
                    <ul className='text-white'>
                        <li className='underline'>All Pooja</li>
                        <li className='underline'>Festival and other special occasion Pooja</li>
                        <li className='underline'>Pooja</li>
                        <li className='underline'>katha</li>
                        <li className='underline'>Mantra Jaap</li>
                        <li className='underline'>Sanskarshala</li>
                        <li className='underline'>Daan</li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-col gap-[20px]">
                    <h2 className='text-3xl font-semibold text-white'>Useful Links</h2>
                    <ul className='text-white'>
                        <li className='underline'>Home</li>
                        <li className='underline'>About Us</li>
                        <li className='underline'>Services</li>
                        <li className='underline'>Testimonials</li>
                        <li className='underline'>Contact Us</li>
                    </ul>
                </div>
                <div className='flex-[1] flex flex-col items-left gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-white'>Contact Us</p>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>123 Lucknow</span>
                        </span>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-phone"></i>
                            <span>1234567890</span>
                        </span>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-envelope"></i>
                            <span>test@gmail.com</span>
                        </span>
                    </div>
            </div>

            <div className='px-[10rem] items-center justify-center py-[2rem] bg-gradient-to-b from-mainColor to-[#2c2b2b] flex gap-[20px] text-white'>
            Copyright © 2023 prs-dev
            </div>

    </div>
  )
}

export default Footer