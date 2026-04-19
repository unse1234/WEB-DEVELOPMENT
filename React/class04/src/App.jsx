import React, { useState, useMemo } from "react";

const App = () => {
  const names = [
    "Saige Fuentes",
    "Bowen Higgins",
    "Leighton Kramer",
    "Kylan Gentry",
    "Amelie Griffith",
    "Franklin Sierra",
    "Marceline Avila",
    "Jaylen Blackwell",
    "Saoirse Conrad",
    "Dilan Wolf",
    "Jolene Fox",
    "Antonio Crosby",
    "Keily Meza",
    "Lucian Lee",
    "Scarlett Dickson",
    "Maxton Gill",
    "Jordan Dickerson",
    "Flynn Goodman",
    "Carolina Frederick",
    "Kase Sawyer",
  ];

  const [inputValue, setInputValue] = useState("");

  // ✅ Debounce function (stable)
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // ✅ stable debounced function using useMemo
  const handleSearch = useMemo(
    () =>
      debounce((e) => {
        setInputValue(e.target.value);
      }, 300),
    []
  );

  // ✅ Highlight matched text
  function highlightText(name, search) {
    if (!search) return name;

    const regex = new RegExp(`(${search})`, "gi");

    return name.split(regex).map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  function filterNames() {
    return names
      .filter((name) =>
        name.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((name, index) => (
        <div
          className="inline-block bg-white text-purple-500 px-4 py-2 rounded-lg shadow-md"
          key={index}
        >
          {highlightText(name, inputValue)}
        </div>
      ));
  }

  return (
    <div className="w-full h-screen flex flex-col gap-4 overflow-y-scroll items-center justify-center bg-purple-500">
      <input
        type="text"
        className="bg-lime-300 rounded-3xl px-5 py-5 text-2xl"
        onChange={handleSearch}
      />

      <div className="flex flex-wrap gap-2">{filterNames()}</div>
    </div>
  );
};

export default App;

// **********************Question1***************************
 // const [Num, setNum] = useState(0);
  
  //  const btnClick = () => { 
  //      setNum(prev => prev + 1);
       
  //  }
  // return (
  //   <div className='w-full h-screen flex items-center justify-center bg-gray-900'>
  //     <h1 className='text-4xl text-white font-bold'>#{Num}</h1>
  //     <button onClick={btnClick} className='ml-4 px-4 py-2 bg-blue-500 text-white rounded'>+</button>
  //     <button onClick={() => setNum(0)} className='ml-4 px-4 py-2 bg-red-500 text-white rounded'>Reset</button>
  //      </div>
  // )



// **********************Question2***************************
// const [toggle, setToggle] = useState(false)
  //  return (
  //   <div className='w-full h-screen flex items-center justify-center bg-gray-900'>
  //     <button onClick={()=>{setToggle(prev => !prev)}} className='px-4 py-2 bg-blue-500 text-white rounded active:scale-95'>{toggle ? "ON" : "OFF"}</button>
  //   </div>
  // )


  // const [inputValue, setInputValue] = useState("");
   
  //  const handleInputChange = (e) => {
  //    setInputValue(e.target.value);

  //  }
  // return(
  //   <div className='w-full h-screen flex flex-col items-center justify-center gap-4 min-h-80 min-w-90 bg-gray-900'>
  //     <input type="text" className= 'bg-lime-300 rounded-3xl px-5 py-5 text-2xl' onChange={handleInputChange} value={inputValue}/>
  //     <div id="display" className='bg-amber-100  min-h-80 min-w-90 p-3 text-xl rounded-lg' >{inputValue}</div>
        
  //   </div>
  // )



  // ****************************Question3***************************


  //   const [inputValue, setInputValue] = useState("");
   
//    const handleInputChange = (e) => {
//      setInputValue(e.target.value.slice(0, 10));
    
//    }
//    return(
//     < div className='w-full h-screen flex flex-col items-center justify-center gap-4 min-h-80 min-w-90 bg-gray-900'>
//  <input type="text" id="input" className= 'bg-lime-300 rounded-3xl px-5 py-5 text-2xl' onChange={handleInputChange} value={inputValue}/>  
//          {inputValue.length === 10 && <div className='text-green-500'>limit is complete!</div>  }
//     </div>

//    )