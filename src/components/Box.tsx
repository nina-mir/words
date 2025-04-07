import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface BoxProps {
    firstName: string,
    lastName: string,
    title: string,
    year: string,
    platform: string,
    date: string,
    genre: string,
    url: string,
    volume?: string,
    artWorkURL: string
}


const Box: React.FC<BoxProps> = (props: BoxProps) => {

    const artworlUrl = `${props.artWorkURL}`
    const boxId = props.platform.length % 4
    const rotationCSS = `rotate-${boxId}`
    // console.log(rotationCSS)

    return (
        <Card className="
            w-8/10  
            max-w-full 
            bg-red-200
            drop-shadow-slate-50
            rounded-t-md 
            border-0
            mb-2 
            md:w-2/5 
            md:mt-10
            overflow-hidden
            hover:shadow-amber-950
            ">
                        <a href={`${props.url}`} className="block">

            <CardContent className="flex flex-col gap-0 w-full pt-3"> {/* Added padding */}
                <div className="text-xl flex flex-col">
                    {props.lastName}, {props.firstName}. "{props.title}.", {props.platform},
                    {props.volume ? ` ${props.volume}, ` : ' '}
                    {props.date}
                    <p className="text-sm break-words">{props.url}</p> {/* Changed to break-words */}
                    <p className={`
            font-header 
            bg-amber-300
            w-fit
            rounded-4xl
            px-1.5
            ${rotationCSS}
            `}>
                        [{props.genre}]
                    </p>
                </div>
                <div className="w-full overflow-hidden"> {/* Container for image */}
                    <img src={artworlUrl}
                        className="
                w-full  
                max-w-full
                h-auto
                bg-no-repeat
                bg-center
                mb-10
                p-1"
                        alt={props.title}
                    />
                </div>
            </CardContent>
            </a>

            
        </Card>
    )
}

export default Box;


//    {/* <CardFooter className="bg-stone-500 max-h-max block p-3 rounded-b-xl">
//                 <p>Card Footer</p>
//             </CardFooter> */}


// bg-[url('https://raw.githubusercontent.com/nina-mir/words/refs/heads/main/resources/null%20(11).png')]
