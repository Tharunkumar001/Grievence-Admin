import React,{useEffect,useState} from 'react';
import AdminTab from '../NavComponents/dynamiComponent';
import axios from 'axios'

const AcademicContainer = () => {
    
    const [academics,setAcademics] = useState(["Testing"])
    const [mail,setMail] = useState("");
    // const [time,setTime] = useState(["12/1/2020"])

    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getComplaintData",{section:"ACADEMIC"}).then((res)=>{

            var array = []
    
           
            for (let index = 0; index < res.data.length; index++) {

                for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
          
                    array.push({"mail":res.data[index].email,"comp":res.data[index].comp[index1],"sugg":res.data[index].suggetion[index1]})
                    
                    // array.push({"comp":res.data[index].comp[index1]});  
                            
                }
        }
      

            setAcademics(array)
          
          
        })
    })

        return(
            <div className="div">
                {academics.map((hos,i)=> <AdminTab key={i} mail={hos.mail} comp={hos.comp}  sugg={hos.sugg} brand={"Academic"} />)}
                
            </div>
        )
}

export default AcademicContainer;