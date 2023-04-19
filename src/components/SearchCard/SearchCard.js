import './SearchCard.css'

const SearchCard = ({data, handleClick, newData, id, label, type}) => {

    return(
        <div className={(`SearchCard${type ? type : ''}`)} onClick={()=>handleClick(data)} id={id}>
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

