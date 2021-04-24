import React,{useEffect,useState} from 'react';
import AdminTab from '../NavComponents/dynamiComponent';
import axios from 'axios'

const RaggingContainer = () => {
    const [raggings,setRagging] = useState(["Testing"]);
    const [mail,setMail] = useState("");
    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getComplaintData",{section:"RAGGING"}).then((res)=>{

            var array = []

            for (let index = 0; index < res.data.length; index++) {
                for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
                    array.push(res.data[index].comp[index1])                
                }
        }

        
  
            setRagging(array)
        })
    });

        return(
            <div className="div">
                {raggings.map((hos,i)=> <AdminTab key={i} Email={mail} comp={hos} brand={"Ragging"}/>)}
            </div>
        )
}

export default RaggingContainer;