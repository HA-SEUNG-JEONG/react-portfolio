interface DescriptionProps {
  description: string;
}

const ProjectDescription = ({ description }: DescriptionProps) => {
  return <p className="mb-3">{description}</p>;
};

export default ProjectDescription;
