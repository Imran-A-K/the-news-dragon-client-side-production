import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() =>{
    fetch('https://the-news-dragon-client-server-imrankproffessional-gmailcom.vercel.app/categories')
    .then(res => res.json())
    .then(apiData => {
      setCategories([...apiData])
      // console.log(apiData)
    })
    .catch(error => {
      console.error(error.message)
    })
  },[])
  return (
    <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
  )
}

export default LeftNav