//import axios from 'axios'
import { useState, useEffect } from 'react'
import { data } from './data'
import ListItem from './ListItem'

export default function ScrollList() {
  const [page,setPage] = useState(1)
  console.log(page)

      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100){
            setPage((prevP) => prevP + 1)
          }
      }

      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
      },[])

  return (
    <div className="List">
      {data.map((item) => (
        <ListItem key={item.id} item={item}/>
      ))}
    </div>
  )
}
