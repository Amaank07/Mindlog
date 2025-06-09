import { useState } from 'react';

const Sidebar = ({ subjects, setSubjects, selectedSubject, setSelectedSubject }) => {
  const [newSubject, setNewSubject] = useState('');

  const handleAddSubject = () => {
    if (newSubject.trim() && !subjects.includes(newSubject)) {
      setSubjects([...subjects, newSubject]);
      setNewSubject('');
    }
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-2">
            <li className="flex">
              <input
                type="text"
                className="input input-sm input-bordered w-full"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                placeholder="New subject..."
              />
              <button className="btn btn-sm ml-2" onClick={handleAddSubject}>Add</button>
            </li>
            {subjects.map((subj, index) => (
              <li key={index}>
                <a
                  className={`cursor-pointer ${selectedSubject === subj ? 'bg-primary text-white' : ''}`}
                  onClick={() => setSelectedSubject(subj)}
                >
                  {subj}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
