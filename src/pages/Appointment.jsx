import { motion } from 'framer-motion'
import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'

const url = 'https://backend-s3nk.onrender.com'

const Appointment = () => {

    const profileRef = useRef()
    const idRef = useRef()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const [state, setState] = useState([])
    const [cities, setCities] = useState([])
    const [registered, setRegistered] = useState(false)

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
            const res = await axios.post(`${url}/api/cities`, { state: data?.state })
            setCities(res?.data?.cities)
        }
        getCities()
    }, [data.state])


    const handleSubmit = async (e) => {
        setIsLoading(true)
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
            setRegistered(true)
            profileRef.current.value = ''
            idRef.current.value = ''
        } catch (error) {
            toast.error("Please fill out all fields!")
        }
        setIsLoading(false)
    }

    const handlePay = async() => {
        try {
            const res = await axios.get(`${url}/api/checkout`)
            window.location = res?.data?.payment_request.longurl
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }

    return (
        <div>
            {isLoading && <Loader />}
            <div className='relative'>
                <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/panel.jpg" alt="" />
                <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
                <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 md:w-[30%] lg:w-[30%]'>Book Your Appointment With Us</h2>
            </div>
            <div className='w-[70%] mx-auto'>
                {!registered && <>
                <div>
                    <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Register Form</h2>
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
                    <motion.input whileHover={{ scale: 1.05 }} whileTap={{ scale: .9 }} type="submit" value="Submit" className='bg-mainColor text-white p-2 md:w-[20%] lg:w-[10%] my-5' />
                </form>
                </>}
                {registered && <>
                    <motion.button whileHover={{scale: 1.05}} whileTap={{scale: .95}} onClick={handlePay} className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Pay &#8377; 200 (consultant fees)</motion.button>    
                </>}
            </div>
        </div>
    )
}

export default Appointment