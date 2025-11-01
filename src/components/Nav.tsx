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
"font-header hover:bg-pink-500 text-pink-1000 hover:text-white dark:text-stone-300 md:text-xl ml-1 px-4 py-2 rounded transition-colors duration-200";

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