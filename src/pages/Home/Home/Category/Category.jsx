import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCart from '../../NewsCart/NewsCart';
import useTitle from '../../../../Hooks/useTitle';

const Category = () => {
  useTitle('Home')
  const {id} = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      { id && <h2>This Category News : {categoryNews.length}</h2>
}
        {
          categoryNews.map(news => <NewsCart
          key={news._id}
          news={news}
          >  
          </NewsCart>)
        }
    </div>
  )
}

export default Category