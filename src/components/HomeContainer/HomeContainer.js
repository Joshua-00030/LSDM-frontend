import './HomeContainer.css'
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';
import SearchService from '../../services/Search';

const HomeContainer = () => {
    const [org, setOrg] = useState(null)
    const [orgs, setOrgs] = useState(['Home', 'Search'])
    const [data, setData] = useState([])

    useEffect(() => {
        SearchService.search('term').then(res => setData(res))
    },[org])
    
    const handleNavbarSearch = (searchTermValues) => {
        SearchService.generalSearch(searchTermValues).then(res => setData(res))
    }
    
    return (
        <div className={`homeContainer${(org ? 'Expanded' : '')}`}>

            <Navbar setOrg={setOrg} orgs={orgs} org={org} handleNavbarSearch={handleNavbarSearch}/>
            <div className='bodyContainer'>
                <div className='side'></div>
                <MainContainer setOrg={setOrg} org={org} data={data}/>
                <div className='side'></div>
            </div>
        </div>
    )

}
export default HomeContainer

