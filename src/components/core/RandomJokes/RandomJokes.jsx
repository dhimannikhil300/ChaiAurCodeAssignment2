import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { IoMdArrowRoundBack  } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { GoUpload } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { PiDeviceRotateBold } from "react-icons/pi";
import elon from '../../../assets/elon.png'


const RandomJokes = () => {
    const [data, setData] = useState(undefined)
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

    const getData = async () => {
        const loadingToast = toast.loading('Fetching new Joke Data...')
        try {
          const response = await axios.get("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
          
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
      
  return (
    <div className='text-white bg-black rounded-2xl p-8 w-4/5 lg:w-3/5 max-w-[800px]'>
        <div className='flex gap-6 items-center'>
            <IoMdArrowRoundBack size={28}/>
            <span className='text-xl font-semibold'>
                Post
            </span>
        </div>

        {/* profile and deatils  */}
        <div className='flex justify-between'>
            <div className='flex my-4 gap-2'>
                <img src={elon} alt='image' width={60} />
                <div>
                    <h3 className='font-semibold text-lg'>
                        Elon Musk
                    </h3>
                    <p className='font-light opacity-70'>
                        @elonmusk
                    </p>
                </div>
            </div>
            <div className='pr-6 text-2xl'>
                ...
            </div>
        </div>

        {/* content section  */}
        <div className='mb-4'>
            {data?.content}
        </div>

        {/* date and time views  */}
        <div className='flex gap-1 text-sm'>
            <p className='font-light opacity-70'>
                {getRandomNumber(1, 12)}:{getRandomNumber(1, 59)}:{getRandomNumber(0,1) ? 'am': 'pm'}
            </p>
            <p className='font-light opacity-70'>
                .
            </p>
            <p className='font-light opacity-70'>
                {`${months[getRandomNumber(0,11)].substring(0,3)} ${getRandomNumber(1, 30)}, ${getRandomNumber(2000, 2024)}`}
            </p>
            <p className='font-light opacity-70'>
                .
            </p>
            <p className='font-light opacity-70'>
               <span className='font-bold opacity-100'>{getRandomNumber(1, 34)}.{getRandomNumber(0, 10)}M</span> Views
            </p>
        </div>

        {/* like and save section  */}
        <div className='flex border-t-[1px] border-b-[1px] border-slate-300 justify-around py-2 my-4'>
            <div className='text-[12px] font-extralight opacity-70 flex items-center gap-1'>
                <BiMessageRounded size={16}/>   
                <p>{getRandomNumber(1, 99)}k</p>
            </div>
            <div className='text-[12px] font-extralight opacity-70 flex items-center gap-1'>
                <div className='-rotate-90 font-extralight opacity-70'>
                    <PiDeviceRotateBold size={16} />
                </div>
                <p>{getRandomNumber(1, 99)}k</p>
            </div>
            <div className='text-[12px] font-extralight opacity-70 flex items-center gap-1'>
                <CiHeart size={16} />
                <p>{getRandomNumber(1, 99)}k</p>
            </div>
            <div className='text-[12px] font-extralight opacity-70 flex items-center gap-1'>
                <CiBookmark size={16} />
                <p>{getRandomNumber(1, 99)}k</p>
            </div>
            <GoUpload size={16} />
        </div>
        
        <div className='text-sm font-extralight opacity-70 text-center'>
            @chai aur code
        </div>
    </div>
  )
}

export default RandomJokes