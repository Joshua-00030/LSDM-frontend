import './SearchCard.css'

const SearchCard = ({data, handleClick, newData, id, label, type}) => {

    return(
        <div className={(`SearchCard${type ? type : ''}`)} onClick={handleClick ? ()=>handleClick(data) : null} id={id}>
            {label && 
            <>
                <span>{label}</span>
            </>
                }
            
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

