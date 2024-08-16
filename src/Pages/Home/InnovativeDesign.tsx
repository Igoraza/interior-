import React from 'react';

const InnovativeDesign: React.FC = () => {
  return (
    <div className="min-h-screen border border-gray-900">
      <div className="flex justify-end p-3 lg:p-5">
        <h2 className="text-7xl max-w-2xl text-right">
          Providing Innovative Interior Design.
        </h2>
      </div>
      {/* grid box section */}
      <div className="flex items-end">
        <div className="h-96 w-72 lg:h-[600px] lg:w-[940px] bg-gray-400" />
        <div className="relative right-12 lg:right-32 z-50 bottom-0 border-l-8 border-t-8 border-white w-full h-72 bg-gray-400 rounded-br-[600px]" />
      </div>
      <div className="flex justify-end relative bottom-44">
        <div className="h-96 w-96 lg:w-[940px] bg-amber-300 rounded-t-full p-4 flex items-center">
          
        </div>
      </div>
    </div>
  );
};

export default InnovativeDesign;
