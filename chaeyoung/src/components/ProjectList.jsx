import useProjectStore from "../store/useProjectStore";

const projects = [
  { id: 1, name: "React 포트폴리오", techStack: "React", projectType: "Portfolio", status: "completed" },
  { id: 2, name: "Vue 쇼핑몰", techStack: "Vue", projectType: "Ecommerce", status: "ongoing" },
  { id: 3, name: "Next.js 블로그", techStack: "Next.js", projectType: "WebApp", status: "completed" },
];

const ProjectList = () => {
  const { filters } = useProjectStore();

  // 필터 적용
  const filteredProjects = projects.filter((project) => {
    return (
      (!filters.techStack || project.techStack === filters.techStack) &&
      (!filters.projectType || project.projectType === filters.projectType) &&
      (!filters.status || project.status === filters.status)
    );
  });

  return (
    <div className="p-4">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div key={project.id} className="p-2 border-b">
            {project.name} ({project.techStack})
          </div>
        ))
      ) : (
        <p>해당 필터에 맞는 프로젝트가 없습니다.</p>
      )}
    </div>
  );
};

export default ProjectList;
