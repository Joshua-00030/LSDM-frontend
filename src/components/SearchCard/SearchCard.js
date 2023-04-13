import './SearchCard.css'
const SearchCard = ({data}) => {

    return(
        <div className='SearchCard'>
            <span className='CardTitle'>
                {data}
            </span>
        </div>
    )

}
export default SearchCard

