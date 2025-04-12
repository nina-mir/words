// import Nav from '@/components/Nav'
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons"
import { Link } from 'react-router-dom'


const Obsessions = () => {
    return (
        <div className=" h-screen overflow-x-hidden bg-stone-200 font-mono text-5xl">
            <div className="z-50">
                {/* <a href="https://missionlocal.org/" > */}
                <Link to={'/words/bio'} className="z-50">

                    <DoubleArrowLeftIcon
                        className="inline rounded-full m-1 w-[30px] h-[30px] absolute top-10"
                        stroke="gray" strokeWidth={0.1}
                    />
                    <DoubleArrowLeftIcon
                        className="inline rounded-full m-1 w-[30px] h-[30px] absolute top-5 z-50"
                        stroke="gray" strokeWidth={0.1}
                    />
                </Link>


            </div>
            {/* <DoubleArrowLeftIcon
        className="inline rounded-full m-1 w-[30px] h-[30px] absolute top-5"
         stroke="gray" strokeWidth={0.1} 
        /> */}
            <h1 className="
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
                <span className='tracking-[5rem] text-9xl -rotate-10 absolute left-0 text-stone-300 z-0'>
                    die
                </span>
                <span className="z-10">
                    Obsessionen
                </span>
            </h1>

        </div>
    )
}


export default Obsessions;
