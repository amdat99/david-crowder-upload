// import logo from './logo.svg';
import './App.scss';
import React,{useEffect,useState} from 'react'


import Logo from './logo.jpg';


function App() {

  const [serverConnected, setServerConnected] = useState(false)

useEffect(() =>{
  verifyServer()
},[])
      

useEffect(() => {
  if(serverConnected === false){
    const interval = setInterval(() => verifyServer(), 3000);
  
    return () => clearInterval(interval);
        }
},[serverConnected]);





  const verifyServer = () => {
    fetch('https://david-crowder-server.herokuapp.com/verify').then((data)=> {
      console.log(data)
      if(data){
        setServerConnected(true);
   
      }
    })
    }

  console.log(serverConnected)
 return (

      <div className=" App center">
        <a className="link" href="https://davidcrowderweb.wixsite.com/website/contact-1" >⬅ Back </a>
        <div className="email">

        <img src={Logo} width="200" alt="Logo"/>

      <form action="https://david-crowder-server.herokuapp.com/sendemail" method="POST" encType="multipart/form-data">
      <p>Please upload your images as well as a message detailing what work you require </p>
      <span style={{position:'relative',bottom:'10px'}}>Check your email inbox for confirmation after clicking send </span>
            <div className="form-group">
                <input style={{marginBottom:'10px'}} class="form-control" type="text" name="name" required placeholder="name:"/>
            </div>
            <div class="form-group">
                <input style={{marginBottom:'10px'}} type="email" class="form-control" name="email" placeholder="email:" required id=""/>
            </div>
            <div className="form-group">
                <input style={{marginBottom:'10px'}} type="text" class="form-control" name="number" placeholder="number:" required id=""/>
            </div>
            <div className="form-group">
                <textarea style= {{width:'80%', marginBottom:'10px'}} required class="form-control" name="body" id="" cols="30" rows="10" placeholder="Message:"></textarea>
            </div>
            <label htmlFor="attachment">Attachment:</label>
            <div className="form-group">
                <input style={{marginBottom:'10px'}}type="file" required class="form-control" name="images" multiple id=""/>
            </div>
            <div className="form-group">
              {serverConnected?
                <button style={{marginBottom:'10px'}} type="submit" class="btn btn-block btn-danger">
                    Send 
                </button>
            : <div style={{width:'10px',height:'10px'}} className="loader"></div> }
            </div>
            
        </form>
        <span>After sending please wait for the page to finish loading. Multiple images may take longer.</span>
        </div>
      </div>
    );
}

export default App;
