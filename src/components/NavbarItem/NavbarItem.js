import './NavbarItem.css'
import SearchService from '../../services/Search'
const NavbarItem = ({ label, setOrg, org, setSearchTerms }) => {

    const handleClick = async () => {
        setOrg((label === 'Home' ? null : label))
        setSearchTerms((label === 'Home' ? null : await SearchService.getColumns('nih')))
    }

    return (
        label !== org ?
            <div className='NavbarItem' key={label} onClick={handleClick}>
                <span>
                    {label}
                </span>

            </div>
            :
            <div className='NavbarItemSelected' key={label} onClick={handleClick}>
                <div className='NavbarItemSelectedInner'>
                    <span>
                        {label}
                    </span>
                </div>

            </div>

    )

}
export default NavbarItem

