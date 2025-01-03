import { useState } from "react"
export default function Login(){
   const [username,setUsername] = useState("")
   const [password,setPassword] = useState("")
   const [hovered, setHovered] = useState(false)
  
      const setLogin = () =>{
          if(username==="chaqueteiro" && password==="1234"){
              console.log("si")
          }
          else{
              console.log(false)
          }
      }
      return(
          <>
          <div className="flex">
          <div className="w-1/2 flex flex-col justify-center mt-20">
              <h2 className="text-center font-bold text-2xl text-rose-400">LOGIN</h2>
              <form onSubmit={setLogin} className="px-4">
              <div className="w-full flex flex-col p-4">
                  <label htmlFor="username" className="">Username</label>
                  <input type="text" id="username" onChange={e=>setUsername(e.target.value)} required className="w-1/2 p-2 border-gray-500 border-2 rounded-lg text-black"/>
              </div>
              <div className="w-full flex flex-col p-4">
                  <label htmlFor="password" className="">Password</label>
                  <input type="password" id="password" required onChange={e=>setPassword(e.target.value)} className="w-1/2 p-2 border-gray-500 border-2 rounded-lg text-black"/>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="justify-center p-1 rounded-lg w-1/5 flex content-center bg-gray-500 text-white">
                    Entrar
                </button>
               
                </div>
              </form>
          </div>
          <div className="w-1/2 h-screen flex"> 
                {hovered ? <img src={require('../assets/wallpaper2.webp')} alt="login" className="w-full h-full" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}/> : <img src={require('../assets/wallpaper1.webp')} alt="login" className="w-full h-full" onMouseEnter={() => setHovered(true)} />}
          </div>
          </div>
          </>
      )
}