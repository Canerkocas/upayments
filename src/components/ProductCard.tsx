
import config  from '../config.json';
import { Link } from 'react-router-dom'
import { IProductType} from '../types'

interface ProductCardPropTypes {
product: IProductType,
removeItem: (id: string) => void

}

export default function ProductCard(props: ProductCardPropTypes) {
    return (
        <div className="flex-col min-h-fit align-center items-center flex justify-center mb-6">
        <Link to={`product/${props.product.id}`}>
 
            <div className="bg-white shadow rounded-2xl  py-2 px-2 ">
              <img
                className=" h-64 w-52 object-contain"
                src={props.product.avatar}
                onError={(e) =>
                  (e.currentTarget.src = config.defaultImageUrl)
                }
              ></img>
            </div>
            <div className="m-2 font-medium h-12 w-52 overflow-hidden">
              {props.product.name}
            </div>
        </Link>
 
            <div className="w-full text-center font-bold ">
              $ {props.product.price}{" "}
              <div className="inline-block ml-2" onClick={(e) => {e.stopPropagation(); props.removeItem(props.product.id)}}>
                <i className="fa fa-trash text-red-700 w-full cursor-pointer"></i>
              </div>
            </div>
          </div>
    )
}


