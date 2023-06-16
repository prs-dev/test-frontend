import {motion} from 'framer-motion'

const arr = [
  {
    title: "Appointment",
    src: "/pooja/unknown.png"
  },
  {
    title: "Amusement and Recreation",
    src: "/pooja/amusement.png"
  },
  {
    title: "Massages and Therapies",
    src: "/pooja/therapy.png"
  },
  {
    title: "Wellness Programs",
    src: "/pooja/wellness.png"
  },
  {
    title: "Naturopathic Treatments",
    src: "/pooja/naturopathic.png"
  },
  {
    title: "Donation for needy people",
    src: "/pooja/donation.png"
  },
  {
    title: "Donation for Clothes and Blankets",
    src: "/pooja/donation-clothes.png"
  },
  {
    title: "Food Donation for poor people",
    src: "/pooja/food-donation.png"
  },
  {
    title: "Brahmin Bhoj (Feast for Brahmin and Sadhus)",
    src: "/pooja/bhoj.png"
  },
  {
    title: "Donation for Construction of new Goushala",
    src: "/pooja/gaay.png"
  },
  {
    title: "Gau Daan",
    src: "/pooja/gau-daan.png"
  },
  {
    title: "Yogyopavit Sanskar",
    src: "/pooja/yogyopavit.png"
  },
  {
    title: "Vedic Vivah Sanskar",
    src: "/pooja/vivah.png"
  },
  {
    title: "Naamkaran Sanskar",
    src: "/pooja/naam.png"
  },
  {
    title: "Mundan (Chunakarm Sanskar)",
    src: "/pooja/mundan.png"
  },
  {
    title: "Annaprashan Sanskar",
    src: "/pooja/anna.png"
  },
  {
    title: "Vishnu-Vivah",
    src: "/pooja/vivah.png"
  },
  {
    title: "Sudhrsham Gayatri Mantra Jaap",
    src: "/pooja/sudarshan.png"
  },
  {
    title: "Shukra Grah Shanti Jaap",
    src: "/pooja/shukra.png"
  },
  {
    title: "Shanti Gopal Mantra Jaap",
    src: "/pooja/gopal.png"
  },
  {
    title: "Rahu Grah Shanti Jaap",
    src: "/pooja/rahu.png"
  },
  {
    title: "Pitri Dosh Nivaran Pooja",
    src: "/pooja/pitri.png"
  },
  {
    title: "Nava Grah Shanti Pooja",
    src: "/pooja/nava grah.png"
  },
  {
    title: "Mool Nakshatra Shanti Pooja",
    src: "/pooja/mool.png"
  },
  {
    title: "Mangalik Dosh Nivaran Pooja",
    src: "/pooja/kundli.png"
  },
  {
    title: "Mangal Grah Shanti Jaap",
    src: "/pooja/mangal.png"
  },
  {
    title: "Mahamrityunjay Mantra Jaap",
    src: "/pooja/maha.png"
  },
  {
    title: "Ketu Grah Shanti Jaap",
    src: "/pooja/ketu.png"
  },
  {
    title: "Kaal-Sharp Dosh Nivaram Jaap",
    src: "/pooja/kall.png"
  },
  {
    title: "Guru Grah Shanti Jaap",
    src: "/pooja/guru.png"
  },
]

const Services = () => {
  return (
    <div>
      <div className='relative'>
        <img className='w-full object-cover h-[50vh] opacity-30' src="/pooja/services.jpg" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 w-[20%]'>Our Services</h2>
      </div>
      <div className='w-[70%] mx-auto'>
        <h2 className='text-3xl bg-mainColor flex items-center justify-center text-white py-1 my-10 w-[10%]'>Pooja</h2>
        <motion.div className='grid grid-cols-4 w-[100%] mx-auto gap-10 my-10'>
          {arr.map(item => (
            <div className='flex flex-col items-center text-contentColor rounded-lg gap-2 p-1 border shadow-lg'>
              <img className='h-[80%] w-[80%]' src={item.src} alt="" />
              <p>-- All Pooja</p>
              <p className='text-xl p-1'>{item.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Services