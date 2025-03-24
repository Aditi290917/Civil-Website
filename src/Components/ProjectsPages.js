import React from "react";

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: "Project Alpha", description: "Description for Project Alpha" },
    { id: 2, title: "Project Beta", description: "Description for Project Beta" },
    { id: 3, title: "Project Gamma", description: "Description for Project Gamma" },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Our Projects</h1>
      <p style={{ fontSize: "1rem", marginBottom: "40px" }}>
        Discover some of the exciting projects we have worked on.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              padding: "20px",
              transition: "transform 0.2s",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{project.title}</h2>
            <p style={{ fontSize: "1rem", marginBottom: "20px" }}>{project.description}</p>
            <button
              style={{
                backgroundColor: "#007BFF",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert(`You clicked on ${project.title}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
