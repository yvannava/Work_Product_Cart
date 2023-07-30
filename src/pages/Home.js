import { Sidebar } from "lucide-react"

export  const Home = ()=>{
    return<>
    <div style={{display : "flex", justifyContent : "center" ,width : "100vw", alignItems : "center", flexDirection : "column" , height : "100vh"}}>
    <div className="p-5 d-flex " style={{fontSize : "2.5rem", flexDirection : "column", alignItems : "center"}}>
       <p style={{color : "purple", fontWeight : "bold"}}>Welcome, Yesenia</p>
       <br></br>
       <p style={{color : "plum"}}>Patient Care Coordinator</p>
    </div>
    <div>
        <article style={{textAlign : "center", width : "50vw",fontSize : "1.25rem", fontWeight : "lighter"}}>
            Add Items to your cart and get an estimate chekout. Feel free to print out the Total and give to patient.
            All items do not contain taxes, but will be added at your request. 
        </article>
    </div>
    </div>
    </>
}