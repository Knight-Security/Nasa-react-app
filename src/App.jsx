import React, { useEffect, useState } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setshowModal] = useState(false);
  function handleToggleModal(){
    setshowModal(!showModal);
  }
  const NASA_KEY=import.meta.env.VITE_NASA_API_KEY
  useEffect(()=>{
    async function fetchAPIData(){
      const url="https://api.nasa.gov/planetary/apod"+`?api_key=${NASA_KEY}`
      try{
        const res= await fetch(url)
        const apidata=await res.json();
        setData(apidata)
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  },[])
  return (
    <>
      {data ?(<Main data ={data}/>):(
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (<SideBar  data={data} handleToggleModal={handleToggleModal}/>)}
      {data && (<Footer data = {data} handleToggleModal={handleToggleModal}/>)}
    </>
  )
}

export default App

