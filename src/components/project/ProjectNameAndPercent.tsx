interface NameAndPercentProps {
  link: string;
  name: string;
  percent: number;
  period: string;
}

const ProjectNameAndPercent = ({
  link,
  name,
  percent,
  period,
}: NameAndPercentProps) => {
  return (
    <>
      <h2 className="font-bold">
        <a className="hover:opacity-70 text-blue-600" href={link}>
          {name}
        </a>{" "}
        <span className="opacity-70 text-[1rem]">
          프로젝트 참여율 : {percent}%
        </span>
      </h2>
      <span className="text-gray-400 font-semibold">작업 기간 : {period}</span>
    </>
  );
};

export default ProjectNameAndPercent;
