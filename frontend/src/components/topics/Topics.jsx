import { useState } from "react";


const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");

  const addTask = () => {
    if (newTopic.trim() === "") return;
    setTopics((prev) => [...prev, newTopic]);
    setNewTopic(""); // clear input after adding
  };


  return (
    <>
      <div className="topics rounded-md m-4 bg-white p-4 shadow-lg w-full">
        <h2 className="text-3xl text-center mb-4">Topics studied today</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            placeholder="Enter topic (e.g. Fluid Dynamics)"
            className="border p-2 rounded-md flex-1"
          />
          <button
            onClick={addTask}
             className="btn btn-accent"
          >
            Add Topic
          </button>
        </div>

        {topics.length > 0 ? (
          <ol className="list-decimal list-inside space-y-1">
            {topics.map((topic, index) => (
              <li key={index} className="text-gray-800">
                {topic}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-gray-500">No topics added yet.</p>
        )}
      </div>
    </>
  )
}

export default Topics
