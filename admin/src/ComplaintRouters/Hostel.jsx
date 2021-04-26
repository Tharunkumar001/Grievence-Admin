import React,{useEffect, useState,useContext} from 'react';
import AdminTab from '../NavComponents/dynamiComponent';
import axios from 'axios'
import Example from '../NavComponents/chart';

export const barContext = React.createContext()

const HostelContainer = () => {
    const [hostels,setHostels] = useState(["Testing"])
    const [mail,setMail] = useState(["tharung1411@gmail.com"]);

  

    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getComplaintData",{section:"HOSTEL"}).then((res)=>{
       
            var array =[]
          
            var suggetion = []
            for (let index = 0; index < res.data.length; index++) {

                for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
          
                    array.push({"mail":res.data[index].email,"comp":res.data[index].comp[index1],"sugg":res.data[index].suggetion[index1]})
                    
                    // array.push({"comp":res.data[index].comp[index1]});  
                            
                }
        }

            setHostels(array);
     
           
        })
    },[])

    
  
        return(
            <div className="div">
                {hostels.map((hos,i)=> <AdminTab key={i} mail={hos.mail} comp={hos.comp}  sugg={hos.sugg} brand={"Hostel"} />)}
              
            </div>
        )
}

export default HostelContainer;