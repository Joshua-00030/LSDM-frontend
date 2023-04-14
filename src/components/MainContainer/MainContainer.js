import './MainContainer.css'
import SearchCard from '../SearchCard/SearchCard';
import { useEffect, useState } from 'react';
import SearchService from '../../services/Search';
const MainContainer = ({ setOrg, org }) => {
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
    const [newData, setNewData] = useState([])

    const handleClick = async (term) => {
        setNewData(await SearchService.search(term))
    }
    return (
        <div className='CardContainer'>
            {(newData.length < 1 ?
                data.map((url, i) => <SearchCard data={url} handleClick={handleClick} key={i} id={i}/>) 
                : data.map((url, i) => <SearchCard data={url} newData={newData[i]} handleClick={handleClick} key={i} id={i}/>) 
                    )}
        </div>
    )

}
export default MainContainer

