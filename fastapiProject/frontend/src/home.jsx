import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/jobs/")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/jobs/${id}`);
      setJobs(jobs.filter((job) => job.id !== id));  // Remove job from UI
      alert("Job deleted successfully!");
    } catch (err) {
      console.error("Failed to delete job:", err);
      alert("Failed to delete job.");
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Job Board</h1>
      <div className="grid gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="mt-2">{job.description}</p>
            <p className="text-green-600 font-medium">{job.salary}</p>
            <button
              onClick={() => handleDelete(job.id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete Job
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;