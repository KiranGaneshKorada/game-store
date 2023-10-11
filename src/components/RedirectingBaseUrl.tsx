import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function RedirectingComponent(){

      const navigate = useNavigate();


    useEffect(()=>{navigate('/games')})

    return <></>
}

export default RedirectingComponent;