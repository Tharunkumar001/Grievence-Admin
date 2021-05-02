import React,{useEffect,useState} from 'react';
import AdminTab from '../NavComponents/dynamiComponent';
import axios from 'axios'

const RaggingContainer = () => {
    const [ragging,setRagging] = useState(["Testing"]);
    const [mail,setMail] = useState("");
    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getComplaintData",{section:"RAGGING"}).then((res)=>{

            var array = []

            for (let index = 0; index < res.data.length; index++) {

                for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
          
                    array.push({"mail":res.data[index].email,"comp":res.data[index].comp[index1],"sugg":res.data[index].suggetion[index1]})
                    
                    // array.push({"comp":res.data[index].comp[index1]});  
                            
                }
        }

        
  
            setRagging(array)
        })
    },[]);

        return(
            <div className="div">
                {ragging.map((hos,i)=> <AdminTab key={i} mail={hos.mail} comp={hos.comp}  sugg={hos.sugg} brand={"Ragging"} />)}
            </div>
        )
}

export default RaggingContainer;