// import { ShadowInnerIcon, HeartIcon } from "@radix-ui/react-icons"
import Nav from '@/components/Nav'

const Header: React.FC = () => {
    return (
        <header className="bg-stone-300 relative overflow-hidden dark:bg-stone-700 ">
            <div className="relative w-full">
                <Nav />
            </div>
            <div className="
            p-4
            text-stone-900
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
                    <span className="rotate-2 inline-block">nina</span>
                    <span> ruth mir</span>
                </div>
                {/* <div
                    className="
                tracking-widest
                text-2xl
                md:text-3xl 
                relative
                md:absolute 
                md:left-4
                md:top-20 
                p-4
                md:p-6
                -rotate-1
                hue-rotate-180
                text-start
                "> */}
                    {/* public */}

                    {/* <ShadowInnerIcon className="inline rounded-full m-1 animate-spin-slow"
                        width={20} height={20} stroke="yellow" strokeWidth={0.7} />
                    works */}
                    {/* <HeartIcon stroke="yellow" strokeWidth={0.7} width={30} height={30}
                        className="
                inline-block
                animate-wiggle
                "
                    /> */}
                {/* </div> */}
            </div>
        </header>
    )
}

export default Header;



// import { ShadowIcon, ShadowInnerIcon, HeartIcon } from "@radix-ui/react-icons"
// import Nav from '@/components/Nav'


// const Header: React.FC = () => {
//     return (
//         <header className=" bg-stone-300">
//             <div className="absolute w-full">
//                 <Nav />
//             </div>
//             <div className="
//             text-stone-700
//             flex 
//             flex-col
//             leading-[3]
//             font-header 
//             text-center 
//             letter 
//             w-full 
//             text-5xl
//             ">
//                 <div className="md:tracking-widest">
//                     <span className="rotate-2 inline-block">nina</span>
//                     <span> ruth mir</span>
//                 </div>
//                 <div
//                     className="
//                 tracking-widest
//                 text-3xl 
//                 absolute 
//                 left-0 
//                 top-20 
//                 size-fit
//                 -rotate-1
//                 p-6
//                 hue-rotate-180
//                 border-none
//                 h-1
//                 text-start
//                 ">
//                     public

//                     <ShadowInnerIcon className="inline rounded-full m-1 animate-spin-slow"
//                         width={20} height={20} stroke="yellow" strokeWidth={0.7} />
//                     works
//                     <HeartIcon stroke="yellow" strokeWidth={0.7} width={30} height={30}
//                         className="
//                 inline-block
//                 animate-wiggle
//                 "
//                     />
//                 </div>

//             </div>
//         </header>
//     )

// }

// export default Header;

// scale-110 transition-transform duration-300
