// import Nav from '@/components/Nav'
import { 
DoubleArrowLeftIcon, 
ShadowIcon, 
ShadowInnerIcon, 
// EyeOpenIcon,
ShadowOuterIcon 
} from "@radix-ui/react-icons"
import { Link } from 'react-router-dom'


const Obsessions = () => {
    return (
        <div 
        className="
        h-screen 
        overflow-x-hidden 
        bg-stone-200 
        font-mono 
        text-5xl
        dark:bg-stone-500
        dark:text-stone-950
        ">
            <div className="z-50">
                {/* <a href="https://missionlocal.org/" > */}
                <Link to={'/words'} className="z-50">

                    <DoubleArrowLeftIcon
                        className="inline rounded-full m-1 w-[30px] h-[30px] absolute top-10"
                        stroke="gray" strokeWidth={0.1}
                    />
                    <DoubleArrowLeftIcon
                        className="inline rounded-full m-1 w-[30px] h-[30px] absolute top-5 z-50"
                        stroke="gray" strokeWidth={1.1}
                    />
                </Link>


            </div>
            {/* <DoubleArrowLeftIcon
        className="inline rounded-full m-1 w-[30px] h-[30px] absolute top-5"
         stroke="gray" strokeWidth={0.1} 
        /> */}
            {/* <h1 className="
            text-center 
            w-full 
            text-5xl
            md:text-9xl 
            font-anatol 
            rotate-2 
            mt-5
            flex
            gap-5
            items-center
            justify-center
            ">
                <span className="tracking-[5rem]
                text-9xl 
                -rotate-10 
                absolute 
                left-0 
                text-stone-300 
                dark:text-stone-400
                z-0">
                    die
                </span>
                <span className="z-10">
                    Obsessionen
                </span>
            </h1> */}
            <div className="mt-50">
            <h2 className="
                flex
                font-p22 
                tracking-[1rem]
                md:text-7xl
                items-center
                justify-center
                md:mt-0
                ">Vasily Grossman
                <ShadowInnerIcon className="block rounded-full m-1 bg-blend-hue bg-blue-500 animate-spin-slow"
                        width={30} height={30} stroke="yellow" strokeWidth={1.}/>
                </h2>
            </div>
            <h2 className="
                mt-15
                mb-15
                flex
                items-center
                justify-center
                ">
                <ShadowOuterIcon  width={20} height={20} stroke="red" strokeWidth={0.5} /> 
            </h2>
            <h2 className="
                flex
                font-p22 
                tracking-[1rem]
                md:text-7xl
                items-center
                justify-center
                sm:text-center
                ">
                <ShadowIcon className="block rounded-full m-1 bg-blend-hue bg-blue-500 animate-spin-slow"
                        width={20} height={20} stroke="red" strokeWidth={0.5}/>
                    Warschauer Ghetto
                
                </h2>

        </div>
    )
}


export default Obsessions;
