import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    // NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Link } from 'react-router-dom'
// Define custom styles using Tailwind classes
const navItemStyles = 
"font-anatol hover:bg-stone-500 text-pink-800 hover:text-white dark:text-stone-300 md:text-xl ml-1 px-4 py-2 rounded transition-colors duration-200";

const Nav: React.FC = () => {
    return (
            <NavigationMenu>
                <NavigationMenuList className='text-2xl'>
                    <NavigationMenuItem className="ml-0">
                        {/* <NavigationMenuLink className={navItemStyles}> */}
                            <Link to={'/words/bio'}  className={navItemStyles}>who</Link>
                        {/* </NavigationMenuLink> */}
                    </NavigationMenuItem>
                    <NavigationMenuItem className="ml-12">
                        {/* <NavigationMenuLink className={navItemStyles}> */}
                            <Link to={'/words/obsessions'} className={navItemStyles}>obsessions</Link>
                        {/* </NavigationMenuLink> */}
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem className="ml-12">
                        <NavigationMenuLink className={navItemStyles}>
                            projects
                        </NavigationMenuLink>
                    </NavigationMenuItem> */}
                </NavigationMenuList>

            </NavigationMenu>
    )
}

export default Nav;


// import {
//     NavigationMenu,
//     // NavigationMenuContent,
//     // NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     // NavigationMenuTrigger,
//     // NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"


// const Nav: React.FC = () => {
//     return (
//         <NavigationMenu>
//             <NavigationMenuList >
//                 <NavigationMenuItem className="ml-0">
//                     {/* <NavigationMenuTrigger>Item One</NavigationMenuTrigger> */}
//                     {/* <NavigationMenuContent> */}
//                     <NavigationMenuLink>bio</NavigationMenuLink>
//                     {/* </NavigationMenuContent> */}
//                 </NavigationMenuItem>
//                 <NavigationMenuItem className="ml-12" >
//                     <NavigationMenuLink >obsessions</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem className="ml-12">
//                     <NavigationMenuLink>projects</NavigationMenuLink>
//                 </NavigationMenuItem>
//             </NavigationMenuList>
//         </NavigationMenu>
//     )
// }

// export default Nav;