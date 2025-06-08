import { useState } from "react";


const Topics = () => {
    const [topics, setTopics] = useState([]);


    const addTask = () => {
        setTopics((prev) => {
           
            return [...prev, ];
        });
    }


  return (
    <>
    <div className="topics rounded-md m-4 bg-white p-4 shadow-lg w-full ">
      <h2 className=" align-items-sm-center text-3xl text-center" >Topics studied today</h2>
      <button onClick={addTask}>New topics</button>  
      {topics.map((topic, index) => (
        <div className="topic " key={index}>
          {topic}
        </div>
      ))}   
   
        
    </div>
    </>
  )
}

export default Topics
