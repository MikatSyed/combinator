import React from 'react';

const Learn = () => {
  // Define an array of link objects with their respective information
  const links = [
    {
      href: "/library",
      title: "YC Library",
      description: "Videos, podcasts, and essays for startup founders",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/learn-more-library.jpg"
    },
    {
      href: "/library",
      title: "YC Library",
      description: "Videos, podcasts, and essays for startup founders",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/learn-more-library.jpg"
    },
    {
      href: "/library",
      title: "YC Library",
      description: "Videos, podcasts, and essays for startup founders",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/learn-more-library.jpg"
    },
    {
      href: "/library",
      title: "YC Library",
      description: "Videos, podcasts, and essays for startup founders",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/learn-more-library.jpg"
    },
    {
      href: "/library",
      title: "YC Library",
      description: "Videos, podcasts, and essays for startup founders",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/learn-more-library.jpg"
    },
    {
      href: "/library",
      title: "YC Library",
      description: "Videos, podcasts, and essays for startup founders",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/learn-more-library.jpg"
    },
    // Add other links similarly
  ];

  return (
   <div className="mx-auto sm:px-6 md:px-[7rem]">
     <div className="mx-auto max-w-ycdc-page py-[70px] ">
      <div className="mb-12 text-center text-3xl font-medium">Want to learn more?</div>
      <div className="grid gap-8 md:grid-cols-3 px-4">
      
        {links.map((link, index) => (
          <a key={index} href={link.href} className="flex flex-row justify-between rounded-lg bg-white p-4">
            <div>
              <div className="font-bold">{link.title}</div>
              <div className="text-sm">{link.description}</div>
            </div>
            <div className="ml-4 h-[95px] w-[95px] flex-none rounded-lg bg-cover" style={{backgroundImage: `url(${link.imageUrl})`}}></div>
          </a>
        ))}
      </div>
    </div>
   </div>
  );
}

export default Learn;
