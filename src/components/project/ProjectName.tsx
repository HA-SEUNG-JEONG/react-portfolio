interface NameProps {
  name: string;
}

const ProjectName = ({ name }: NameProps) => {
  return <h1 className="font-bold">{name}</h1>;
};

export default ProjectName;
