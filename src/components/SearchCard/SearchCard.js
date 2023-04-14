import './SearchCard.css'

const SearchCard = ({data, handleClick, newData, id}) => {

    return(
        <div className='SearchCard' onClick={()=>handleClick((newData ? newData : 'id'))} id={id}>
            
            <span className='CardTitle'>
            {newData ? 
            newData:
                data
            }
            </span>
        </div>
    )

}
export default SearchCard

