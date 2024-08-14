import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import chaiAurCodeImage from '../../../assets/Screenshot 2024-08-14 010320.png'
import _ from 'lodash';

const CatListingComponent = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const listRef = useRef(null);
    const [isNextPage, setIsNextPage] = useState(true);

    const loadMoreItems = async () => {
        const toastId = toast.loading('cat data fetcing...');
        try {
            console.log(page);
            
            const res = await axios.get(`https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=4`)
            const response = res?.data?.data
            setIsNextPage(response?.nextPage)
            setItems(prevItems => [...prevItems, ...response?.data]);
            setPage( page + 1);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            toast.dismiss(toastId);
        }
    };
    
    useEffect(() => {
        if (isNextPage) {
            loadMoreItems();
        }
    }, []);

    const handleScroll = _.throttle(() => {
        if (listRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
            if (scrollLeft + clientWidth >= scrollWidth - 50 && isNextPage) {
                loadMoreItems();
            }
        }
    }, 200);
  return (
        <div className="flex flex-col w-full space-x-4 px-1 sm:px-2 md:px-4 lg:px-8 py-2 gap-4 mt-8">
            <div className='flex justify-between items-end'>
                <h2 className='text-4xl font-bold text-white'>Cats around us</h2>
                <div className=''>
                    <a target='_blanck' href='https://chaicode.com/'>
                        <img className='rounded-2xl' src={chaiAurCodeImage} alt='chaiAurCode' width={100} />
                    </a>
                </div>
            </div>
            <div
                className='flex gap-8 relative min-h-[600px] overflow-x-auto p-8'
                ref={listRef}
                onScroll={handleScroll}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[340px] h-[570px] shadow-md bg-white rounded-3xl"
                    >
                        <div>
                            <img className='rounded-t-3xl w-[340px] h-[260px] object-cover' src={item?.image} alt={item?.id} />
                        </div>
                        <div className='flex flex-col justify-between relative px-4 py-2 w-full h-[310px]'>
                            <div className=''>
                                <div className='text-xl font-semibold'>
                                    {item?.name}
                                </div>
                                <div className='text-sm font-normal py-2 text-justify'>
                                    {item?.description.substring(0, 180)}
                                    {item?.description.length > 180 ? "..." : ""}
                                </div>
                                <div className='grid grid-cols-2 w-2/3 text-base'>
                                    <span className='font-medium'>
                                        Origin
                                    </span>
                                    <span>
                                        {item?.origin}
                                    </span>
                                </div>
                                <div className='flex flex-col text-base py-1'>
                                    <span className='font-medium'>
                                        Temperament
                                    </span>
                                    <span className='font-light cursor-pointer flex gap-1 flex-wrap'>
                                        {
                                            item?.temperament.split(',').map((temp, idx) => (
                                                <div key={idx} className='hover:bg-pink-500 rounded-2xl h-6 p-1 text-center hover:text-white flex justify-center items-center'>
                                                    {temp}
                                                </div>
                                            ))
                                        }
                                    </span>
                                </div>
                                <div className='grid grid-cols-2 w-2/3 text-base py-1'>
                                    <span className='font-medium'>
                                        Life Span
                                    </span>
                                    <span className='font-normal'>
                                        {item?.life_span} years
                                    </span>
                                </div>
                            </div>
                            <div className='absolute bottom-0 left-4'>
                                <div className='py-4 text-sm text-blue-400 font-light'>
                                    <a href={item?.wikipedia_url} target='_blank' rel="noopener noreferrer">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CatListingComponent