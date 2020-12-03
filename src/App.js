import React , {useEffect, useState} from 'react';

function App() {
  const [repos,setRepos] = useState([{}]);
  // useEffect two parameter callback function and second Array
      // useEffect(()=>{
      //   fetch('https://jsonplaceholder.typicode.com/posts/1')
      //   .then((response) => response.json())
      //   .then((json) => {
      //     setdata(json);
      //   })

      // },[])

      useEffect(()=>{

        async function getdata(){
                        const  response = await  fetch("https://api.github.com/users/mubashar-official2/repos")
                        const data = await response.json();
                        console.log(data);
                        setRepos(data)
            }
            getdata();

                              
                      
                      },[])


  return (
    <div className="App">
      <h1>Hi i am using React App </h1>
      <ul>
      {
        repos.map((repoObj,ind)=>{
        return(<li key={ind}>{repoObj.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
