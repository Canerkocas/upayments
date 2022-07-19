import { useCallback, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { ICategoryType, ICreateProductType } from '../types';
import config from '../config.json';
import axios from 'axios';
export default function CreateProductPage() {

    const [formState, setFormState] = useState<ICreateProductType>({
        name: "",
        price: 0,
        category: "",
        description: "",
        avatar: "",
        developerEmail: "canerkocas06@gmail.com",
    })

    const [categories, setCategories] = useState<ICategoryType[]>([]);

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = useCallback(async () => {
        axios.get(config.apiUrl + "/case-study/categories").then(({ data }) => {
            if (data) {
                setCategories(data)
            }
        })

    }, [])

    const createProductRequest = async (e: any) => {
        e.preventDefault()
        axios.post(config.apiUrl + "/case-study/products", { ...formState }).then(({ data }) => {
            window.location.href = '/';
        }).catch(e => console.log(e.response))

    }

    return (
        <div className="flex-1 items-center mt-10 mx-4 mb-5">

            <NavBar />
            <div className="mt-20 mx-auto sm:w-11/12 w-11/12 lg:w-5/12 xl:w-5/12 self-center py-2 justify-center items-center  ">
                <div className='text-3xl font-semibold text-center'>Create Product</div>
                <form onSubmit={(e) => createProductRequest(e)}>
                    <input className=" mt-12 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Product Name" onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))} value={formState.name} required />
                    <textarea className=" mt-5 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows={5} placeholder="Description" onChange={e => setFormState(prev => ({ ...prev, description: e.target.value }))} value={formState.description} required />
                    <input className=" mt-5 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="ImageUrl" onChange={e => setFormState(prev => ({ ...prev, avatar: e.target.value }))} value={formState.avatar} required />

                    <select className="mt-5  w-full shadow border rounded py-3 px-4 text-gray-700 " aria-label="Default select example" onChange={e => setFormState(prev => ({ ...prev, category: e.target.value }))} value={formState.category} required>
                        {categories.map(category => <option>{category.name}</option>)}
                    </select>

                    <input className=" mt-5 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" step="0.01" placeholder="Price" onChange={e => setFormState(prev => ({ ...prev, price: Number(e.target.value) }))} required />

                    <button className=" font-medium text-lg mt-5 mr-2 w-full shadow appearance-none border rounded py-3 px-4 w-f text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline">
                        SUBMIT
                    </button>
                </form>

            </div>


        </div >)
}