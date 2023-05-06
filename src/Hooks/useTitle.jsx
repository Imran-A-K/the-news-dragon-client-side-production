import React, { useEffect } from 'react'

const useTitle = (title) => {
  useEffect( () =>{
    document.title = `${title} - News Dragon`
  },[title])
}

export default useTitle