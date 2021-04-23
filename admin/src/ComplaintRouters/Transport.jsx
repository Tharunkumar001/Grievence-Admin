import React,{useEffect,useState} from 'react';
import AdminTab from '../NavComponents/dynamiComponent';
import axios from 'axios'

const TransportContainer = () => {

    const [transports,setTransport] = useState(["Testing"]);
useEffect(() => {
    axios.put("http://localhost:4000/getComplaintData",{section:"TRANSPORT"}).then((res)=>{

        const array = []
       
        for (let index = 0; index < res.data.length; index++) {
            for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
                array.push(res.data[index].comp[index1])                
            }
    }

      

        setTransport(array)
    })
});

        return(
            <div className="div">
                {transports.map((hos,i)=> <AdminTab key={i}   comp={hos} brand={"Transport"}/>)}
            </div>
        )
}

export default TransportContainer;