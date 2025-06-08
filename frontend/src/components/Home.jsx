import { useRef, useState } from "react";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Topics from "./topics/Topics"
import "cally"

const Home = () => {

  const [topics, setTopics] = useState(["1. "]);
  const containerRef = useRef(null);

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const currentText = e.target.innerText.trim();
      if (currentText === "") return;

      // Add next item only if current div has text
      setTopics((prev) => {
        const nextNumber = prev.length + 1; 
        return [...prev, `${nextNumber}. `];
      });

      // Focus on the new div after render
      setTimeout(() => {
        const allDivs = containerRef.current.querySelectorAll(".topic");
        const nextDiv = allDivs[index + 1];
        if (nextDiv) nextDiv.focus();
      }, 0);
    }
  };

  return (
    <div className="flex h-screen bg-neutral-200">
      {/* Sidebar */}
      <div className=" flex-shrink-0">
        <Sidebar />
      </div>
      
      <div className="flex flex-col flex-1">
       
        <Navbar />
        
        <div className="  flex p-4">
          <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box w-2/5">
            <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
            <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
            <calendar-month></calendar-month>
          </calendar-date>
          <Topics/>
        </div>
        <div className="revisionSection">
          
        </div>
      </div>
    </div>
  )
}

export default Home