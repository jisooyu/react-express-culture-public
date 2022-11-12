import { useEffect, useState } from 'react'
import './style.css';
import axios from 'axios';
import Items from './components/Items'

/* https://www.culture.go.kr/data/openapi/openapiView.do?id=390&category=B&gubun=A */

function App() {
  const [cultureData, setCultureData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('/cultureRoutes/display')
      console.log(response)
      if (response) {
        setCultureData(response.data)
      }
    } catch (error) {
      console.log(error)
      console.log({ message: 'fail to fetch data' })
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h2 className='title'>문화공보부 공공데이터</h2>
      <Items items={cultureData} />
    </>
  );
}

export default App;
