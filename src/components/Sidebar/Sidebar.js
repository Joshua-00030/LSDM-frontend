import './Sidebar.css'
import { useState } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
const Sidebar = () => {
    const [orgs, setOrgs] = useState(['nsf','nih','doe','doj'])

    return(
        <div className='Sidebar'>
            {orgs.map(org => <SidebarItem label={org}/>)}
        
        </div>
    )

}
export default Sidebar

