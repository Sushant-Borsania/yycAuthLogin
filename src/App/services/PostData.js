export function PostData(type, userData) {
  let BaseURL = 'http://f5b1fc8e.ngrok.io/';
  return new Promise((resolve, reject) =>{
    
         
    fetch(BaseURL+type, {
        method: 'POST',
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });

  });
}
