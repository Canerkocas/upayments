import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { IProductType, UrlParams } from '../types';
import config from "../config.json"

export default function ProductPagePage() {
    const params: UrlParams = useParams();
    const id = params.id
    const [product, setProduct] = useState<IProductType | null>(null)
    const [loading, setLoading] = useState<Boolean>(true)
    const [loadingText, setLoadingText] = useState<string | null>(null)
    useEffect(() => {
        getProductDetail();
    }, [])

    const getProductDetail = useCallback(async () => {
        axios.get(config.apiUrl + "/case-study/products/" + id).then(({ data }) => {
            if (data) {
                setLoading(false)
                setProduct(data)
            }
        })
            .catch(e => {
                console.log("error occoured", e)
                setLoadingText(e.response.data)
            })


    }, [])
    if (!product || loading) return <div className='flex flex-1 text-5xl align-center text-center justify-center mt-60'>{!loadingText ? "Loading" :
        <div className='flex flex-col'>
            <div>Server Error</div>
            <div className=' text-lg mt-3'>{loadingText}</div>
            <Link to={'/'}><div className=' text-indigo-800 text-lg mt-3'>Go Back To Home</div></Link>
        </div>
    }</div >

    return (
        <div className="flex-1 items-center mt-10 mx-4 mb-5">

            <NavBar />
            <div className="mt-10 mx-auto sm:w-11/12 w-11/12 lg:w-7/12 xl:w-7/12 self-center py-2 ">
                <div className="w-full flex">
                    <div className="bg-white shadow rounded-2xl  py-2 px-2 " >
                        <img className=" h-64 w-52 object-contain" src={product.avatar} onError={(e) => e.currentTarget.src = config.defaultImageUrl}></img>
                    </div>
                    <div className="ml-4 flex flex-col justify-between">
                        <div className="m-2 text-4xl font-bold">{product.name}</div>
                        <div className="m-2 font-medium w-full text-2xl">$ {product.price}</div>
                    </div>
                </div>
                <div className="border-2 mt-6 border-gray-400"></div>
                <div className='mt-10'>
                    <div className='text-2xl font-medium'>Description</div>
                    <div className='text-l font-normal mt-4'>{product.description}</div>
                </div>
            </div>


        </div >)
}