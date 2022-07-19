import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="flex flex-1 mb-10 shadow-lg items-center container mx-auto px-4 py-4 text-xl font-sans italic font-medium bg-white rounded-md  justify-between">
            <Link to={'/'}><div>UPayments Store</div></Link>
            <div>Register</div>
        </div>
    )
}