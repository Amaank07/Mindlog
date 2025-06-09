import { useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Topics from "./topics/Topics";
import "cally";

const Home = () => {
 const containerRef = useRef(null);

  const [subjects, setSubjects] = useState(["Physics"]);
  const [selectedSubject, setSelectedSubject] = useState("Physics");

  const [subjectData, setSubjectData] = useState({
    Physics: { topics: [] }
  });

  const updateTopicsForSubject = (updatedTopics) => {
    setSubjectData((prev) => ({
      ...prev,
      [selectedSubject]: {
        ...(prev[selectedSubject] || {}),
        topics: updatedTopics,
      }
    }));
  };

    const topics = subjectData[selectedSubject]?.topics || [];

   return (
    <div className="flex h-screen bg-neutral-200">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar
          subjects={subjects}
          setSubjects={setSubjects}
          selectedSubject={selectedSubject}
          setSelectedSubject={(subj) => {
            setSelectedSubject(subj);
            // Ensure subject data exists
            setSubjectData(prev => ({
              ...prev,
              [subj]: prev[subj] || { topics: [] }
            }));
          }}
        />
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="flex p-4 gap-4">
          {/* Calendar */}
          <calendar-date className="cally bg-base-100 border border-base-300 shadow-lg rounded-box w-2/5">
            <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
            <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
            <calendar-month></calendar-month>
          </calendar-date>

          {/* Topics section (dynamic by subject) */}
          <Topics
            topics={topics}
            setTopics={updateTopicsForSubject}
          />
        </div>

        {/* Revision section (to implement later) */}
        <div className="revisionSection px-4 pb-4">
          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-xl font-bold mb-2">Revision Section</h2>
            <p className="text-gray-500">Coming soon for {selectedSubject}...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;