export const ApiService=async (body)=>{
    try {
        let res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/v1/freshdesk/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(body),
          }
        );
        let result = await res.json();
        return result;
    } catch (error) {
        console.log(error)
    }
   
}
