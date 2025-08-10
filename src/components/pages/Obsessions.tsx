// import Nav from '@/components/Nav'
import {
    DoubleArrowLeftIcon,
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
           
            <main className="flex flex-col">

                <div className="mt-50  flex flex-col-reverse items-center
                    justify-center">
                    <div className="
                   
                    font-p22 
                    
                    tracking-[1rem]
                    text-[2rem]
                    md:text-7xl
                   
                    md:mt-0
                    ">VASily GROssmAn</div>
                        {/* <ShadowInnerIcon className=" self-end block rounded-full m-1 bg-blend-hue bg-blue-500 animate-spin-slow"
                        width={30} height={30} stroke="yellow" strokeWidth={1.} /> */}

                </div>

                <div className="
                mt-15
                mb-15
                flex
                items-center
                justify-center
                ">
                    {/* <ShadowOuterIcon width={20} height={20} stroke="red" strokeWidth={0.5} */}
                        {/* className="block" /> */}
                </div>

                <div className="
                flex
                font-p22 
                tracking-[1rem]
                text-[2rem]
                md:text-7xl
                items-center
                justify-center
                sm:text-center
                ">
                    WARschaueR GHETTO
                </div>

                <div className="
                mt-15
                mb-15
                flex
                items-center
                justify-start
                ">
                    {/* <ShadowIcon
                        className="self-start block rounded-full m-1 bg-blend-hue bg-blue-500 animate-spin-slow"
                        width={20}
                        height={20}
                        stroke="red"
                        strokeWidth={0.5}
                    /> */}
                </div>


            </main>


        </div>
    )
}


export default Obsessions;
