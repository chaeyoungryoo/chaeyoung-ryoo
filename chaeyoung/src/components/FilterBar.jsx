import useProjectStore from "../store/useProjectStore";

const FilterBar = () => {
  const { filters, setFilter, resetFilters } = useProjectStore();

  return (
    <div className="">
      <select onChange={(e) => setFilter("techStack", e.target.value)} value={filters.techStack}>
        <option value="">기술 스택</option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Next.js">Next.js</option>
      </select>

      <select onChange={(e) => setFilter("projectType", e.target.value)} value={filters.projectType}>
        <option value="">프로젝트 유형</option>
        <option value="WebApp">웹앱</option>
        <option value="Ecommerce">이커머스</option>
        <option value="Portfolio">포트폴리오</option>
      </select>

      <select onChange={(e) => setFilter("status", e.target.value)} value={filters.status}>
        <option value="">완료 상태</option>
        <option value="completed">완료</option>
        <option value="ongoing">진행 중</option>
      </select>

      <button onClick={resetFilters} className="bg-red-500 text-white px-2 py-1">
        필터 초기화
      </button>
    </div>
  );
};

export default FilterBar;
