
import Button from './Components/Button.jsx'
import Input from './Input.jsx'
const App = () => {
  // const user1={
  //         name:"unse",
  //         logedIn:false
  // }
  //  const user2={
  //         name:"Ayesha",
  //         logedIn:true
  // }
  // return (
  //   <div className=' flex flex-col items-center justify-center h-screen bg-lime-300'>
  //        {user1.logedIn ? <Button text={`Welcome, ${user1.name}!`} /> : <Button text="Please log in" />}
  //        {user2.logedIn ? <Button text={`Welcome, ${user2.name}!`} /> : <Button text="Please log in" />}
  //   </div>
  // )

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-amber-300'>
      <Button  />
      <Input />
    </div>
  )
}

export default App
