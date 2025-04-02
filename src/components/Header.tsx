
import { ShadowIcon, ShadowInnerIcon, HeartIcon} from "@radix-ui/react-icons"


const Header: React.FC = () => {
    return (
        <header className=" bg-stone-300">
            <div className="
            text-stone-700
            flex 
            flex-col
            leading-[3]
            font-header 
            text-center 
            letter 
            w-full 
            text-5xl
            ">
                <div className="md:tracking-widest">
                    <span className="rotate-2 inline-block">nina</span>
                    <span> ruth mir</span>
                </div>
                <div 
                className="
                tracking-widest
                text-3xl 
                absolute 
                left-0 
                top-20 
                size-fit
                rotate-2
                p-6
                hue-rotate-180
                border-none
                h-1
                text-start
                ">
                public

                <ShadowIcon className="inline bg-yellow-100 rounded-full" width={4} height={4} /> 
                works
                <HeartIcon stroke="yellow" strokeWidth={0.7} width={30} height={30} 
                className="
                inline-block
                animate-wiggle
                "
                />
                </div>

            </div>
        </header>
    )

}

export default Header;

// scale-110 transition-transform duration-300
