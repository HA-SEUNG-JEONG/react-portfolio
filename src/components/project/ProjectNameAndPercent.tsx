interface NameAndPercentProps {
    link?: string;
    name: string;
    percent?: number;
    period: string;
}

const ProjectNameAndPercent = ({
    link,
    name,
    percent,
    period
}: NameAndPercentProps) => {
    return (
        <>
            <h2 className="font-bold">
                <a className="text-blue-600" href={link}>
                    {name}
                </a>
            </h2>
            <span className="text-gray-400 font-medium text-[14px]">
                기간 : {period}
            </span>
        </>
    );
};

export default ProjectNameAndPercent;
