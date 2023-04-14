import './Sidebar.css'
import { useState } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
const Sidebar = ({orgs, setOrg}) => {

    return(
        <div className='Sidebar'>
            {orgs.map(org => <SidebarItem label={org} key={org} setOrg={setOrg}/>)}
        
        </div>
    )

}
export default Sidebar

