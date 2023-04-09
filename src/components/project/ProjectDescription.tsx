interface DescriptionProps {
  description: string;
}

const ProjectDescription = ({ description }: DescriptionProps) => {
  return <span className="mb-3">{description}</span>;
};

export default ProjectDescription;
