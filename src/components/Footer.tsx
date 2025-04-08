import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"


const Footer: React.FC = () => {
    return (
        <footer className="border-grid border-t mt-1 py-4 md:py-0 font-header bg-stone-400 ">
            <div className="container-wrapper">
                <div className="container py-2">
                    <div className="flex flex-col text-balance text-center text-md leading-loose text-muted-foreground md:text-center">
                        <span className="text-black">👷🏽‍♀️🔨🪛🔩⛏️ by Nina Ruth Mir 
                        | <a href="https://twitter.com/transbelly_nina"><TwitterLogoIcon className="w-4 h-auto inline-block"/></a> | &copy; 2025</span>
                        <a href="https://github.com/nina-mir/words" className="text-stone-700">
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