import { useEffect, useRef, useState } from "react";
import {motion} from 'framer-motion'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import Loader from '../components/Loader'

const url = 'https://backend-s3nk.onrender.com'

const Natural = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState({
    mobile: '',
    message: ''
  })

  const handleSubmit = async(e) => {
    setIsLoading(true)
    e.preventDefault()
    axios.post(`${url}/api/contact-one`, data)
    .then(res => {
        console.log(res)
        setData({
            mobile: '',
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

  return (
    <div>
      {isLoading && <Loader />}
      <div className='relative'>
        <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/natural.jpg" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 md:w-[20%] lg:w-[20%]'>Natural Life Care</h2>
      </div>

      <div className='w-[70%] mx-auto'>

        <div className='flex gap-4 flex-col md:flex-row lg:flex-row items-center justify-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Natural Life Care</h2>
            <p className='py-1'>The purity and benevolence of nature serve as the wellspring of our strength, and we wholeheartedly embrace organic practices in our therapies. Our commitment to utilizing the purest elements of nature ensures that our treatments are in perfect harmony with the environment. Nestled in a serene and unspoiled setting, we are blessed with the abundance of fresh air, pristine water, untouched soil, ample sunlight, and lush virgin forests, all of which form the backdrop for our therapeutic endeavors.</p>

            <p>Our dedicated team of doctors and therapists are deeply rooted in the authentic practice of Yoga and Naturopathy. With their guidance, we embark on a transformative journey that nurtures the awakening of the mind, body, and spirit, fostering a harmonious phase of growth and self-discovery.</p>

            <p>Wrapped in the embrace of nature’s beauty and tranquility, Prakriti Shakti leads you on a metamorphic expedition. Here, the healer within you emerges, allowing you to liberate yourself from the ignorance and chaos of an unhealthy lifestyle. Through this process, you transcend into a state of inner equilibrium, experiencing profound calmness and serenity.</p>

          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/natural/tea.jpeg" alt="" />
          </div>
        </div>
        <p className='my-10'>We offer online natural Life care treatments that focus on natural healing methods to cure diseases without medication or side effects. Our personalized treatment plans and organic approaches aim to restore balance and promote overall well-being. With a commitment to holistic wellness, we prioritize safe and effective results through the use of natural remedies and therapies. Our experienced practitioners provide guidance and support throughout the journey, empowering individuals to take charge of their health. Embark on a journey of natural healing with our 100% organic online naturopathy treatments and experience the power of restoring vitality through natural means.</p>

        <hr />
        <div className='flex gap-4 flex-col md:flex-row lg:flex-row items-center justify-center my-10'>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/natural/yoga.jpg" alt="" />
          </div>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Yoga & meditation</h2>
            <p className='py-1'>Wrapped in the embrace of nature’s beauty and tranquility, Prakriti Shakti leads you on a metamorphic expedition. Here, the healer within you emerges, allowing you to liberate yourself from the ignorance and chaos of an unhealthy lifestyle. Through this process, you transcend into a state of inner equilibrium, experiencing profound calmness and serenity.</p>

          </div>

        </div>

        <hr />

        <div className='flex gap-4 flex-col md:flex-row lg:flex-row items-center justify-center my-10'>

          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Prakritik Upchar</h2>
            <p className='py-1'>Wrapped in the embrace of nature’s beauty and tranquility, Prakriti Shakti leads you on a metamorphic expedition. Here, the healer within you emerges, allowing you to liberate yourself from the ignorance and chaos of an unhealthy lifestyle. Through this process, you transcend into a state of inner equilibrium, experiencing profound calmness and serenity.</p>

          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/natural/upchar.jpg" alt="" />
          </div>

        </div>

        <hr />

        <div className='flex gap-4 flex-col md:flex-row lg:flex-row items-center justify-center my-10'>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/natural/pancha.jpg" alt="" />
          </div>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[60%]'>PANCHAKARMA THERAPHY</h2>
            <p className='py-1'>Panchakarma is a traditional Ayurvedic treatment that aims to purify and rejuvenate the body, mind, and spirit. This holistic therapy consists of five therapeutic procedures: Vamana (emesis), Virechana (purgation), Basti (enema), Nasya (nasal administration), and Raktamokshana (bloodletting). Each procedure is carefully designed to eliminate toxins and restore balance to the body using 100% organic herbal preparations. Panchakarma not only detoxifies the body but also strengthens the immune system, improves digestion, promotes mental clarity, and enhances overall well-being. Embracing the wisdom of nature, Panchakarma offers a gentle yet powerful healing experience for individuals seeking organic and holistic healthcare solutions.</p>

          </div>

        </div>

        <hr />

        <div className='flex gap-4 flex-col md:flex-row lg:flex-row items-center justify-center my-10'>

          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[80%]'>Swachh Aahaar Awam Swachh Vichar</h2>
            <p className='py-1'>Swachh Aahaar Awam Swachh Vichar” translates to “Clean Eating and Thoughts.” This concept emphasizes the importance of consuming wholesome, unprocessed foods for physical and mental well-being. By nourishing our bodies with nutritious meals and cultivating positive thoughts, we can achieve a healthier lifestyle and a more balanced state of mind.</p>

          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/natural/fruits.jpeg" alt="" />
          </div>

        </div>

        <div className='flex gap-4 items-center justify-center my-10'>

          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>What we do</h2>
            <ul>
              <li>1. Counseling and Lifestyle Modification</li>
              <li>2. Yoga and Pranayama</li>
              <li>3. Natural healing technique like fasting, mud, reflex, Acupressure, Massage etc.</li>
              <li>4. Organic Medicine</li>
            </ul>
          </div>
        </div>

        <div className='border p-2 rounded-lg bg-slate-300 text-slate-600'>
          <h2>Natural Life Care</h2>
          <p>“Heal Naturally, Embrace Wellness: The Essence of Naturopathy!”</p>
          <p>“Embrace Balance, Embrace Life: The Significance of Naturopathy Unveiled!”</p>
        </div>

        <hr className='my-4' />

        <div className='flex gap-5 flex-col md:flex-row lg:flex-row items-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[70%] '>Online Natural Life</h2>
            <p className='text-contentColor'>Yassh Consultancy Services India strives to empower individuals and organizations through expert guidance in astrology, arbitration, legal consultancy, and natural life care. Our objective is to promote holistic well-being, resolve conflicts, and provide personalized solutions for a fulfilling and harmonious life.</p>
            <button onClick={() => navigate("/appointment")} className='bg-mainColor  py-2 px-4 rounded-full text-white my-2'>Start treatment</button>
          </div>

          <hr />
          <div className="flex-1 shadow-2xl rounded-md h-[70%]">
          <form onSubmit={handleSubmit} className='flex h-[70%] p-2 flex-col gap-4 justify-between'>
              <input className='border rounded-md p-1' value={data.mobile} onChange={e => setData(prev => ({...prev, mobile: e.target.value}))} type="number" placeholder='Mobile Number' />
              <textarea className='border rounded-md p-1' value={data.message} onChange={e => setData(prev => ({...prev, message: e.target.value}))} cols="30" rows="5" placeholder='Message...'></textarea>
              <motion.input whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}  type="submit" value="Submit" className='bg-mainColor text-white' />
            </form>
          </div>

          <hr />
          <div className='flex-1 flex flex-col items-left gap-[20px]'>
            <p className='w-[80%] text-3xl text-mainColor'>Contact Us</p>
            <p className='w-[80%]  text-contentColor'>Thank you for your interest in Yash Consultancy Services. We are here to assist you with your queries and provide expert guidance in astrology, arbitration, legal consultancy, and natural Life Care.</p>
            <span className='flex gap-[10px] text-contentColor'>
              <i class="fa-solid fa-location-dot"></i>
              <span>123 Lucknow</span>
            </span>
            <span className='flex gap-[10px] text-contentColor'>
              <i class="fa-solid fa-phone"></i>
              <span>1234567890</span>
            </span>
            <span className='flex gap-[10px] text-contentColor'>
              <i class="fa-solid fa-envelope"></i>
              <span>test@gmail.com</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Natural