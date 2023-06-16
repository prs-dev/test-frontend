import React, { useState } from 'react'
import {toast} from 'react-toastify'
import {motion} from 'framer-motion'
import axios from 'axios'

const url = 'https://backend-s3nk.onrender.com'

const Legal = () => {
  const [data, setData] = useState({
    mobile: '',
    message: ''
  })

  const handleSubmit = async(e) => {
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
}
  return (
    <div>
      <div className='relative'>
        <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/legalv2.png" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 w-[20%]'>Sahaya Bhartiya Vidhik</h2>
      </div>
      <div className='w-[70%] mx-auto'>
        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Legal</h2>
            <p className='py-1 text-contentColor'>In today’s complex legal landscape, having access to reliable legal guidance is essential. Synergy Consultancy Services India is a trusted legal consultancy firm that provides expert assistance and guidance in navigating the intricacies of the Indian legal system. With a commitment to excellence and client satisfaction, Synergy Consultancy Services India offers a range of legal consultancy services tailored to meet the diverse needs of individuals and businesses.</p>

          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/assets/lawv2.png" alt="" />
          </div>
        </div>

        <div className='flex gap-4 items-center justify-center'>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/assets/services.jpg" alt="" />
          </div>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Services</h2>
            <p className='py-1 text-contentColor'>We are specialists to clearly guide you through the myriads of financial considerations ranging from  Legal consultancy ,Astrological consultancy and Natural Life care. We take pride in providing quality services built on professionalism and integrity. Our reputation is grounded in honesty, trust, quality, efficiency, and cost-effectiveness.</p>
          </div>
        </div>

        <div className='flex gap-4 my-10'>
          <div className='flex-1 flex flex-col items-center justify-center gap-4 border p-2 shadow-md rounded-md'>
            <img  className='w-[50%]' src="/assets/cashback.png" alt="" />
            <h2 className='text-xl text-navColor'>Credit Control & Debt Recovery</h2>
            <p className='text-contentColor'>All forms of dispute resolution pertaining to Credit Control and Debt Recovery.</p>
          </div>
          <div className='flex-1 flex flex-col items-center justify-center gap-4 border p-2 shadow-md rounded-md'>
            <img className='w-[50%]' src="/assets/salary.png" alt="" />
            <h2 className='text-xl text-navColor'>Revenue Matters</h2>
            <p className='text-contentColor'>Mutation, exchange and demarcation of land,legal documentation and other due diligence compliances.</p>
          </div>
          <div className='flex-1 flex flex-col items-center justify-center gap-4 border p-2 shadow-md rounded-md'>
            <img className='w-[50%]' src="/assets/protection.png" alt="" />
            <h2 className="text-2xl text-navColor">WOMAN'S &CHILD PROTECTION</h2>
            <p className='text-contentColor'>Protection and promotion of women’s and children’s rights through legal presentation</p>
          </div>
          <div className='flex-1 flex flex-col items-center justify-center gap-4 border p-2 shadow-md rounded-md'>
            <img  className='w-[50%]' src="/assets/house.png" alt="" />
            <h2 className='text-2xl text-navColor'>REAL ESTATE LAW</h2>
            <p className='text-contentColor'>The firm deals in Real Estate Laws applicable to a real estate property differed based on the kind/category of land as well as under-construction propert</p>
          </div>
        </div>

        <div>
          <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Arbitration</h2>
          <p className='py-3 text-contentColor'>YCS will join gloves with Synergy legal trust to provide an extended arbitration platform and for taking up plight of undertrial and unrealesd prisoners who have completed their punishment period.</p>
          <p className='py-3 text-contentColor'><span className='font-bold'>WHY ARBITRATION ?</span> Arbitration is an alternative dispute resolution mechanism that plays a significant role in today’s legal landscape. It offers an efficient and effective way to resolve disputes outside of traditional court litigation. The importance of arbitration lies in its numerous advantages and benefits, which make it an attractive choice for parties seeking a timely and cost-effective resolution to their conflicts.</p>
          <ul className='flex flex-col gap-5 text-contentColor'>
            <li>1. Speed and Efficiency: One of the key advantages of arbitration is its speed and efficiency compared to litigation. Arbitration proceedings are generally less formal and more streamlined, allowing parties to resolve their disputes in a timelier manner. The arbitration process can be tailored to suit the specific needs of the parties, resulting in faster resolution and reduced backlog of cases.</li>
            <li>2. Expertise and Specialization: Arbitration allows parties to choose arbitrators who possess specific expertise and knowledge in the subject matter of the dispute. This enables the resolution of complex and technical issues by professionals with a deep understanding of the relevant industry or field. The specialized expertise of arbitrators contributes to the overall efficiency and quality of the decision-making process.</li>
            <li>3. Flexibility and Autonomy: Arbitration offers greater flexibility and autonomy to the parties involved. They have the freedom to choose the procedural rules, location, and language of the arbitration, providing a more tailored and customized approach to dispute resolution. This flexibility allows parties to have more control over the process and encourages their active participation in shaping the outcome.</li>
            <li>4. Confidentiality: Confidentiality is a crucial aspect of arbitration that appeals to many parties. Unlike court proceedings, which are generally open to the public, arbitration offers a private and confidential environment for resolving disputes. This confidentiality safeguards sensitive business information, trade secrets, and maintains the privacy of the parties involved.</li>
            <li>5. Cost-Effectiveness: Arbitration can often be more cost-effective than traditional litigation. While there may be costs associated with hiring arbitrators and conducting the proceedings, they are typically lower compared to the expenses incurred in court litigation, such as attorney fees, court fees, and lengthy proceedings. The streamlined nature of arbitration also helps save time and resources for the parties involved.</li>
            <li>6. International Reach: Arbitration has gained significant importance in the realm of international disputes. It provides a neutral platform for resolving cross-border conflicts, allowing parties from different jurisdictions to come together and seek a mutually agreeable solution. The enforceability of arbitration awards under international conventions, such as the New York Convention, further enhances its attractiveness as a mechanism for international dispute resolution.</li>
            <li>7. Preserving Relationships: Another crucial aspect of arbitration is its potential to preserve relationships between the parties involved. Unlike adversarial court litigation, arbitration fosters a more cooperative and less confrontational environment, encouraging parties to work together towards a mutually beneficial outcome. This can be particularly valuable in disputes involving ongoing business relationships or long-term contracts.</li>
          </ul>
          <p className='text-xl font-semibold py-3 text-contentColor'>Conclusion:</p>
          <p className='py-3 text-contentColor'>In conclusion, the importance of arbitration lies in its ability to provide a faster, more efficient, and cost-effective alternative to traditional litigation. Its flexibility, expertise, confidentiality, and international reach make it a preferred choice for parties seeking a fair and impartial resolution of their disputes while preserving relationships and maintaining control over the process. Arbitration continues to play a vital role in modern dispute resolution, promoting access to justice and fostering a more harmonious and efficient legal system.</p>
          <p className='py-3 text-contentColor'>Synergy Consultancy Services India and Synergy Legal Trust are proud to join hands in a collaborative effort to address the issues of arbitration and the plight of under-trialed prisoners in India. Together, we commit to taking the following actions:</p>
          <h4 className='py-3 font-semibold text-contentColor'>Awareness and Advocacy:</h4>
          <p className='py-3 text-contentColor'> We will raise awareness about the importance of fair arbitration practices and the rights of under-trialed prisoners through educational campaigns, workshops, and seminars.</p>
          <h4 className='py-3 font-semibold text-contentColor'>Pro Bono Legal Assistance: </h4>
          <p className='py-3 text-contentColor'>Yassh Legal Trust will provide pro bono legal support to under-trialed prisoners, ensuring their access to justice and fair representation in court.</p>
          <h4 className='py-3 font-semibold text-contentColor'>Mediation and Conflict Resolution: </h4>
          <p className='py-3 text-contentColor'>Synergy Consultancy Services will offer mediation services in arbitration cases, promoting peaceful resolution and reducing the burden on the judicial system.</p>
          <h4 className='py-3 font-semibold text-contentColor'>Policy Advocacy: </h4>
          <p className='py-3 text-contentColor'>Both organizations will work collaboratively to advocate for policy reforms in the field of arbitration and criminal justice, aiming to improve the conditions of under-trialed prisoners and promote a fair and efficient legal system.</p>
          <h4 className='py-3 font-semibold text-contentColor'>Research and Documentation: </h4>
          <p className='py-3 text-contentColor'>We will conduct research and collect data on arbitration practices and the situation of under-trialed prisoners, creating a knowledge base for informed decision-making and policy interventions.</p>
          <h4 className='py-3 font-semibold text-contentColor'>Capacity Building: </h4>
          <p className='py-3 text-contentColor'>Yassh Legal Trust will provide training and capacity-building programs to legal professionals and advocates, equipping them with the necessary skills to address arbitration issues and represent under-trialed prisoners effectively.</p>
          <h4 className='py-3 font-semibold text-contentColor'>Collaboration with NGOs and Stakeholders:  </h4>
          <p className='py-3 text-contentColor'>We will collaborate with non-governmental organizations, civil society groups, and other stakeholders working in the field of arbitration and criminal justice to strengthen our collective efforts and maximize impact.</p>
          <h4 className='py-3 font-semibold text-contentColor'>Public Outreach: </h4>
          <p className='py-3 text-contentColor'>Yassh Consultancy Services and Synergy Legal Trust will engage in public outreach programs to engage communities, raise awareness, and foster dialogue on the importance of fair arbitration practices and the rights of under-trialed prisoners.</p>

          <p className='py-3 text-contentColor'>Through these collaborative efforts, Yassh Consultancy Services India and Synergy Legal Trust aim to bring positive change, promote fairness, and contribute to the resolution of arbitration issues and the welfare of under-trialed prisoners in India.</p>
        </div>

        <div>
          <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Center For Excellence</h2>
          <ul className='flex flex-col gap-4 text-contentColor'>
            <li>1.Spacious and well-lit courtroom with proper seating arrangements for judges, lawyers, witnesses, and the public.
              Acoustically treated room to ensure clear and audible communication.
              Ergonomically designed furniture for judges, lawyers, and witnesses to ensure comfort during long court sessions.
              Audio-Visual System:</li>
            <li>2.High-quality audio system with strategically placed speakers to ensure clear and audible communication to all participants.
              Video conferencing capabilities for remote testimony, allowing witnesses and experts to testify without physically being present in the courtroom.
              Large displays/screens for evidence presentation, video playback, and virtual court proceedings.
              Recording and Transcription:</li>
            <li>3.Advanced digital recording system to capture and archive court proceedings.
              Real-time transcription services for accurate and timely records.</li>
            <li>4.Robust and secure network infrastructure to facilitate secure data transmission and communication.
              Virtual Private Network (VPN) connectivity for secure remote access to case files and documents.
              Secure storage systems to preserve case-related data and ensure data integrity.
              Evidence Presentation Technology:</li>
            <li>5.High-resolution document cameras for displaying physical evidence and documents to all participants.
              Video playback systems for presenting recorded evidence, including CCTV footage or multimedia files.
              Interactive touchscreens for easy navigation and annotation of electronic evidence.
              Connectivity and Communication:</li>
            <li>6.High-speed internet connectivity for seamless video conferencing, research, and access to online legal databases.
              Integrated communication tools for efficient and secure communication between judges, lawyers, and witnesses.
              Dedicated email and messaging systems for official court communications.
              Accessibility and Assistive Technologies:</li>
            <li>7.Accessibility features to accommodate individuals with disabilities, including hearing and visual impairments.
              Assistive technologies such as screen readers, captioning services, and hearing amplification devices.
              Power Backup and Security:</li>
            <li>8.Uninterrupted Power Supply (UPS) and backup generators to ensure uninterrupted courtroom proceedings.
              Advanced security systems, including access control, surveillance cameras, and secure storage for case-related materials.
              By incorporating the latest IT and communication technology into the infrastructure of modern courtrooms and witness boxes at company’s headquater in Lucknow, uttar pradesh., Synergy Conultancy proposes to ehance the judicial system efficiency, streamline processes, improve access to justice, and ensure fair and transparent proceedings</li>
          </ul>
        </div>

        <hr className='my-4'/>

        <div className='flex gap-5 items-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[70%] '>Online Legal Consultancy</h2>
            <p className='text-contentColor'>Synergy Consultancy Services India strives to empower individuals and organizations through expert guidance in astrology, arbitration, legal consultancy, and natural life care. Our objective is to promote holistic well-being, resolve conflicts, and provide personalized solutions for a fulfilling and harmonious life.</p>
            <button className='bg-mainColor  py-2 px-4 rounded-full text-white my-2'>Book Appointment</button>
          </div>
          <div className="flex-1 shadow-2xl rounded-md h-[70%]">
            <form onSubmit={handleSubmit} className='flex h-[70%] p-2 flex-col gap-4 justify-between'>
              <input className='border rounded-md p-1' value={data.mobile} onChange={e => setData(prev => ({...prev, mobile: e.target.value}))} type="number" placeholder='Mobile Number' />
              <textarea className='border rounded-md p-1' value={data.message} onChange={e => setData(prev => ({...prev, message: e.target.value}))} cols="30" rows="5" placeholder='Message...'></textarea>
              <motion.input whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}  type="submit" value="Submit" className='bg-mainColor text-white' />
            </form>
          </div>
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

export default Legal