
import Nc from "./NumberCards.jsx" 
const Hero = () => {
  return (
    <div className="hero">
         <div className="h-up">
             <div className="left">
               <h5>Hey,I'm a</h5>
              <h1>Creative <br /> Director</h1>
             </div>
             <div className="right">
              <h1>Great design should <span className="Break"></span> feel invisible.</h1>
              <p>From logo to language,I build brands that <span className="Break"></span> connect and convert..</p>
             </div>
         </div>

         <div className="h-down">
              <Nc  number="01" content="Brand Strategy"/>
              <Nc  number="02" content="Brand Identity Design"/>
              <Nc  number="03" content="Packaging Design"/>
              <Nc  number="04" content="Creative Direction"/>
         </div>
    </div>
  )
}

export default Hero
