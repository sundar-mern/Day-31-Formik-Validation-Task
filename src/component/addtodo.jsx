import React, { useState } from "react";
import "../App.css/"
import { Addalldata } from "./helper";
import { useFormik } from "formik";
import { bookschema } from "./schema";

const Addtodo=({bookdata,setbookdata})=>{
  
        const { values, handleChange, handleSubmit, handleBlur, errors, touched}=useFormik({
        initialValues:{
            title:"",
            ISBNnumber:"",
            PublicationDate:"",
            authorname:"",
            birth:"",
            description:""
        },
        validationSchema: bookschema,
        onSubmit:(newbook)=>{
            addbookdetails(newbook)
        }
    })

    const addbookdetails=(newdetails)=>{
        Addalldata(newdetails).then((data)=>{if (data){ setbookdata([...bookdata,newdetails])
          
           }
        else{alert("cannot add data")}})
       
    }
    console.log()
return(
    <div className="inputform">
      <div className="iform">
        <form onSubmit={handleSubmit}>
          <div className="all">
          <div className="div">
        <p>Book Title</p>
        <input type="text" placeholder="Book Title"  onBlur={handleBlur} name="title" className="ititle" value={values.title} onChange={handleChange}/>
        {touched.title && errors.title? (
          <div className="text-red-400">{errors.title}</div>
        ) : (
          "" )}
        <p>Author</p>
        <input type="text" placeholder="Author"  onBlur={handleBlur} name="authorname" className="authorname" value={values.authorname} onChange={handleChange}/>
        {touched.authorname && errors.authorname? (
          <div className="text-red-400">{errors.authorname}</div>
        ) : (
          "" )}
        <p>ISBN Number</p>
        <input type="text" placeholder="ISBN Number"  onBlur={handleBlur}  name="ISBNnumber" className="isbn" value={values.ISBNnumber} onChange={handleChange}/>
        {touched.ISBNnumber && errors.ISBNnumber? (
          <div className="text-red-400">{errors.ISBNnumber}</div>
        ) : (
          "" )}
          </div>
          <div className="div1">
        <p>Publication Date</p>
        <input type="text" placeholder="Publication Date"  onBlur={handleBlur}  name="PublicationDate" className="pdate" value={values.PublicationDate} onChange={handleChange}/>
        {touched.PublicationDate && errors.PublicationDate? (
          <div className="text-red-400">{errors.PublicationDate}</div>
        ) : (
          "" )}

        <p>Short biograph</p>
        <input type="text" placeholder="Short biograph"  onBlur={handleBlur}  name="description" className="bio" value={values.description} onChange={handleChange}/>
        {touched.description && errors.description? (
          <div className="text-red-400">{errors.description}</div>
        ) : (
          "" )}

        <p>Date-of-birth</p>
        <input type="text" placeholder="Date-of-birth"  onBlur={handleBlur}  name="birth" className="bdate" value={values.birth} onChange={handleChange}/>
        {touched.birth && errors.birth? (
          <div className="text-red-400">{errors.birth}</div>
        ) : (
          "" )}
         </div> 
         </div>
         <div className="div3">
        <button className="abtn"  type="submit">Add</button></div>
        </form>
        </div>
    </div>
)
}
export default Addtodo