interface NameProps {
  name: string;
}

const ProjectName = ({ name }: NameProps) => {
  return <span className="font-bold">{name}</span>;
};

export default ProjectName;
