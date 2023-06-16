import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const Jyotish = () => {
  const navigate = useNavigate()

  const [clicked, setClicked] = useState({
    one: false,
    two: false,
  })
  const [data, setData] = useState({
    name: '',
    mobile: '',
    location: '',
    message: ''
  })
  const [horo, setHoro] = useState(null)
  const [date, setDate] = useState(null)

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true
  }

  const url = "https://backend-s3nk.onrender.com"

  const getHoroscope = async () => {
    const info = date?.toLocaleString("en")?.split(",")[0]?.split("/")
    const day = Number(info[1])
    const month = Number(info[0])
    const year = Number(info[2])
    try {
      const res = await axios.post(`${url}/api/get-astro`, { day, month, year })
      setHoro(res?.data?.data)
      setClicked(prev => ({ ...prev, two: true }))
    } catch (error) {
      console.log(error)
    }

  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    axios.post(`${url}/api/contact-two`, data)
    .then(res => {
        console.log(res)
        setData({
            name: '',
            mobile: '',
            location: '',
            message: ''
        })
        toast.success("Thankyou for contacting, Someone will get in touch shortly")
    })
    .catch(e => {
        console.error(e.message)
        toast.error("Please fill out all the fields!")
    })
}

  console.log(data)

  // console.log(date?.toLocaleString("en")?.split(",")[0]?.split("/"))

  return (
    <div>
      <div className='relative h-[50vh] overflow-hidden'>
        {/* <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/legalv2.png" alt="" /> */}
        <video className='w-full object-cover opacity-50' loop autoPlay muted>
          <source src='/assets/astro.mp4' type="video/mp4" />
        </video>
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 w-[20%]'>Bhartiya Jyotish</h2>

        {!clicked.one && <motion.div onClick={() => setClicked(prev => ({ ...prev, one: true }))} animate={{
          translateY: [10, 20, 10]
        }} transition={{ ease: "linear", duration: 3, repeat: Infinity }} className='absolute top-[10px] right-[10px] rounded-md  bg-white h-[3rem] flex items-center p-2 text-mainColor cursor-pointer'>
          Get Your Free Horoscope Now!
        </motion.div>}

        {clicked.one && <motion.div initial={{ scale: .5 }}
          whileInView={{ scale: 1.05 }} className='absolute top-[10px] right-[10px] rounded-md bg-white h-[7rem] flex flex-col items-center justify-between gap-2 p-2'>
          <label htmlFor="date" className='text-mainColor font-semibold'>Select a date</label>
          <input className='border' type="date" onChange={(e) => setDate(new Date(e.target.value))} />
          <motion.button onClick={getHoroscope} className='bg-mainColor text-white rounded-md p-1'>Generate</motion.button>
        </motion.div>}

        {clicked.two && <motion.div initial={{ scale: .5 }}
          whileInView={{ scale: 1.05 }} className='absolute top-[10px] right-[10px] rounded-md bg-white h-[14 rem] w-[20%] p-2'>
          <div id="test">
            <p><span className='font-bold text-mainColor'>Birth Dasha:</span> {horo?.birthDasha}</p>
            <p><span className='font-bold text-mainColor'>Birth Time: </span>{horo?.birthTime}</p>
            <p><span className='font-bold text-mainColor'>Nakshatra: </span>{horo?.nakshatra}</p>
            <p><span className='font-bold text-mainColor'>Rashi: </span>{horo?.rashi}</p>
            <p><span className='font-bold text-mainColor'>Prediction: </span>{horo?.prediction}</p>
          </div>
          <p className='font-semibold text-mainColor p-2'>Want more or get personalized Horoscope</p>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => {
            setClicked(prev => ({ ...prev, two: false, one: false }))
            navigate("/appointment")
          }} className='bg-mainColor p-2 text-white rounded-md'>Click Here</motion.button>
        </motion.div>}

      </div>
      <div className='w-[70%] mx-auto'>
        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[60%]'>Welcome to Bhartiye Jyotish</h2>
            <p className='py-1'>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/assets/jyotish.jpeg" alt="" />
          </div>
        </div>

        <div className='my-10'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Our Services</h2>
            <p className='py-1'>Explore our comprehensive astrological services designed to provide deep insights, accurate predictions, and personalized guidance. From birth chart analysis to compatibility readings, let our experienced astrologers illuminate your path and empower you to make informed decisions for a harmonious and fulfilling life.</p>
          </div>
        </div>

        <div className='flex items-center justify-center g-4 my-10'>
          <Slider {...settings}>
            <section>
              <img className='' src="/jyotish/1.png" alt="" />
              <p>Numerology</p>
            </section>
            <section>
              <img className='' src="/jyotish/2.png" alt="" />
              <p>Get Horoscope</p>
            </section>
            <section>
              <img className='' src="/jyotish/3.png" alt="" />
              <p>Taro Card</p>
            </section>
            <section>
              <img className='' src="/jyotish/4.png" alt="" />
              <p>Rashi Fal</p>
            </section>
            <section>
              <img className='' src="/jyotish/3.png" alt="" />
              <p>Match Making</p>
            </section>
            <section>
              <img className='' src="/jyotish/3.png" alt="" />
              <p>Guru ji Consultancy</p>
            </section>
          </Slider>
        </div>

        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/jyotish/pandit.png" alt="" />
          </div>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Guru ji Consultancy</h2>
            <p className='py-1'>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
          </div>

        </div>

        <div className='flex flex-col gap-4 items-center justify-center my-10'>
          <div className=''>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 px-10'>Pooja</h2>
          </div>
          <div className='flex gap-4'>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/katha.png" alt="" />
              <h2>Katha</h2>
            </div>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/mantra.png" alt="" />
              <h2>Mantra Jaap</h2>
            </div>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/sans.png" alt="" />
              <h2>Sanskarshala</h2>
            </div>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/ram.png" alt="" />
              <h2>Ramnavmi</h2>
            </div>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/daan.png" alt="" />
              <h2>Gau Daan</h2>
            </div>
          </div>
        </div>

        <div className="flex items-center my-10 gap-5">

          <div className='flex-1 flex flex-col items-left gap-[20px]'>
            <img src="/assets/jyotish.jpeg" alt="" />
          </div>
          <div className="flex-1  object-cover shadow-2xl rounded-md">
            <form onSubmit={handleSubmit} className='flex flex-col gap-[10px] p-[10px]'>
              <input className='border p-1 rounded-md' type="text" placeholder='Name' value={data?.name} onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))} />
              <input className='border p-1 rounded-md' type="number" placeholder='Mobile Number' value={data?.mobile} onChange={(e) => setData(prev => ({ ...prev, mobile: e.target.value }))} />
              <input className='border p-1 rounded-md' type="text" placeholder='Location' value={data?.location} onChange={(e) => setData(prev => ({ ...prev, location: e.target.value }))} />
              <textarea className='border p-1 rounded-md' cols="30" rows="5" placeholder='Message...' value={data?.message} onChange={(e) => setData(prev => ({ ...prev, message: e.target.value }))}></textarea>
              <motion.input whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }} type="submit" value="Submit" className='text-white bg-mainColor' />

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jyotish