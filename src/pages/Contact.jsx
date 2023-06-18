import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import {motion} from 'framer-motion'
import axios from 'axios'
import {toast} from 'react-toastify'
import Loader from "../components/Loader";

const url = 'https://backend-s3nk.onrender.com'

const Contact = () => {
  const markerRef = useRef()
  const [data, setData] = useState({
    name: '',
    mobile: '',
    location: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => { setTimeout(() => markerRef?.current?.openPopup(), 1000) }, [])

  const handleSubmit = async(e) => {
    setIsLoading(true)
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
    .finally(() => setIsLoading(false))
}

  // useEffect(() => {
  //   markerRef.leftletElement.openPopup()
  // },[])

  return (
    <div className=''>
      {isLoading && <Loader />}
      <div className='relative'>
        <img className='w-full object-contain h-[70vh] opacity-40' src="/assets/contactus.png" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-[#fff] to-mainColor w-full h-[70vh]'></div>
      </div>
      <div className='w-[60%] mx-auto my-10'>
        <div className='flex flex-col gap-[20px]'>
          <div className="flex items-center flex-col md:flex-row lg:flex-row">

            <div className='flex-[2] flex flex-col items-left gap-[20px]'>
              <p className='md:w-[25%] lg:w-[30%] text-3xl font-semibold text-white bg-mainColor p-2 inline'>Contact Us</p>
              <p className='md:w-[80%] lg:w-[80%] font-semibold text-contentColor'>Thank you for your interest in Sahai Consultancy Services.
                <br />We are here to assist you with your queries and provide expert guidance in astrology, arbitration, legal consultancy, and naturopathy.
                <br />You can reach out to us through the following channels:

                <br /><span className='underline py-2'>Phone:</span> Call us at +91 XXXXXXXXXX to speak directly with our knowledgeable consultants.

                <br /><span className='underline py-2'>Email:</span> Send your inquiries or consultation requests to info@sahaiconsultancy.com.

                <br /><span className='underline py-2'>Website:</span> Visit our website at www.sahaiconsultancy.com to explore our services and fill out the contact form.</p>
            </div>
            <div className="flex-1  object-cover shadow-2xl rounded-md">
              <form onSubmit={handleSubmit} className='h-[50vh] flex flex-col justify-between gap-[10px] p-[10px]'>
                <input className='border p-2' type="text" placeholder='Name' value={data?.name} onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}/>
                <input className='border p-2' type="text" placeholder='Mobile Number' value={data?.mobile} onChange={(e) => setData(prev => ({ ...prev, mobile: e.target.value }))} />
                <input className='border p-2' type="text" placeholder='Location' value={data?.location} onChange={(e) => setData(prev => ({ ...prev, location: e.target.value }))}/>
                <textarea className='border p-2' cols="30" rows="5" placeholder='Message...' value={data?.message} onChange={(e) => setData(prev => ({ ...prev, message: e.target.value }))}></textarea>
                <motion.input whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }} className='border p-2 text-mainColor font-semibold' type="Submit" value="Submit" />

              </form>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="h-[50vh] my-10 shadow-lg border p-2">
          <MapContainer center={[26.8467, 80.9462]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker ref={markerRef} position={[26.8467, 80.9462]}>
              <Popup>
                <div className="text-2xl text-mainColor text-center">Yassh Consultancy Services</div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

    </div>
  )
}

export default Contact