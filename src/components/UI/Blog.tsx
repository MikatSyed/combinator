import Image from "next/image";
import React from "react";

const Blog = () => {
  const sections = [
    {
      title: "The most experienced partners",
      description:
        "Each founder is assigned a dedicated group partner who has mentored hundreds of YC companies. They have more data on what it takes to build a successful startup than any other early stage startup advisor. These group partners read applications, interview companies, and mentor startups throughout the batch. You can access them in person, over email, and on Slack.",
      image:
        "https://www.ycombinator.com/vite/assets/most-experienced-partners-DX4ZPbr4.jpg",
    },
    {
      title: "Investor network",
      description:
        "YC companies have raised $85 billion dollars from the best investors in the world. Our founders have access to the YC Investor Database which has profiles and reviews for more than 50,000 startup investors.",
      image:
        "https://www.ycombinator.com/vite/assets/investor-network-DsrGWUIM.jpg",
    },
    {
      title: "Private social network only for founders",
      description:
        "YC founders get to benefit from the collective wisdom of over 9000 YC alumni. They can access these alums through Bookface, our private social network. We have a forum for asking questions to the community, a founder directory for finding specific people who can provide advice and intros, and a company directory for finding potential customers.",
      image:
        "https://www.ycombinator.com/vite/assets/secret-handbook-BLok8-bB.jpg",
    },
    {
      title: "Networks to build your team",
      description:
        "Through Work at a Startup and HN, we help our founders hire the small number of early engineers and other team members critical to finding product market fit. At any given time there are 150,000+ candidates searching for jobs at early stage YC companies.",
      image:
        "https://www.ycombinator.com/vite/assets/private-social-network-DAUtdNFy.jpg",
    },
  ];

  const demo = [
    {
      title: "Startup School",
      description: "YC's Group Partners teach you to build the foundation of a billion dollar company",
      url: "https://www.ycombinator.com/library/carousel/Startup%20School",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/startupschool.png"
    },
    {
      title: "Essays by Paul Graham",
      description: "A collection of essays by Y Combinator co-founder Paul Graham",
      url: "https://www.ycombinator.com/library/carousel/Startup%20School",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/startupschool.png"
    },
    {
      title: "Explore more content",
      description: "Visit the YC Library, the hub for YC's startup videos, essays, podcasts, and more",
      url: "https://www.ycombinator.com/library/carousel/Startup%20School",
      imageUrl: "https://yc-website.s3.us-west-2.amazonaws.com/why-yc/startupschool.png"// Add your image URL here if available
    }
  ];
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto sm:px-6 md:px-[7rem]">
          <div className="py-[70px] mx-4">
            <div className="text-center">
              <div className="mx-auto mb-12 max-w-xl text-center text-3xl font-medium">
                <p className="inline leading-[70px]">
                  YC is
                  <span className="mr-2  text-[#fb651e]">
                    {" "}
                    run by startup founders
                  </span>
                  who have built
                </p>
                <span className="inline leading-[45px] ml-2">
                  exactly what they wanted when starting and growing a startup.
                </span>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-[#f5f5ee] p-6 sm:p-10"
                >
                  <div className="relative w-full rounded-md">
                    <Image
                      src={section.image}
                      className="rounded-md blog_img"
                      alt={section.title}
                      layout="responsive"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className=" border-l-4 border-[#fb651e] text-l mb-3 border-l-4 border-brand pl-1 font-medium leading-4">
                    {section.title}
                  </div>
                  <div>{section.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
      {demo.map((data, index) => (
        <a key={index} href={data.url} className="flex flex-row justify-between rounded-lg bg-white p-4">
          <div>
            <div className="font-bold">{data.title}</div>
            <div className="text-sm">{data.description}</div>
          </div>
          {data.imageUrl && (
            <div className="ml-4 h-[95px] w-[95px] flex-none rounded-lg bg-cover" style={{backgroundImage: `url(${data.imageUrl})`}}></div>
          )}
        </a>
      ))}
    </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Blog;
