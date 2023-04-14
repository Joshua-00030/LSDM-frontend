import './HomeContainer.css'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';

const HomeContainer = () => {
    const [org, setOrg] = useState(null)
    const [orgs, setOrgs] = useState(['Home','nsf','nih','doe','doj'])

    return (
        <div className={`homeContainer${(org ? 'Expanded' : '')}`}>

            <Navbar setOrg={setOrg} orgs={orgs} org={org}/>
            <div className='bodyContainer'>
                <Sidebar setOrg={setOrg} orgs={orgs.slice(1)}/>
                <MainContainer setOrg={setOrg} org={org}/>
            </div>
        </div>
    )

}
export default HomeContainer

