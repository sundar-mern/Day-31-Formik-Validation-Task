import React, { useState,useEffect} from 'react'
import Addtodo from './component/addtodo'
import Edittodo from './component/edittodo'
import { Deletealldata, Getalldata } from './component/helper'

import "./App.css/"

function App() {
   
   
    useEffect(()=>{
        Getalldata().then((data)=>{setbookdata(data)})
    },[])

    
    const[show,setshow]=useState(true)
    const[editid,seteditid]=useState("")
  
    const [bookdata,setbookdata]=useState()
 

//handle delete
const handledelete=(id)=>{
    Deletealldata(id).then((data)=>{
        if(data){
        const remainbook= bookdata.filter((val) => val.id !==id)
        setbookdata(remainbook)}
        else{console.log("error")}
    })
  }

//handle edit
const handleedit=(id)=>{
    setshow(false)
    seteditid(id)
    
}


   

  return(

    <div className="main">
        <div className="title">
            <h1 className='name'>Book Library</h1>
        </div>
        {show===true? (<Addtodo
         bookdata={bookdata}
         setbookdata={setbookdata}/>) :  (<Edittodo
            bookdata={bookdata}
            setbookdata={setbookdata}
            show={show}
            setshow={setshow}
            editid={editid}/>)}
         

    {(
    <>
    <div className="cards">
        
    {bookdata?.map((values,i)=> (
        <div className="card" key={i}>
            <h1 id="ti">{values.title}</h1>
            <div className="book">
                <p className='an'>by {values.authorname}</p>
                <div className="para">
                <p>ISBN Number : {values.ISBNnumber}</p>
                <p>Publication Date : {values.PublicationDate}</p>
                </div>
            </div>
            <hr/>
            <div className="author">
                <h3>Author biography :</h3>  
                <p className='des'>{values.description}</p>
                <p className='born'>Born on :{values.birth}</p>
            
        <div className="btn">
            <button className='ebtn' onClick={()=>handleedit(values.id)}>Edit</button>
            <button className='dbtn' onClick={()=>handledelete(values.id)}>Delete</button>
            </div>
        </div>
        </div>))}
        </div>
    </>
  )}
  </div>
    )
}

export default App
