import './MainContainer.css'
import SearchCard from '../SearchCard/SearchCard';
import { useEffect, useState } from 'react';
import SearchService from '../../services/Search';

const MainContainer = ({ setOrg, org, data }) => {
    const [newData, setNewData] = useState([])
    const [relatedProjects, setRelatedProjects] = useState([])
    const cardArray = [<SearchCard data={'Back'} type={' Back'} handleClick={() => {setNewData([])
                                                                                    setRelatedProjects([])}} />]
    const cardArray2 = []
    const relatedProjectsArray = []

    const handleClick = async (data) => {
        setNewData(data)
        setRelatedProjects( await SearchService.getRelatedProjects({topic_id: data.topic_id}))
    }

    useEffect(() => {

        if (document.getElementById("project_title") !== null) {
            const parentDiv = document.getElementById("project_title")
            const childDiv = parentDiv.querySelector(".CardTitle")
            const searchField = document.querySelector('#gsc-i-id1')
            if (document.getElementById("organization") !== null) {
                const parentDiv2 = document.getElementById("organization")
                const childDiv2 = parentDiv2.querySelector(".CardTitle")
                const words = childDiv.textContent.split(' ')
                if (searchField) {
                    searchField.value = '"' + words.slice(0,4).join(' ') + '" ' + words.slice(4).join(' ') + ' ' + childDiv2.textContent
                    const searchButton = document.querySelector('.gsc-search-button-v2')
                    searchButton.click()
                }
            }else{
                if (searchField) {
                    searchField.value = '"' + childDiv.textContent + '"' 
                    const searchButton = document.querySelector('.gsc-search-button-v2')
                    searchButton.click()
                }
            }
        }
    });

    return (
        <div className={(`CardContainer${newData.length < 1 ? ' default' : ''}`)}>
            {(newData.length < 1 ?
                data.map((result, i) => <SearchCard data={result} newData={result.project_title} setNewData={setNewData} handleClick={handleClick} key={i} id={i} type={' defaultCard'} />)
                : Object.keys(newData).forEach(function (key, i) {
                    if (newData[key] !== null && key !== 'title') {
                        if (key === 'number' && 'nih_reference' in newData) {

                        } else if (key === 'project_title') {
                            cardArray.splice(1, 0, <SearchCard data={key} newData={newData[key]} handleClick={null} label={key} key={i} id={'project_title'} />)
                        } else if (key === 'organization') {
                            cardArray.splice(1, 0, <SearchCard data={key} newData={newData[key]} handleClick={null} label={key} key={i} id={'organization'} />)
                        } else if (key === 'abstract') {
                            cardArray2.push(<SearchCard data={key} newData={newData[key]} handleClick={null} label={key} key={i} id={i} type={' Abstract'} />)
                        } else {
                            cardArray.push(<SearchCard data={key} newData={newData[key]} handleClick={null} label={key} key={i} id={i} />)
                        }
                    }
                })
            )}
            {cardArray.length > 1 ? <>{cardArray} {cardArray2[0]}</> : <></>}
            {relatedProjects.length > 1 ? 
            <>
            <h3 className='relatedProjectsHeader'>Related Projects</h3>
            {relatedProjects.map((result, i) => <SearchCard data={result} newData={result.project_title} setNewData={setNewData} handleClick={handleClick} key={i} id={i} type={' relatedProject'} />)}
            </>
        :<></>}
            <div className='google_container' style={{ display: (cardArray.length !== 1 ? 'block' : 'none') }}>
                <script async src="https://cse.google.com/cse.js?cx=d68939519b1834f27">
                </script>

                <div class="gcse-searchresults-only"></div>
            </div>
        </div>
    )

}
export default MainContainer

