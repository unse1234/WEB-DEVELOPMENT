

const NumberCards = (Props) => {
  
  return (
    < div className="Nc">
       <h2>  <span>#</span> {Props.number}</h2>
         <h2 className="H-name">{Props.content}</h2>
    </div>
  )
}

export default NumberCards
