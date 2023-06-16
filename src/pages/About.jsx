import React from 'react'

const About = () => {
  return (
    <div>
      <div className='relative'>
        <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/panel.jpg" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 w-[20%]'>About Us</h2>
      </div>
      <div className='w-[70%] mx-auto'>
        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Welcome To YCS INDIA</h2>
            <p className='py-1 text-contentColor'>Common Factors in Astrology, Law, and Natural Life Care: Exploring the Intersections</p>
            <p className='py-2 text-contentColor'>Astrology, law, and natural life care may seem like distinct fields at first glance, but they share certain common factors that connect them on a deeper level. While each discipline focuses on different aspects of life, there are intriguing intersections where these practices converge and complement each other. Let’s explore some of the common factors in astrology, law, and natural life care. </p>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/about/one.jpg" alt="" />
          </div>
        </div>

        <div className='my-10'>
          <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[100%]'>We Explore the Intersections :Common Factors in Astrology, Law, and Natural Life care
          </h2>
          <ol className='flex flex-col gap-4 text-contentColor'>
            <li>1. Holistic Approach: Both astrology and natural life care embrace a holistic approach to understanding and addressing human experiences. Astrology considers the cosmic influences on individuals, while natural life care looks at the interconnectedness of physical, mental, and emotional well-being. Similarly, the law aims to provide justice and maintain balance in society by considering the broader context and consequences of actions.</li>
            <li>2. Individualized Guidance: Astrology, law, and natural life care recognize the importance of individualized guidance. In astrology, birth charts and horoscopes provide personalized insights into an individual’s unique traits, strengths, and challenges. Similarly, legal professionals tailor legal advice and strategies to address the specific circumstances of their clients. Natural life care focuses on personalized treatment plans that consider an individual’s physical and emotional needs.</li>
            <li>3. Understanding Cycles and Patterns: Astrology, law, and natural life care all emphasize the recognition and understanding of cycles and patterns. Astrology explores celestial cycles and planetary movements to gain insights into life’s ebbs and flows. In law, legal professionals analyze past cases and legal precedents to understand patterns and make informed decisions. Natural life care recognizes the body’s innate healing cycles and aims to restore balance through natural remedies and therapies.</li>
            <li>4. Empowerment and Self-Awareness: Astrology, law, and natural life care share a common goal of empowering individuals and promoting self-awareness. Astrology provides individuals with self-reflection and understanding of their inherent potentials. The law empowers individuals by advocating for their rights and ensuring access to justice. Natural life care encourages individuals to take an active role in their health and well-being through self-care practices and lifestyle modifications.</li>
            <li>5. Ethics and Ethics: Ethics play a crucial role in astrology, law, and natural life care. Astrologers, legal professionals, and naturopaths adhere to ethical guidelines and professional standards in their respective fields. They uphold principles of integrity, confidentiality, and respect for the well-being and autonomy of their clients or patients.</li>
            <li>6. Seeking Balance and Harmony: Astrology, law, and natural life care all strive to promote balance and harmony in their own ways. Astrology seeks to align individuals with cosmic energies to find inner harmony. Law aims to maintain social order and justice by balancing rights and responsibilities. Natural life care seeks to restore balance and harmony within the body through natural healing modalities.</li>
            <li>While astrology, law, and natural life care may differ in their methodologies and areas of focus, these common factors demonstrate the interconnectedness of these practices</li>
          </ol>
        </div>

        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%] h-[20vh]' src="/about/two.jpg" alt="" />
          </div>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Our Vision</h2>
            <p className='py-2 text-contentColor'>To be a leading consultancy firm providing comprehensive guidance and solutions in astrology, arbitration, legal consultancy, and natural life care, empowering individuals to achieve holistic well-being, resolve conflicts, and embrace their true potential.</p>
          </div>
        </div>

        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Our Mission</h2>
            <p className='py-2 text-contentColor'>Astrology: Our mission is to provide accurate and insightful astrological guidance, helping individuals gain a deeper understanding of their lives, make informed decisions, and navigate their personal and professional journeys with clarity and purpose.</p>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/about/three.jpg" alt="" />
          </div>
        </div>

        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/about/four.jpg" alt="" />
          </div>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Natural Life Care</h2>
            <p className='py-2 text-contentColor'>Our mission in natural life care is to promote natural healing and holistic wellness. We aim to empower individuals to take charge of their health by providing personalized naturopathic solutions, emphasizing preventive care, lifestyle modifications, and natural remedies, thereby supporting their overall well-being.</p>
          </div>
        </div>

        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Integration of Disciplines</h2>
            <p className='py-2 text-contentColor'>We strive to explore and integrate the intersections of astrology, arbitration, legal consultancy, and natural life care. By offering a comprehensive approach, we aim to address the diverse needs of our clients, promoting their physical, emotional, and spiritual growth, and guiding them towards a harmonious and fulfilling life.</p>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%] h-[20vh]' src="/about/five.webp" alt="" />
          </div>
        </div>

        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/about/six.jpg" alt="" />
          </div>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Client-Centric Approach</h2>
            <p className='py-2 text-contentColor'>Our mission is to provide exceptional client experiences by delivering personalized and professional services. We prioritize building long-term relationships based on trust, integrity, and confidentiality, ensuring that our clients’ needs and goals are at the forefront of our consultancy services.</p>
          </div>
        </div>

        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[60%]'>Continuous Learning and Growth</h2>
            <p className='py-2 text-contentColor'>We are dedicated to staying updated with the latest developments in astrology, arbitration, legal consultancy, and natural life care. Our mission is to continuously expand our knowledge, refine our skills, and adopt innovative practices to offer the highest quality services and solutions to our clients.</p>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%] h-[20vh]' src="/about/seven.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About