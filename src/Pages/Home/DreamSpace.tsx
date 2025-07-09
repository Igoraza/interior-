import React from "react";
import BlurBackground from "../../Components/BlurBackground";

const DreamSpace: React.FC = () => {
  return (
    <div className="border border-t-0 border-gray-300 lg:px-16 min-h-screen">
      <div className="flex items-center justify-between">
      <h1 className="p-4 text-3xl lg:text-6xl max-w-lg font-bold">
        Create your Dream Space.
      </h1>
      <BlurBackground/>
      </div>
      
      <div className="flex flex-wrap justify-center lg:justify-between pl-16 mt-12 mb-12">
        <FeatureCard
          icon={<img src="/svg/home.svg" alt="home image with tool" />}
          title="Smooth workflow"
          description="From design to delivery, our process ensures efficiency, transparency, and quality at every step."
        />
        <FeatureCard
          icon={<img src="/svg/chair.svg" alt="chair image" />}
          title="Professionalism"
          description="Our team combines creativity with discipline to bring your ideas to life with precision and care.
"
        />
        <FeatureCard
          icon={<img src="/svg/brick.svg" alt="brick image" />}
          title="Trusted platform"
          description="We use top-grade materials and expert workmanship to build spaces that are both beautiful and durable."
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
      <div className="mb-4 -ml-2">{icon}</div>
      <h2 className="text-xl font-semibold mb-2 font-sans">{title}</h2>
      <p className="text-gray-600 font-sans max-w-xs">{description}</p>
    </div>
  );
};

export default DreamSpace;