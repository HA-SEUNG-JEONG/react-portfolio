interface DescriptionProps {
  description: string;
}

const ProjectDescription = ({ description }: DescriptionProps) => {
  return <p className="mb-3 font-bold">{description}</p>;
};

export default ProjectDescription;
