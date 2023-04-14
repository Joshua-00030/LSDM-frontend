import './Navbar.css'
import { useState, useEffect } from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import NavbarSearchTerm from '../NavbarSearchTerm/NavbarSearchTerm';
const Navbar = ({setOrg, orgs, org}) => {
    const [searchTerms, setSearchTerms] = useState([])
    const [searchTermValues, setSearchTermValues] = useState([])
    useEffect(() => {
        setSearchTermValues(
            searchTerms ?
            searchTerms.map(term => {
            return {label: term, value: ''}
        })
        :null)
    },[searchTerms])
    return(
        <div className={`NavSearch${(org ? 'Expanded': 'Collapsed')}`}>

            <div className='Navbar'>
                {orgs.map(o => <NavbarItem label={o} key={o} org={org} setOrg={setOrg} setSearchTerms={setSearchTerms}/>)}
            </div>
            {searchTerms&&
            <div className='NavbarSearchTerms'>
                {searchTerms.map(term => <NavbarSearchTerm label={term} setSearchTermValues={setSearchTermValues} searchTermValues={searchTermValues} key={term}/>)}
                {searchTerms && <button>Search</button>}
            </div>
            }
        </div>
    )

}
export default Navbar

