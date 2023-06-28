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
    <h1 className="font-bold">
      <a className="hover:opacity-70 underline underline-offset-4" href={link}>
        {name}
      </a>{" "}
      <span className="text-blue-600">프로젝트 참여율 : {percent}%</span>
    </h1>
  );
};

export default ProjectNameAndPercent;
