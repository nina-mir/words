import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



interface BoxProps {
    author: string;
    title: string;
    outletName: string;
    date?: string;
    issueVolume?: string;
    genre: string;
    image: string;
    link: string;
}


const Box = (props: BoxProps) => {
    return (
        <Card className="
        w-9/10 
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
                {props.author}, {props.title}, {props.outletName}, {props.date}, {props.genre}, {props.image}
            </CardContent>
            <CardFooter className="bg-stone-500 max-h-max block p-3 rounded-b-xl">
                <p>Card Footer</p>
            </CardFooter>
        </Card>



    )
}

export default Box;