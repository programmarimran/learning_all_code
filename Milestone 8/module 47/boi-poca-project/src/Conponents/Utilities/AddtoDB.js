import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
export const getFromStorage=()=>{
    const getFromStorage=localStorage.getItem("readlist")
    if(getFromStorage){
        const parseData=JSON.parse(getFromStorage);
        return parseData
    }
    else{
        return []
    }
}

export const setToStorage=(id)=>{
    const data=getFromStorage()
    // console.log(data)
    if(data.includes(id)){
        Swal.fire({
            title: "Your Book is already Listed Added",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }
    else{
       data.push(id)
       const datastringfy=JSON.stringify(data)
       localStorage.setItem("readlist",datastringfy)
       toast("Wow so easy!")
    }
  
    
}
