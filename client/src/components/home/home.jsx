import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {

  const [apod, setApod] = useState('')
  
  useEffect(() => {
    const getAPOD = async() => {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
      setApod(res.data.hdurl)
    }

    getAPOD()
  }, [])

  return (
    <div>
      {apod ? <img src={apod} alt='apod' /> : null }
    </div>
  )
}

export default Home

