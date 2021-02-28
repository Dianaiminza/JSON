import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import BackendService from '../config/BackendService';
export default function CatsList() {
    const [cats, getCats] = useState([]);
    const url='http://localhost:8000/';
    useEffect(() => {
        getAllCats();
      },[]);
     const getAllCats=()=>{
      BackendService.getAllCats()
         .then((response)=>{
             const allCats=response.data.rows;
           getCats(allCats);
           
         })
         .catch(error =>console.error(`Error:${error}`));  
      
     }
     const deleteCat=(catid)=> {
       
       let selectcat=cats.find(function(cat){
        return cat.id ===catid;
        
        });
        const yesdelete= window.confirm(`Do you want to delete ${selectcat.name}?`);
        
        if(yesdelete){

        const requestOptions = {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          
      };

      let baseurl = 'http://localhost:8000/cats/' +selectcat.id;
      BackendService.getAllCats(baseurl, requestOptions)
          // .then((res) => {
          //     return res.json();
          // })
          .then((results) => {
              if (results) {
                  alert("Deleted successfully!");
                  getAllCats();
              }

          })
          .catch((e) => {
              alert(e);
          });
    }else{
      alert(`Delete cancelled`)
    }
  }
    return (
     <div className="cat">
     <table name="cat">
     <tr>
       <th>Id</th>
       <th>Name</th>
       <th>Action</th>
     </tr>
      {cats.map((cat)=>(
        <tr>
      <td>{cat.id}</td>
    <td>{cat.name}</td>
     <td>{cat.action}</td>
     <td><Link to={`/cats/${cat.id}/edit`}>Edit</Link></td>
     <td><Link onClick={() => deleteCat(cat.id)}>Delete</Link></td>
    </tr>
      ))
      }
      </table>
     </div> 
    )  
}

