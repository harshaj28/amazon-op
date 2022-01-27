import Image from "next/image";
import {LocationMarkerIcon,
MenuIcon,
SearchIcon,
ShoppingCartIcon
} from "@heroicons/react/outline"
import {signIn,signOut,useSession} from "next-auth/react"
import {useRouter} from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const { data: session, status } = useSession()
    const router = useRouter();
    const items=useSelector(selectItems);
    return(
        <header>
            <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick={()=> router.push('/')}
                    src="https://links.papareact.com/f90"
                    width={140}
                    height={35}
                    objectFit="contain"
                    className="cursor-pointer"
                    />
                </div>
                <div className="text-white hidden  md:flex">
                    <div className="cursor-pointer hover:underline">
                    <p className="text-gray-300 ml-6 text-xs">{session?`Deliver to ${session.user.name}`:`Deliver to User`}</p>
                    <div className="flex">
                    <LocationMarkerIcon className="h-5 w-6"></LocationMarkerIcon>
                    <p className="text-sm font-bold">Balaghat 481001</p>
                    </div>
                    </div>
                </div>
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer ml-3 bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4"a/>
                </div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn:signOut} className="cursor-pointer hover:underline" >
                        <p>
                        {session?`Hello, ${session.user.name}`:`Hello,Sign In`}    
                        </p>
                        <p className="font-bold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="cursor-pointer hover:underline">
                        <p>Returns</p>
                        <p className="font-bold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={()=> router.push('/checkout')} className="relative cursor-pointer hover:underline flex items-center">
                        <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon  className="h-10"/>
                        <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center p-1 space-x-5 pl-6 bg-amazon_blue-light text-white">
                <p className="cursor-pointer hover:underline text-sm font-bold flex items-center">
                    <MenuIcon className="h-6 mr-1 "/>
                    All
                </p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline">Fresh</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline">Books</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline">Prime</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline hidden lg:inline-flex">Mobiles</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline hidden lg:inline-flex">Buy Again</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline hidden lg:inline-flex">Gift Ideas</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline hidden lg:inline-flex">AmazonBasics</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline hidden lg:inline-flex">Gift Cards</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline hidden lg:inline-flex">Baby</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline hidden lg:inline-flex">Grocery & Gourmet Foods</p>
                <p className=" text-sm  font-sans cursor-pointer hover:underline hidden lg:inline-flex"></p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex"><Image
                src="/banner.png"
                height={35}
                width={400}
                />
                </p>
                
            </div>
        </header>
    )
}
export default Header;