import React,{useEffect, useState,useContext} from 'react';
import AdminTab from '../NavComponents/dynamiComponent';
import axios from 'axios'
import Example from '../NavComponents/char';

export const barContext = React.createContext()

const HostelContainer = () => {
    const [hostels,setHostels] = useState(["Testing"])
    const [mail,setMail] = useState(["tharung1411@gmail.com"]);
    const [barcount,setBarcount] = useState([]);
  

    useEffect(() => {
        axios.put("http://localhost:4000/getHostelComplaints").then((res)=>{
       
            var array =[]
            
            var sum = [];
            for (let index = 0; index < res.data.length; index++) {
              
                
                for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
        
                    array.push({"mail":res.data[index].email,"comp":res.data[index].comp[index1]})
                    // array.push({"comp":res.data[index].comp[index1]});  
                            
                }
        }

        for(let loop1 = 0; loop1<3; loop1++){
            sum.push(res.data[loop1].comp.length)
        }
        
  
            setHostels(array);
            setBarcount(sum);
       
           
        })
    },[barcount])
  
        return(
            <div className="div">
                {hostels.map((hos,i)=> <AdminTab key={i} mail={hos.mail} comp={hos.comp} brand={"hostel"} />)}
                {() => <Example count={barcount}/>}
            </div>
        )
}

export default HostelContainer;