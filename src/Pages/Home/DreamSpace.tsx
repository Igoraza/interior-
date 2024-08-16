import React from "react";
const DreamSpace: React.FC = () => {
  return (
    <div className="border border-gray-900">
      <h1 className="p-4 text-3xl lg:text-6xl max-w-lg  font-bold ">
        Create your Dream Space.
      </h1>

      <div className="flex flex-wrap justify-center p-8">
        <FeatureCard
          icon={<img src="/svg/home.svg" alt="home image with tool" />}
          title="Smooth workflow"
          description="We deliver the final work with great professional"
        />
        <FeatureCard
          icon={<img src="/svg/chair.svg" alt="home image with tool" />}
          title="Professionalism"
          description="We deliver the final work with great professional"
        />
        <FeatureCard
          icon={<img src="/svg/brick.svg" alt="home image with tool" />}
          title="Trusted platform"
          description="We deliver the final work with great professional"
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2 font-sans">{title}</h2>
      <p className="text-gray-600 font-sans max-w-xs">{description}</p>
    </div>
  );
};

export default DreamSpace;
