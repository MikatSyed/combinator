import React from 'react';
import Image from 'next/image';

const Companies = () => {
  // Sample image data array
  const images = [];

  for (let i = 1; i <= 23; i++) {
    images.push({
      id: i,
      src: `/assets/c${i}.png`,
      alt: `Image ${i}`
    });
  }
  return (
    <div className="mx-auto md:px-[7rem] ">
    <div className="py-8">
      <h2 className="text-2xl text-bold text-center mb-4 py-6">Top YC companies</h2>

      <div className="px-4 grid grid-cols-2 gap-4 gap-y-8 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">

        {images.map((image) => (
          <div key={image.id} className="flex items-center justify-center rounded-lg bg-white px-3 py-4 h-[80px]">
            <Image src={image.src} alt={image.alt} width={80} height={60} />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Companies;
