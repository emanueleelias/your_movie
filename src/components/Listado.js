import { useEffect } from "react";
import { useHistory } from "react-router-dom";


const Listado = () => {
    const history = useHistory();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
          history.push('/');
      }
    }, [])
    

    return (
        <div>Listado</div>
    )
}

export default Listado;
