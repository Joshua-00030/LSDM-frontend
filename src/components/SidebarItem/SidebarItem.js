import './SidebarItem.css'
const SidebarItem = ({label}) => {

    return(
        <div className='SidebarItem'>
            <span>
                {label}
            </span>
        </div>
    )

}
export default SidebarItem

