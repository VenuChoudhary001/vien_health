import React from 'react'

export const useForm=(initial)=>{
    const [value,setValue]=React.useState(initial || "");

    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    return {
        value,
        onChange:handleChange
    }
}

export const Validate=(type,data)=>{
    if(!data || data.length<=0){
        return true;
    }
    
     if(!type || type==="text"){
        return false;
     }
     if(type=="number"){
        // let validNum=;
        return data.match(`^[0-9]*$`);
     }
}