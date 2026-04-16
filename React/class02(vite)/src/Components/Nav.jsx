
import Button from "./Button.jsx"
const nav = () => {
  return (
    <div className="nav">
         <h1 className="logo">Folioblox</h1>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <Button />
            </div>
    </div>
  )
}

export default nav
