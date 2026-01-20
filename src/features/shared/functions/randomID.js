function randomID() {
    let ID = ""
    for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * 10) 
      ID += random
    }
    return ID
  }
  
  export default randomID
  