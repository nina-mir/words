import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

// Define custom styles using Tailwind classes
const navItemStyles = "hover:bg-stone-500 hover:text-white px-4 py-2 rounded transition-colors duration-200 font-serif";

const Nav: React.FC = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="font-serif">
                <NavigationMenuItem className="ml-0">
                    <NavigationMenuLink className={navItemStyles}>
                        bio
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="ml-12">
                    <NavigationMenuLink className={navItemStyles}>
                        obsessions
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="ml-12">
                    <NavigationMenuLink className={navItemStyles}>
                        projects
                    </NavigationMenuLink>
                </NavigationMenuItem>
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