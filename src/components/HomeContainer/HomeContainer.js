import './HomeContainer.css'
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';
import SearchService from '../../services/Search';

const HomeContainer = () => {
    const [org, setOrg] = useState(null)
    const [orgs, setOrgs] = useState(['Home','nsf','nih','doe','doj'])
    const [data, setData] = useState([])

    useEffect(() => {
        SearchService.search('term').then(res => setData(res))
    },[org])
    return (
        <div className={`homeContainer${(org ? 'Expanded' : '')}`}>

            <Navbar setOrg={setOrg} orgs={orgs} org={org}/>
            <div className='bodyContainer'>
                <Sidebar setOrg={setOrg} orgs={orgs.slice(1)}/>
                <MainContainer setOrg={setOrg} org={org} data={data}/>
            </div>
        </div>
    )

}
export default HomeContainer

