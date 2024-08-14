import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundBack  } from "react-icons/io";
import toast from 'react-hot-toast';
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { GrFormRefresh } from "react-icons/gr";
import Flag from 'react-world-flags';
import axios from 'axios';
import { dateFormater } from '../../../utility/dataFomat';
import chaiAurCodeImage from '../../../assets/Screenshot 2024-08-14 010320.png'

const RandomUserCard = () => {
  const [data, setData] = useState(undefined)

  const getData = async () => {
    const loadingToast = toast.loading('Fetching new user Data...')
    try {
      const response = await axios.get("https://api.freeapi.app/api/v1/public/randomusers/user/random")
      
      if(response?.status === 200){
        toast.dismiss(loadingToast)
        toast.success(response.data.message)
        
        setData(response?.data?.data)
      } else {
        toast.dismiss(loadingToast)
        toast.error('Failed to fetch data')
        setData(undefined)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      toast.dismiss(loadingToast)
      toast.error('Failed to fetch data')
    }
    toast.dismiss(loadingToast)
  }
  useEffect(()=> {
    getData()
  },[])
  console.log(data);
  
  return (
    <div className='w-4/5 md:w-3/5 lg:w-3/5 max-w-[450px] bg-slate-300 border-8 rounded-3xl p-4 border-white mx-auto'>
        <div className='w-full flex justify-between'>
            <div className='font-thin'>
                <IoMdArrowRoundBack size={28}/>
            </div>
            <div className='text-xl font-semibold'>Profile Overview</div>
            <div onClick={getData}>
                <GrFormRefresh size={28} />
            </div>
        </div>

        {/* image and deatails  */}
        <div className='w-full flex flex-col items-center m-6'>
          {/* image */}
          <div className='flex relative'>
            <img className='rounded-full' height={28} src={data?.picture?.large} alt="user" />
            <div className='absolute -right-10 top-0 bg-black text-white rounded-3xl min-w-12 min-h-fit max-h-8 p-1 text-center'>{data?.name?.title}</div>
          </div>
          <div className='font-semibold text-2xl'>{data?.name.first}</div>
          <div className='text-md font-medium'>{data?.login?.username}</div>

        </div>

        {/* location and call  */}
        <section className='w-full flex gap-3 sm:gap-0 flex-col sm:flex-row justify-evenly border-t-2 border-b-2 p-4'>
          <a className='flex gap-2' target='_blanck' href={`https://www.google.com/maps/place//@${data?.location?.coordinates?.latitude},${data?.location?.coordinates?.longitude},13z/data=!3m1!4b1?entry=ttu`}>
            <IoLocationOutline className=' bg-black text-white rounded-full p-1' size={28}/>
            <div className='font-medium text-md'>Location</div>
          </a>
          <a className='flex gap-2' href={`tel:${data?.registered?.phone}`}>
            <IoCallOutline className=' bg-black text-white rounded-full p-1' size={28} />
            <div className='font-medium text-md'>Call me</div>
          </a>
        </section>

        {/* Basic detaisl city dob etc  */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="font-normal text-sm">City</p>
            <div className='font-bold text-xl'>{data?.location?.city}</div>
          </div>
          <div className="space-y-1">
            <p className="font-normal text-sm">Nationality</p>
            <div className='font-bold text-xl flex gap-2'>
              <Flag code={data?.nat} alt={data?.nat} style={{ width: 30, height: 30 }} /> 
              {data?.nat}

            </div>
          </div>
          <div className="space-y-1">
            <p className="font-normal text-sm">Date of Birth</p>
            <div className='font-bold text-xl'>{dateFormater(data?.dob?.date)}</div>
          </div>
          <div className="space-y-1">
            <p className="font-normal text-sm">Phone No.</p>
            <div className='font-bold text-xl'>{data?.phone}</div>
          </div>
          <div className="space-y-1">
            <p className="font-normal text-sm">Time Zone</p>
            <div className='font-bold text-xl'>{data?.location?.timezone?.offset} ({data?.location?.country})</div>
          </div>
          <div className="space-y-1">
            <p className="font-normal text-sm">Registered Since</p>
            <div className='font-bold text-xl'>{dateFormater(data?.registered?.date)}</div>
          </div>
        </div>

        {/* Copy right */}
        <section className='flex justify-between mt-12 mb-7 items-end'>
          <div></div>
          <div className='text-white font-semibold'>
            @chai aur code
          </div>
          <a target='_blanck' href='https://chaicode.com/'>
            <img className='rounded-2xl' src={chaiAurCodeImage} alt="" width={100}/>
          </a>
        </section>
    </div>
  )
}

export default RandomUserCard