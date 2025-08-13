import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"


const Footer: React.FC = () => {
    return (
        <footer className="
        border-grid 
        border-t
         mt-1 
         py-4 
         md:py-0 
         font-header 
         bg-stone-400 
         dark:bg-stone-800
        ">
            <div className="container-wrapper">
                <div className="container py-2">
                    <div className="flex flex-col text-balance text-center text-md leading-loose 
                             text-muted-foreground md:text-center">
                        <span className="text-black dark:text-pink-100">
                            <span className="text-lg bg-stone-500 rounded-l-full">
                                👷🏽‍♀️✂️💄
                            </span> by 
                            <span className="text-yellow-200">
                                    Nina Ruth Mir 
                                </span> 
                        | <a href="https://twitter.com/transbelly_nina"><TwitterLogoIcon className="w-4 h-auto inline-block"/></a> | &copy; 2025</span>
                        <a href="https://github.com/nina-mir/words" 
                        className="text-stone-700 dark:text-stone-300 ">
                            Source code available on GitHub.
                            <GitHubLogoIcon className="w-6 h-auto inline-block"/>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;