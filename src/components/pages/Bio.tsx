import { DoubleArrowLeftIcon } from "@radix-ui/react-icons"

import { Link } from 'react-router-dom'


const Bio = () => {
    return (
        <div
            className="
        h-screen 
        overflow-x-hidden 
        bg-stone-200 
        font-mono 
        dark:bg-stone-500
        dark:text-stone-950
        ">


            <div className="z-50">
                <Link to={'/words'} className="z-50">
                    <DoubleArrowLeftIcon
                        className="inline rounded-full m-1 
                        w-[15px] 
                        h-[15px]
                        md:w-[30px] 
                        md:h-[30px] 
                        absolute 
                        top-5"
                        stroke="gray" strokeWidth={0.1}
                    />

                    <DoubleArrowLeftIcon
                        className="inline 
                        rounded-full 
                        m-1 
                        w-[15px] 
                        h-[15px]
                        md:w-[30px] 
                        md:h-[30px] 
                        absolute top-10 z-50"
                        stroke="gray" strokeWidth={1.1}
                    />

                </Link>
            </div>

            <div className="flex 
            flex-col 
            items-center 
            justify-center sm:text-sm md:text-5xl
            ">
                <p className="text-amber-950 text-sm 
                md:m-4 text-right md:w-[50%] w-[70%] dark:text-amber-500
                self-end md:self-center md:text-justify md:mr-0 mr-0.5
                ">
                    This poem got rejected by many journals but if you want to publish it for your
                    issue of roundabout literary circus sponsored by your local Carhartt shop, please feel free to reach out.
                </p>
                {
                /* this is art! <p className="
                w-[95%] 
                text-[1rem]/[1.5rem] 
                md:w-[80%] 
                md:text-[3rem]
                font-new-rubrik 
                text-wrap
                mb-10
                dark:text-stone-300
                "> */}

                <p className="
                w-[95%] 
                text-[1rem]/[1.5rem] 
                md:w-[90%] 
                md:text-[1.2rem]/[2.1rem]
                font-new-rubrik 
                text-wrap
                mb-10
                dark:text-stone-300
                ">
                    writer, constantly annoyed by germany, learning german,
                    very into virtue signaling, can cry on demand and cry often
                    to practice my crying noises, very cutesy, love receiving compliments about
                    my titties, if you recently complimented my tits on the first floor of the
                    library/i want you to know I will never fuck you, obtusely not demure, into
                    vegan food, will eat meat if means I’ll get fingered in a public place of my
                    choosing, was called an elitist by a writer friend who just had a book
                    published so I stopped talking to her, hate most people and no animals,
                    love nature and I’ll take the cabin please, into most people on the internet,
                    fave hobby is pretending to be the occult imam of shi’ite on Instagram, in fact I
                    am the occult imam, been occult for centuries, eschatological since birth,
                    currently struggling with friends problems, early summer ended an 8 year
                    friendship for lunch, choked a budding one for dessert, her name is still on
                    my thigh, it is not her name anymore, it is my tattoo/my wall/my water, sunday
                    wrote a long ass text for this other hot friend, had to clarify 1000 times that
                    I was not accusing her of anything/noted 500 times that I needed to be treated
                    with care or i will experience another tsunami of wet and ache on the 5h floor
                    of san francisco public library main branch on some random sabbath as if i was
                    mourning my father’s death in that cool coffee shop at the corner of late and
                    high, i am not even jewish, i am the occult imam, i am powerful, no STIs for
                    the occult, i rule animals, i speak bird, i sing donkeys, i advise dogs, i
                    don’t need friends/only worshippers, I need care being worshiped, i am a
                    menopausal occult imam, fortunately no microplastics to blame, unfortunately
                    centuries in occult does that to any imam be they cis men of hairy bellies or
                    trans women of! a bit of care, a bit of intentional babble please, what i mean
                    is you guessed it correctly, i am in fact looking for anyone who wants to
                    casually eat my ass in a hotel room with a top-down view of Union Sqaure,
                    if that’s you, please DM and i’d need a full test panel result dated
                    yesterday.


                </p>

                <div className="z-50 absolute right-2 bottom-1">
                    <Link to={'/words'} className="z-50">
                        <DoubleArrowLeftIcon
                            className="block 
                            rounded-full 
                            m-1 
                            w-[15px] 
                            h-[15px]
                            md:w-[30px] 
                            md:h-[30px] 
                            "
                            stroke="gray" strokeWidth={0.1}
                        />

                        <DoubleArrowLeftIcon
                            className="block 
                            rounded-full 
                            m-1 
                            w-[15px] 
                            h-[15px]
                            md:w-[30px] 
                            md:h-[30px]
                            "
                            stroke="gray" strokeWidth={1.1}
                        />

                    </Link>
                </div>


            </div>





        </div>
    )
}


// export default Obsessions;


export default Bio;