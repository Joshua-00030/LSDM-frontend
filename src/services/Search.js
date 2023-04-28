import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const search = async props => {
  console.log(props)
  const response = await axios.post(baseUrl+'/testdata/nih', props)
  return response.data
}

const getProject = async props => {
  const response = await axios.post(baseUrl+'/testdata/getProject', {title: props})
  return response.data
}

const generalSearch = async props => {
  console.log(props)
  const response = await axios.post(baseUrl+'/testdata/general', props)
  return response.data
}

const getColumns = async props => {
  const response = await axios.get(baseUrl+'/testdata/' + props)
  return response.data
}

const getRelatedProjects = async props => {
  const response = await axios.post(baseUrl+'/testdata/relatedProjects', props)
  return response.data
}

export default { search, getColumns, getProject, generalSearch, getRelatedProjects }