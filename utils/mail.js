export async function sendMail(body){

  return fetch("/api/mail", {
           method:"POST",
           body:JSON.stringify({body}),
           headers:{
             "Content-Type":"application/json"
           }
           })
           .then(r => r.json())  
}
