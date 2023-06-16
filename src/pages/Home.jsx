import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {motion} from 'framer-motion'

const arr = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/5668765/pexels-photo-5668765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

const url = 'https://backend-s3nk.onrender.com'

const Home = () => {
    const [index, setIndex] = useState(1)
    const [data, setData] = useState({
        name: '',
        mobile: '',
        location: '',
        message: ''
    })

    useEffect(() => {
        const interval = () => {
            if (index === 2) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        }
        setTimeout(interval, 5000)
        return () => clearTimeout(interval)
    }, [index])

    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log(e)
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

    // toast.success("hello")

    return (
        <div>
            <div className="relative h-[calc(100vh-70px)]">
                {arr.map((item, i) => {
                    return index === i ? <img src={item.img} alt="BannerImage" className="absolute h-[calc(100vh-70px)] w-full object-cover object-right opacity-70 transition opacity delay-150" /> : <img src={item.img} alt="BannerImage" className="absolute h-[calc(100vh-70px)] w-full object-cover object-right opacity-0" />
                })}

                <div className="absolute -z-10 bg-gradient-to-t from-mainColor h-[calc(100vh-70px)] w-full" />
                <div className='absolute flex flex-col gap-[10px] items-center justify-center h-[calc(100vh-70px)] w-full text-[3rem] text-white'>
                    <p>Unlock Your inner happiness with</p>
                    <p className='font-bold text-[4rem] bg-white p-[10px] rounded-md text-mainColor'>Yassh Consultancy Services</p>
                </div>
            </div>

            <div className='px-[20rem] py-[4rem] bg-gradient-to-b from-mainColor flex flex-col gap-[20px]'>
                <h1 className='text-3xl font-bold text-[#dfe2e2] bg-mainColor w-[30%] text-center p-2'>Welcome to YCS India</h1>
                {/* <hr className='h-px border-0 dark:bg-[#064255] rounded' /> */}
                <div className="flex items-center gap-[20px]">
                    <p className='w-[50%] flex-1 font-semibold text-white text-justify'>The objective of Yash Consultancy Services India is to provide expert guidance and solutions in the fields of astrology, arbitration, legal consultancy, and natural life care. Our aim is to empower individuals and organizations to overcome challenges, resolve conflicts, and achieve holistic well-being. We strive to deliver high-quality services that are personalized, ethical, and result-oriented. Through our expertise, knowledge, and client-centric approach, we seek to create a positive impact on the lives of our clients, helping them discover their true potential, embrace harmony, and lead fulfilling lives.</p>
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl">
                        <img className='h-[100%] w-[100%] border' src="/assets/main-page-2.jpg" alt="" />
                    </div>
                </div>
                <div className='flex gap-[10px] mt-[20px]'>
                    <div className='flex flex-col border shadow-xl p-[10px] rounded-[10px] flex-1'>
                        <img className='w-[100%] h-[200px]' src="/assets/jyotish.jpeg" alt="" />
                        <p className='text-2xl font-semibold text-contentColor mt-[10px]'>Bhartiye Jyotish</p>
                    </div>
                    <div className='flex flex-col border shadow-xl p-[10px] rounded-[10px] flex-1'>
                        <img className='w-[100%] h-[200px]' src="/assets/natural.jpg" alt="" />
                        <p className='text-2xl font-semibold text-contentColor mt-[10px]'>Natural Life Care</p>
                    </div>
                    <div className='flex flex-col border shadow-xl p-[10px] rounded-[10px] flex-1'>
                        <img className='w-[100%] h-[200px]' src="/assets/lawv2.png" alt="" />
                        <p className='text-2xl font-semibold text-contentColor
                         mt-[10px]'>Sahay Bhartiya Vidhik</p>
                    </div>
                </div>
            </div>

            <div className='px-[20rem] py-[4rem] bg-white flex gap-[20px]'>

                {/* <hr className='h-px border-0 dark:bg-[#064255] rounded' /> */}
                <div className="flex-1 object-cover h-[20rem] shadow-2xl">
                    <img className='h-[100%] w-[100%] border' src="/assets/main-page-1.jpg" alt="" />
                </div>
                <div className="flex-1 flex flex-col  gap-[20px]">
                    <h1 className='text-3xl font-bold w-[40%] text-center text-white bg-mainColor p-2'>
                        Our Mission
                    </h1>

                    <p className=' flex-1 font-semibold text-contentColor text-justify'>The objective of Yash Consultancy Services India is to provide expert guidance and solutions in the fields of astrology, arbitration, legal consultancy, and natural life care. Our aim is to empower individuals and organizations to overcome challenges, resolve conflicts, and achieve holistic well-being. We strive to deliver high-quality services that are personalized, ethical, and result-oriented. Through our expertise, knowledge, and client-centric approach, we seek to create a positive impact on the lives of our clients, helping them discover their true potential, embrace harmony, and lead fulfilling lives.</p>

                </div>
            </div>

            <div className="relative h-[30vh]">
                {arr.map((item, i) => {
                    return index === i ? <img src={item.img} alt="BannerImage" className="absolute h-[30vh] w-full object-cover object-right opacity-70 transition opacity delay-150" /> : <img src={item.img} alt="BannerImage" className="absolute h-[30vh] w-full object-cover object-right opacity-0" />
                })}
                <div className="absolute -z-10 bg-gradient-to-t from-mainColor h-[30vh] w-full" />
            </div>

            <div className='px-[20rem] py-[4rem] bg-gradient-to-b from-mainColor flex flex-col gap-[20px]'>
                <h1 className='text-3xl font-bold text-[#dfe2e2] bg-mainColor text-center w-[20%]'>Our Services</h1>
                {/* <hr className='h-px border-0 dark:bg-[#064255] rounded' /> */}
                <div className="flex items-center">
                    <div className='flex-[2] flex flex-col items-left gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-white'>Welcome to Bhartiye Jyotish</p>
                        <p className='w-[80%] font-semibold text-white'>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
                    </div>
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl rounded-md">
                        <img className='h-[100%] w-[100%] rounded-md border' src="/assets/rishi.jpg" alt="" />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl rounded-md">
                        <img className='h-[100%] w-[100%] rounded-md border' src="/assets/natural.jpg" alt="" />
                    </div>
                    <div className='flex-[2] flex flex-col items-end gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-mainColor'>Natural Life Care</p>
                        <p className='w-[80%] font-semibold text-contentColor'>The purity and benevolence of nature serve as the wellspring of our strength, and we wholeheartedly embrace organic practices in our therapies. Our commitment to utilizing the purest elements of nature ensures that our treatments are in perfect harmony with the environment. Nestled in a serene and unspoiled setting, we are blessed with the abundance of fresh air, pristine water, untouched soil, ample sunlight, and lush virgin forests, all of which form the backdrop for our therapeutic endeavors.</p>
                    </div>

                </div>
                <div className="flex items-center">

                    <div className='flex-[2] flex flex-col items-left gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-mainColor'>Sahaya Bhartiye Vidhik</p>
                        <p className='w-[80%] font-semibold text-contentColor'>In today’s complex legal landscape, having access to reliable legal guidance is essential. Synergy Consultancy Services India is a trusted legal consultancy firm that provides expert assistance and guidance in navigating the intricacies of the Indian legal system. With a commitment to excellence and client satisfaction, Synergy Consultancy Services India offers a range of legal consultancy services tailored to meet the diverse needs of individuals and businesses</p>
                    </div>
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl rounded-md">
                        <img className='h-[100%] w-[100%] rounded-md border' src="/assets/legal.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className='px-[20rem] py-[4rem] bg-gradient-to-b from-mainColor to-navColor  flex flex-col gap-[20px]'>
                <h1 className='text-3xl font-bold text-[#dfe2e2] bg-contentColor w-[30%] text-center'>Center for Excellence</h1>
                {/* <hr className='h-px border-0 dark:bg-[#064255] rounded' /> */}
                <p className='w-[100%] font-semibold text-white text-justify my-2'>Yassh Consultancy Services India is proud to establish a Center for Excellence at our headquarters in Lucknow. This center serves as a hub of expertise, innovation, and continuous learning, reinforcing our commitment to delivering exceptional services in the fields of astrology, arbitration, legal consultancy, and naturopathy.

                <p className='my-2'>The Center for Excellence embodies our vision of providing comprehensive and cutting-edge solutions to our clients. It serves as a platform for our team of experts to enhance their knowledge, skills, and professional development, enabling them to stay at the forefront of their respective fields.</p>

                <p className='my-2'>Key Features of the Center for Excellence:</p>

                <p className='my-2'><span className="underline">Knowledge Hub:</span> A dedicated space equipped with extensive research materials and digital resources, fostering a culture of continuous learning and knowledge sharing.</p>

                <p className='my-2'><span className="underline">Innovation Lab:</span> A state-of-the-art facility where our experts can explore new ideas, develop innovative solutions, and conduct research to address complex challenges in astrology, arbitration, legal consultancy, and natural life care.</p>

                <p className='my-2'><span className="underline">Collaboration Space:</span> A collaborative environment that encourages cross-functional interactions, brainstorming sessions, and idea exchanges, fostering creativity and synergy among our team members.</p>

                <p className='my-2'><span className="underline">Technology Integration:</span> The Center for Excellence incorporates the latest technological advancements to support our services, including advanced software, communication tools, and data analytics, ensuring efficient and effective operations.</p>

                <p className='my-2'><span className="underline">Client Engagement:</span> The center serves as a platform for engaging with our clients for vastu and astrological consultancy, Yoga/Meditation, counselling, hosting seminars, client consultations, and interactive sessions to understand their needs better and provide tailored solutions.</p>

                <p className='my-2'><span className="underline">Thought Leadership:</span> The Center for Excellence aims to be a thought leader in our service filed by publishing research papers, organizing conferences, and participating in related events, contributing to the advancement and development of our fields of expertise.</p>

                <p className='my-2'>The establishment of the Center for Excellence at our Lucknow headquarters exemplifies our unwavering commitment to excellence, continuous improvement, and staying ahead of the curve in our service offerings. It enables us to provide superior consultancy services, drive innovation, and empower our clients to achieve their goals with confidence and succes
                </p>
                </p>
            </div>

            <div className='px-[20rem] py-[4rem] bg-gradient-to-b from-mainColor to-navColor  flex flex-col gap-[20px]'>
                <div className="flex items-center">

                    <div className='flex-[2] flex flex-col items-left gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-white'>Contact Us</p>
                        <p className='w-[80%] font-semibold text-slate-300'>Thank you for your interest in Yash Consultancy Services. We are here to assist you with your queries and provide expert guidance in astrology, arbitration, legal consultancy, and natural Life Care.</p>
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
                    <div className="flex-1  object-cover shadow-2xl rounded-md">
                        <form onSubmit={handleSubmit} className='flex flex-col gap-[10px] p-[10px]'>
                            <input type="text" placeholder='Name' value={data?.name} onChange={(e) => setData(prev => ({...prev, name: e.target.value}))} />
                            <input type="number" placeholder='Mobile Number' value={data?.mobile} onChange={(e) => setData(prev => ({...prev, mobile: e.target.value}))}/>
                            <input type="text" placeholder='Location' value={data?.location} onChange={(e) => setData(prev => ({...prev, location: e.target.value}))}/>
                            <textarea cols="30" rows="5" placeholder='Message...' value={data?.message} onChange={(e) => setData(prev => ({...prev, message: e.target.value}))}></textarea>
                            <motion.input whileHover={{scale: 1.1}} whileTap={{scale: .9}} type="submit" value="Submit" className='text-white' />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home