import React, { useEffect } from "react"
import { useState} from "react"
import "../App.css/"
import { Editalldata } from "./helper"
import { useFormik } from "formik"
import { bookschema } from "./schema"
import Addtodo from "./addtodo1"

const Edittodo=({bookdata,setbookdata,show,setshow,editid})=>{
    const[title,settitle]=useState("")
    const[description,setdescription]=useState("")
    const [isbn,setisbn]=useState("")
    const [pdate,setpdate]=useState("")
    const[bdate,setbdate]=useState("")
    const [aname,setaname]=useState("")
    const[index,setindex]=useState()
    const[data,setdata]=useState(undefined)
    useEffect(()=>{
      const selecttodo=bookdata.filter((val)=>editid == val.id)
      const edidindex=bookdata.findIndex((val)=>editid == val.id)
       setindex(edidindex)
      settitle(selecttodo[0].title)
      setdescription(selecttodo[0].description)
      setisbn(selecttodo[0].ISBNnumber)
      setbdate(selecttodo[0].birth)
      setaname(selecttodo[0].authorname)
      setpdate(selecttodo[0].PublicationDate)
      setdata(selecttodo[0])
console.log(selecttodo)
 },[editid])

   



    return(
        <div className="inputform">
      {data?<Addtodo data={data}
      editid={editid}
      index={index}
      bookdata={bookdata}
      setbookdata={setbookdata}
      show={show}
      setshow={setshow}/>:""}
    </div>
    )}


export default Edittodo