import { motion } from 'framer-motion'
import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const url = 'https://backend-s3nk.onrender.com'

const Panel = () => {
  const profileRef = useRef()
  const idRef = useRef()
  const navigate = useNavigate()

  const [state, setState] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    const temp = async () => {
      const res = await axios.get(`${url}/api/states`)
      setState(res?.data?.states)
    }
    temp()
  }, [])

  const [data, setData] = useState({
    name: '',
    username: '',
    gender: '',
    mail: '',
    mobile: '',
    altmobile: '',
    dob: '',
    exp: '',
    state: '',
    city: '',
    pin: '',
    address: '',
    expert: '',
    lang: '',
    skill: '',
    ques: '',
    profile: '',
    id: ''
  })

  

  useEffect(() => {
    const getCities = async () => {
      const res = await axios.post(`${url}/api/cities`, {state: data?.state})
      setCities(res?.data?.cities)
    }
    getCities()
  }, [data.state])
  



  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // console.log([...formData])
    try {
      const res = await axios.post(`${url}/api/contact-three`, formData)
      console.log(res?.data)
      toast.success("Your information is successfully received")
      setData({
        name: '',
        username: '',
        gender: '',
        mail: '',
        mobile: '',
        altmobile: '',
        dob: '',
        exp: '',
        state: '',
        city: '',
        pin: '',
        address: '',
        expert: '',
        lang: '',
        skill: '',
        ques: '',
      })
      profileRef.current.value = ''
      idRef.current.value = ''
    } catch (error) {
      toast.error("Please fill out all fields!")
    }

  }


  console.log(data)

  return (
    <div>
      <div className='relative'>
        <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/panel.jpg" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 w-[20%]'>Panellist</h2>
      </div>
      <div className='w-[70%] mx-auto'>
        <div className='flex gap-4 my-20'>
          <div id='card1' className='hover:text-white flex-1 flex flex-col gap-5 border p-2 shadow-lg rounded-md'>
            <h2 className='text-2xl text-mainColor'>Astrology Consultancy</h2>
            <p>Mr. Pandey is a qualified and experienced practicing astrologer on our panel. With a deep understanding of cosmic influences and planetary alignments, he provides insightful guidance through birth charts and horoscopes. Mr. Padey's expertise and intuitive abilities make him a valuable resource for those seeking astrological insights and guidance.</p>
            <motion.button onClick={() => navigate("/appointment")} whileHover={{ scale: 1.05 }} className='py-2 bg-mainColor text-white w-[50%] rounded-full'>Book Appointment</motion.button>
          </div>
          <div id='card2' className='hover:text-white flex-1 flex flex-col gap-5 border p-2 shadow-lg rounded-md'>
            <h2 className='text-2xl text-mainColor'>Vastu consultancy</h2>
            <p>Mr. Sharma is a dedicated and knowledgeable vastu consultant on our panel. With expertise in the ancient Indian science of architecture, he offers guidance on creating harmonious and balanced living spaces. Mr. Sharma's insights into vastu principles help individuals align their physical environments with positive energies for enhanced well-being.</p>
            <motion.button onClick={() => navigate("/appointment")} whileHover={{ scale: 1.05 }} className='py-2 bg-mainColor text-white w-[50%] rounded-full'>Book Appointment</motion.button>
          </div>
          <div id='card3' className='hover:text-white flex-1 flex flex-col gap-5 border p-2 shadow-lg rounded-md'>
            <h2 className='text-2xl text-mainColor'>Yoga and Meditation</h2>
            <p>Mr. Joshi is a highly skilled and experienced yoga and meditation expert on our panel. With a profound understanding of yogic practices and mindfulness techniques, he guides individuals in achieving physical and mental well-being. Mr. Joshi's expertise in yoga and meditation contributes to creating a harmonious and balanced lifestyle.</p>
            <motion.button onClick={() => navigate("/appointment")} whileHover={{ scale: 1.05 }} className='py-2 bg-mainColor text-white w-[50%] rounded-full'>Book Appointment</motion.button>
          </div>
          <div id='card4' className='hover:text-white flex-1 flex flex-col gap-5 border p-2 shadow-lg rounded-md'>
            <h2 className='text-2xl text-mainColor'>Legal Consultancy</h2>
            <p>Mr. Verma is a practicing lawyer with extensive experience and a deep knowledge of legal matters. As a member of our panel, he offers expert advice and representation to clients seeking legal assistance. Mr. Verma's competence and proficiency in various areas of law ensure that clients receive effective guidance and support in navigating the legal landscape.</p>
            <motion.button onClick={() => navigate("/appointment")} whileHover={{ scale: 1.05 }} className='py-2 bg-mainColor text-white w-[50%] rounded-full'>Book Appointment</motion.button>
          </div>
        </div>

        {/* form */}
        <div className='my-20'>
          <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Inquiry Form</h2>
          <p>Yassh Consultancy Services offer Astrology/Legal/Naturopathy Consultancy services through user friendly E- Commerce website/app with seamless functionality. If you are a certified astrologer/Legal/Naturopathy expert with a proven background, then here is the perfect online platform which truly rewards your talents and experience, we invite you to Partner with one of the fastest growing Astrological/Legal/Naturopathy Consultancy platform and experience unlimited growth and assured, secure income. Be a subject matter expert and reach out to a number of people looking for quality Astrology/Legal/Naturopathy consultancy services Services.</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col border p-5 rounded-lg shadow-lg my-10 gap-4'>
          <label htmlFor="">Your Name</label>
          <input type="text" value={data.name} onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">User Name</label>
          <input type="text" value={data.username} onChange={e => setData(prev => ({ ...prev, username: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">Gender</label>
          <div className='flex gap-4'>
            <div>
              <input onChange={e => setData(prev => ({ ...prev, gender: e.target.value }))} type="radio" value="male" name="gender" />
              <label>Male</label>
            </div>
            <div>
              <input onChange={e => setData(prev => ({ ...prev, gender: e.target.value }))} type="radio" value="female" name="gender" />
              <label>Female</label>
            </div>
          </div>
          <label htmlFor="">Email</label>
          <input type="email" value={data.mail} onChange={e => setData(prev => ({ ...prev, mail: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">Mobile Number</label>
          <input type="number" value={data.mobile} onChange={e => setData(prev => ({ ...prev, mobile: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">Alternate Number</label>
          <input type="number" value={data.altmobile} onChange={e => setData(prev => ({ ...prev, altmobile: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">DOB</label>
          <input type="date" onChange={e => setData(prev => ({ ...prev, dob: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">Experience</label>
          <input type="text" value={data.exp} onChange={e => setData(prev => ({ ...prev, exp: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">State</label>
          {/* <input type="text" value={data.state} onChange={e => setData(prev => ({ ...prev, state: e.target.value }))} className='shadow-md border' /> */}
          <select className='border shadow-md' value={data?.state} onChange={e => {
            setData(prev => ({ ...prev, state: e.target.value }))
            // getCities(data?.state)
          }}>
            <option value="" disabled>Select State</option>
            {state?.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <label htmlFor="">City</label>
          {/* <input type="text" value={data.city} onChange={e => setData(prev => ({ ...prev, city: e.target.value }))} className='shadow-md border' /> */}
          <select className='border shadow-md' value={data?.city} onChange={e => {
            setData(prev => ({ ...prev, city: e.target.value }))
          }}>
            <option value="" disabled>Select City</option>
            {cities?.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <label htmlFor="">PIN code</label>
          <input type="number" value={data.pin} onChange={e => setData(prev => ({ ...prev, pin: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">Address</label>
          <input type="text" value={data.address} onChange={e => setData(prev => ({ ...prev, address: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">Expertise</label>
          <input type="text" value={data.expert} onChange={e => setData(prev => ({ ...prev, expert: e.target.value }))} className='shadow-md border' />
          <label htmlFor="">Select Language</label>
          <select value={data.lang} onChange={e => setData(prev => ({ ...prev, lang: e.target.value }))} className='shadow-md border'>
            <option value="" disabled>Select Language</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
          <label htmlFor="">Select Skill</label>
          <select className='shadow-md border' value={data.skill} onChange={e => setData(prev => ({ ...prev, skill: e.target.value }))}>
            <option value="" disabled>Select Skill</option>
            <option value="Astrology">Astrology</option>
            <option value="Legal">Legal</option>
            <option value="Natural">Natural Wellness</option>
          </select>
          <label htmlFor="">Are you on any other portal</label>
          <div className='flex gap-4'>
            <div>
              <input type="radio" value="yes" onChange={e => setData(prev => ({ ...prev, ques: e.target.value }))} name="confirm" />
              <label>Yes</label>
            </div>
            <div>
              <input type="radio" value="no" onChange={e => setData(prev => ({ ...prev, ques: e.target.value }))} name="confirm" />
              <label>No</label>
            </div>
          </div>
          <label>Profile Photo</label>
          <input type="file" ref={profileRef} onChange={e => setData(prev => ({ ...prev, profile: e.target.files[0] }))} />
          <label>Id Proof(Upload Aadhar Card in pdf format)</label>
          <input type="file" ref={idRef} onChange={e => setData(prev => ({ ...prev, id: e.target.files[0] }))} />
          <motion.input whileHover={{ scale: 1.05 }} whileTap={{ scale: .9 }} type="submit" value="Submit" className='bg-mainColor text-white p-2 w-[10%] my-5' />
        </form>
      </div>
    </div>
  )
}

export default Panel