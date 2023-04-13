import './Navbar.css'
import { useState } from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
const Navbar = () => {
    const [orgs, setOrgs] = useState(['Home','nsf','nih','doe','doj'])

    return(
        <div className='Navbar'>
            {orgs.map(org => <NavbarItem label={org}/>)}
        </div>
    )

}
export default Navbar

