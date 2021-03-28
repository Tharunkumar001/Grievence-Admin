import React,{useEffect, useState} from 'react';
import AdminTab from '../NavComponents/dynamiComponent';
import axios from 'axios'

const HostelContainer = () => {
    const [hostels,setHostels] = useState(["Testing"])
    // const [time,setTime] = useState(["12/1/2020"])
    // const [host,setHost] = useState([])

    
    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getHostelComplaints").then((res)=>{
            
       
            var array = []

          

            for (let index = 0; index < res.data.length; index++) {
                for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
                    array.push(res.data[index].comp[index1])                
                }
        }

  
            setHostels(array)
          
    
        })
    })
  
        return(
            <div className="div">
                {hostels.map((hos,i)=> <AdminTab key={i} comp={hos} brand={"Hostels"} />)}
               
                
            </div>
        )
}

export default HostelContainer;