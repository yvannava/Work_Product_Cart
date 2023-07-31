import { AlignCenter, Sidebar } from "lucide-react"

export  const Home = ()=>{
    return<>
    <div className="animate" style={{display : "flex",justifyContent : "center",width : "100vw", alignItems : "center", flexDirection : "column" , height : "100vh", marginTop : "-10vh"}}>
    <div className="p-5 d-flex " style={{fontSize : "2.5rem", flexDirection : "column", alignItems : "center"}}>
       <p style={{color : "purple", fontSize : " 120%" ,fontWeight : "bold"}}>Welcome, Yesy</p>
      
       <span style={{color : "plum", textAlign : "center", width : "100vw",fontSize : "80%"}}>Patient Care Coordinator</span>
    </div>
    <div>
        <article style={{textAlign : "center", maxWidth : "70vw",fontSize : "1.25rem", fontWeight : "lighter"}}>
            Add Items to your cart and get an estimate chekout. Feel free to print out the Total and give to patient.
            All items do not contain taxes, but will be added at your request. 
        </article>
    </div>
    </div>
    </>
}