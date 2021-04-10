import React,{useEffect, useState} from 'react';
import AdminTab from '../NavComponents/dynamiComponent';
import axios from 'axios'

const HostelContainer = () => {
    const [hostels,setHostels] = useState(["Testing"])
    const [mail,setMail] = useState(["tharung1411@gmail.com"]);
    // const [time,setTime] = useState(["12/1/2020"])
    // const [host,setHost] = useState([])
    // useEffect(() => {
      

    //     axios.put("http://localhost:4000/getHostelComplaints").then((res)=>{
    //         var arrayForMail = []
    //         for (let index = 0; index <res.data.length; index++) {
    //             arrayForMail.push(res.data[index].email)
                        
    //         }
    //         setMail(arrayForMail);
    //     })
       
    // })

    useEffect(() => {
        axios.put("http://localhost:4000/getHostelComplaints").then((res)=>{
       
            var array =[]
            
          

            for (let index = 0; index < res.data.length; index++) {
             
                for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
        
                    array.push({"mail":res.data[index].email,"comp":res.data[index].comp[index1]})
                    // array.push({"comp":res.data[index].comp[index1]});  
                            
                }
        }

  
            setHostels(array)
            // console.log(array)
            
        })
    })
  
        return(
            <div className="div">
                {hostels.map((hos,i)=> <AdminTab key={i} mail={hos.mail} comp={hos.comp} brand={"hostel"} />)}
               
                {/* {mail.map((em,j) => <AdminTab key={j}  mail={em} />)} */}
            </div>
        )
}

export default HostelContainer;