import React from 'react';

const DemoSection = () => {
  // Sample data array
  const demoData = [
    { title: "YC Top Companies List by Revenue", description: "Congratulations to the companies recognized on the inaugural YC Top Companies List by Revenue!" },
    { title: "YC Library", description: "Explore some of the best YC videos, podcasts, and essays from over the years. Come learn how to make something people want." },
    { title: "The Standard Deal", description: "When a company is accepted into the YC batch program, we invest a total of $500,000." }
  ];

  return (
  <div  className="mx-auto sm:px-6 md:px-[7rem]">
     <div className='py-8'>
     <div className="flex flex-wrap">
     
      {demoData.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 h-full flex flex-col">
            <h2 className="text-lg text-blue-500 mb-2">{item.title}</h2>
            <p className="text-md flex-grow">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
   </div>
  </div>
  );
};

export default DemoSection;
