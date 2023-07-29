interface NameAndPercentProps {
  link: string;
  name: string;
  percent: number;
}

const ProjectNameAndPercent = ({
  link,
  name,
  percent,
}: NameAndPercentProps) => {
  return (
    <h2 className="font-bold">
      <a className="hover:opacity-70 text-blue-600" href={link}>
        {name}
      </a>{" "}
      <span className="opacity-70 text-[1rem]">
        프로젝트 참여율 : {percent}%
      </span>
    </h2>
  );
};

export default ProjectNameAndPercent;
