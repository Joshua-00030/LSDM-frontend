import './MainContainer.css'
import SearchCard from '../SearchCard/SearchCard';
import { useEffect, useState } from 'react';
import SearchService from '../../services/Search';

const MainContainer = ({ setOrg, org, data }) => {
    const [newData, setNewData] = useState([])
    const cardArray = [<SearchCard data={'Back'} type={' Back'} handleClick={() => setNewData([])} />]

    const handleClick = async (term) => {
        setNewData(await SearchService.getProject(term))
    }
    return (
        <div className={(`CardContainer${newData.length < 1 ? ' default' : ''}`)}>
            {(newData.length < 1 ?
                data.map((result, i) => <SearchCard data={result} newData={result.project_title} setNewData={setNewData} handleClick={setNewData} key={i} id={i} type={' defaultCard'} />)
                : Object.keys(newData).forEach(function (key, i) {
                    if (newData[key] !== null && key !== 'title') {
                        if (key === 'number' && 'nih_reference' in newData) {

                        } else if (key === 'project_title') {
                            cardArray.splice(1, 0, <SearchCard data={key} newData={newData[key]} handleClick={null} label={key} key={i} id={i} />)
                        } else if (key === 'abstract') {
                            cardArray.push(<SearchCard data={key} newData={newData[key]} handleClick={null} label={key} key={i} id={i} type={' Abstract'} />)
                        } else {
                            cardArray.push(<SearchCard data={key} newData={newData[key]} handleClick={null} label={key} key={i} id={i} />)
                        }
                    }
                })
            )}
            {cardArray.length > 1 ? cardArray : <></>}
            <div className='google_container' style={{ display: (cardArray.length !== 1 ? 'block' : 'none') }}>
            <script async src="https://cse.google.com/cse.js?cx=d68939519b1834f27">
            </script>

                <div className="gcse-search" />
            </div>
        </div>
    )

}
export default MainContainer

