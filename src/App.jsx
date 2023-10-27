import React from "react"
import { Navbar, Search, Hero, GetRegister, Awards, Para, Footer} from "./components"
import styles from "./style"
function App() {
 return(   
  
    <div className="bg-black w-full overflow-hidden color text-orange-50">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div>
    <Navbar/>
    <Search/>
    <Hero/>
    <GetRegister/>
    <Awards/>
    <Para/>
    <Footer/>
    
      </div>
    </div>

    </div>
      
  
 )
}

export default App
