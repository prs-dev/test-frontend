import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Success = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 10000)
    }, [])
  return (
    <div className='w-[70%] mx-auto'>
        <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Payment Successful</h2>
        <p className="text-mainColor font-2xl">Redirecting in 10 sec...</p>
        <button onClick={() => navigate("/")} className="bg-mainColor text-white rounded-md p-2 my-2">Home</button>
    </div>
  )
}

export default Success