// import { ShadowInnerIcon, HeartIcon } from "@radix-ui/react-icons"
import Nav from '@/components/Nav'

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 relative overflow-hidden dark:bg-stone-700 ">
        <div className="absolute inset-0 bg-[#f7f1f0] mix-blend-soft-light"></div>
            <div className="relative w-full">
                <Nav />
            </div>
            <div className="
            p-4
            text-yellow-300
            dark:text-white
            flex 
            flex-col
            font-header 
            text-center 
            w-full 
            text-4xl
            md:text-5xl
            ">
                <div>
                    nina ruth mir
                </div>
   
            </div>
        </header>
    )
}

export default Header;
