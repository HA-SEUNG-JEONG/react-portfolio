interface NameAndPercentProps {
  name: string;
  percent: number;
}

const ProjectNameAndPercent = ({ name, percent }: NameAndPercentProps) => {
  return (
    <h1 className="font-bold">
      {name}{" "}
      <span className="text-[#738ac5]">프로젝트 참여율 : {percent}%</span>
    </h1>
  );
};

export default ProjectNameAndPercent;
