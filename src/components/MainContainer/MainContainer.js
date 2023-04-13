import './MainContainer.css'
import SearchCard from '../SearchCard/SearchCard';
import { useEffect, useState } from 'react';
const MainContainer = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [sortType, setSortType] = useState("0")
    const [data, setData] = useState([
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com',
        'rfiejrfjioifrwaedwrfijokredwfuij.com'
    ])

    return(
        <div className='MainContainer'>
            <div className='CardContainer'>
                {data.map( url => <SearchCard data={url}/>)}
            </div>
        </div>
    )

}
export default MainContainer

