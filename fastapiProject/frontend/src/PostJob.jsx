import React, { useState } from "react";
import axios from "axios";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/jobs/", formData)
      .then(() => alert("Job posted!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Job Title"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Salary"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;