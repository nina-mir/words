import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
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
}


const Box: React.FC<BoxProps> = (props: BoxProps) => {
    return (
        <Card className="
        w-6/10 
        h-30
        bg-stone-300
        drop-shadow-slate-50
        hover:shadow-2xl
        rounded-t-sm 
        mt-5 
        border-0 
        md:w-2/3 
        md:mt-10">
            <CardContent>
                {props.lastName}, {props.firstName}. {props.title}, {props.platform},
                {props.volume ? ` ${props.volume},` : ','}
                {props.date}, {props.genre}
                <p className="text-sm wrap-break-word">{props.url}</p>
            </CardContent>
         
        </Card>
    )
}

export default Box;


//    {/* <CardFooter className="bg-stone-500 max-h-max block p-3 rounded-b-xl">
//                 <p>Card Footer</p>
//             </CardFooter> */}