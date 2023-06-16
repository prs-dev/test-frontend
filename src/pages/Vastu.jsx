import React from 'react'
import { motion } from 'framer-motion'

const Vastu = () => {
  return (
    <div>
      <div className='relative'>
        <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/vastu.jpg" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 w-[20%]'>Vastu Consultancy</h2>
      </div>
      <div className='w-[70%] mx-auto'>
        <div className='flex flex-col gap-2 items-center justify-center my-10'>
          <h2 className='text-3xl bg-mainColor flex items-center justify-center text-white p-1 w-[40%]'>Best Vastu Consultancy in India</h2>
          <p className='text-contentColor p-1 text-justify'>At Yassh Consultancy Services, we are dedicated to providing comprehensive Vastu consultancy services to help individuals and businesses create harmonious and positive living and working environments. With a deep understanding of Vastu principles and a commitment to client satisfaction, we aim to bring balance, prosperity, and well-being into people’s lives through Vastu Shastra.</p>
          <div className='flex gap-2'>
            <motion.button className='bg-mainColor rounded-[20px] flex items-center gap-2 text-white px-3 py-1' whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }}>
              <i class="fa-solid fa-phone"></i>
              Call now
            </motion.button>
            <motion.button className='bg-mainColor rounded-[20px] flex items-center gap-2 text-white px-3 py-1' whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }}>
            <i class="fa-brands fa-whatsapp"></i>
              Whatsapp
            </motion.button>
          </div>
        </div>

        <div className='bg-mainColor flex'>
          <div className='flex-[1]'>
            <img src="/assets/zodiac.jpg" alt="" />
          </div>
          <div className='flex-[2] text-white p-10 flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-2xl '>Our Team of Vastu Experts</h2>
            <p className='text-justify'>We take pride in our team of experienced and knowledgeable Vastu experts who have a profound understanding of the ancient principles of Vastu Shastra. With their expertise, they offer personalized Vastu consultations tailored to the unique needs and requirements of our clients. Our experts analyze the layout, design, and energy flow of homes, offices, and commercial spaces, providing practical and effective solutions for Vastu imbalances.</p>
          </div>
        </div>

        <div className='flex flex-col gap-2 items-center justify-center my-10'>
          <h2 className='text-3xl bg-mainColor flex items-center justify-center text-white p-1 w-[40%]'>Comprehensive Vastu Solutions:</h2>
          <p className='text-contentColor p-1 text-justify'>At Yassh Consultancy Services, we offer a wide range of Vastu solutions to cater to diverse needs. Whether you are constructing a new property, renovating an existing one, or seeking to harmonize your current space, our Vastu consultants provide in-depth guidance and recommendations. From floor plans, room placements, color schemes, and furniture arrangements to addressing specific Vastu doshas, we offer practical suggestions to optimize the positive energy flow and create a conducive environment.</p>
        </div>

        <div className='bg-mainColor flex my-10'>
          <div className='flex-[2] text-white p-10 flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-2xl'>Our Range of Vastu Services</h2>
            <p className='text-justify'>Vastu is not a one-size-fits-all approach. Each space requires specific expertise to ensure it is Vastu-compliant and in harmony with its surroundings. We offer a diverse range of Vastu services, provided by different experts, to cater to the unique needs of your space.</p>
          </div>
          <div className='flex-[1]'>
            <img src="/assets/zodiac.jpg" alt="" />
          </div>
        </div>

        <div className='flex gap-5 my-10'>
          <motion.div  whileHover={{scale: 1.1}} className='flex-1 max-h-[50vh] shadow-lg p-2 rounded-sm'>
            <img className="w-full h-[50%]" src="/assets/resi-vastu.jpg" alt="" />
            <h2 className='text-2xl bg-mainColor text-white'>Residential Vastu</h2>
            <p className='text-contentColor'>The energy within our homes serves as the life force for our minds and bodies. Maintaining pure and positive energies within our residences is crucial for fostering peace, growth, health, wealth, and prosperity. This can be achieved through the principles of Vastushastra, an ancient Indian architectural science.</p>
          </motion.div>

          <motion.div whileHover={{scale: 1.1}} className='flex-1 max-h-[50vh] shadow-lg p-2 rounded-sm'>
            <img className="w-full h-[50%]" src="/assets/Commercial-Vastu.jpg" alt="" />
            <h2 className='text-2xl bg-mainColor text-white'>Commercial Vastu</h2>
            <p className='text-contentColor'>The Vastu of our workplace has a profound impact on our businesses and overall lives. It is no wonder that many corporate offices, commercial establishments, and institutions seek the guidance of Vastu experts to ensure enduring success. By applying the principles of Commercial Vastu, one can create an environment that fosters positive energies and promotes prosperity.</p>
          </motion.div>

          <motion.div whileHover={{scale: 1.1}} className='flex-1 max-h-[50vh] shadow-lg p-2 rounded-sm'>
            <img className="w-full h-[50%]" src="/assets/Industrial-Vastu.jpg" alt="" />
            <h2 className='text-2xl bg-mainColor text-white'>Industrial Vastu</h2>
            <p className='text-contentColor'>Industrial Vastu is the application of Vastu principles to industrial spaces such as factories, manufacturing units, warehouses, and industrial complexes. It aims to optimize the flow of positive energies within these spaces, ultimately contributing to enhanced productivity, efficiency, and overall success of the industrial ventures.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Vastu