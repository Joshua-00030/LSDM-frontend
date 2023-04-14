import axios from 'axios'
const baseUrl = ''

const search = async props => {
  const response = await axios.post(baseUrl+'login', props)
  return response.data
}

export default { search }