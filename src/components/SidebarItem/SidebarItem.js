import './SidebarItem.css'
const SidebarItem = ({setOrg, label}) => {

    return(
        <div className='SidebarItem' id={label} onClick={()=>setOrg(label)}>
            <span>
                {label}
            </span>
        </div>
    )

}
export default SidebarItem

