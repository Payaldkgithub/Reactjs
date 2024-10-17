import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Axios() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {console.log(user)}
      <h1>Using Axios Api get data</h1>
      <table>
        <thead>
          <th>id</th>
          <th>Name</th>
          <th>username</th>
          <th>email</th>
        </thead>
        <tbody>
          {user.map((ele) => {
            return (
              <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// function Axios() {
//   const[data,setData]=useState([])
//   useEffect(()=>{
//       axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(data=>setData(data.data))
//       .catch(err=>console.log(err))
//       // fetchData()
//   },[])
//   // const fetchData= async()=>{
//   //     let data=await axios.get("https://jsonplaceholder.typicode.com/users")
//   //     setData(data.data)
//   // }
// return (
//   <>
//       <h1>Axios</h1>
//           {
//               data.map((e)=>{
//                   return(
//                       <li>{e.name}</li>
//                   )
//               })
//           }
//   </>
// )
// }
export default Axios;
