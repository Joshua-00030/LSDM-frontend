//import './NavbarSearchTerm.css'
const NavbarSearchTerm = ({label,setSearchTermValues, searchTermValues}) => {
    const handleInput = (e) => {
        setSearchTermValues(searchTermValues.map(n => n.label !== label ? n : {label:label, value: e.target.value}))
    }
    return(
            <div className='NavbarSearchTerms'>
                <div className="NavbarInput">
                    <span>{label}: </span><input type='text' onChange={(e)=> handleInput(e)} placeholder={label}></input>
                </div>
            </div>
    )

}
export default NavbarSearchTerm