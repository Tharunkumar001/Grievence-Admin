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
                // setMail(res.data[index].email);
                    for (let index1 =  (res.data[index].comp.length) - 1; index1 >= 0 ; index1--) {
                        array.push(res.data[index].comp[index1])   
                  
                             
                    }
            }
      

            setAcademics(array)
          
          
        })
    })

        return(
            <div className="div">
                {academics.map((hos,i)=> <AdminTab key={i} Email={mail} comp={hos} brand={"Academic"}/>)}
                
            </div>
        )
}

export default AcademicContainer;