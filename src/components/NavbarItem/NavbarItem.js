import './NavbarItem.css'
import SearchService from '../../services/Search'
const NavbarItem = ({label, setOrg, setSearchTerms}) => {

    const handleClick = async () =>{
        setOrg((label === 'Home' ? null : label))
        setSearchTerms((label === 'Home' ? null :await SearchService.getColumns(label)))
    }

    return(
        <div className='NavbarItem' key={label} onClick={handleClick}>
            <span>
                {label}
            </span>
        
        </div>
    )

}
export default NavbarItem

