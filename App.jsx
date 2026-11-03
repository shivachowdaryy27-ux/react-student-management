import Student from './Student';
import Collage from './collage';
import Counter from './Counter';
import {useState} from 'react';


function App(){

  const [count ,setcount]=useState(0);
  return (
    <div>
      <h1>Student Management App</h1>
      
      <Student name="John" age="20" course="Mern Stack" onEnroll={()=>setcount(count+1)} />
     
      <Student name="Jane" age="22" course="Data Science" onEnroll={()=>setcount(count+1)} />
      
      <Student name="Alice" age="19" course="Web Development" onEnroll={()=>setcount(count+1)} />
      <Counter count={count} />

      <Collage/>
      
      
    </div>
  );

}
export default App;