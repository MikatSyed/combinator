import React from "react";

const CofounderPage = () => {
  const profiles = [
    {
      name: "Vrinda",
      achievement:
        "I built and managed the Visa platform that powers the Chase Sapphire Reserve.",
      university: "Haas",
      company: "Visa",
      bgColor: "#15284B",
      textColor: "#FDB515",
      imgSrc: "https://www.ycombinator.com/vite/assets/daryl-49F1QQZ8.png",
      alt: "Vrinda's profile",
    },
    {
      name: "Bryant",
      achievement:
        "Scored a perfect 180 (99.99 percentile) on my LSAT and was on law review at Harvard Law School.",
      university: "Harvard",
      company: "Microsoft",
      bgColor: "#A41034",
      textColor: "white",
      imgSrc: "https://www.ycombinator.com/vite/assets/daryl-49F1QQZ8.png",
      alt: "Bryant's profile",
    },
    {
      name: "Bryant",
      achievement:
        "Scored a perfect 180 (99.99 percentile) on my LSAT and was on law review at Harvard Law School.",
      university: "Harvard",
      company: "Microsoft",
      bgColor: "#A41034",
      textColor: "white",
      imgSrc: "https://www.ycombinator.com/vite/assets/daryl-49F1QQZ8.png",
      alt: "Bryant's profile",
    },
    {
      name: "Bryant",
      achievement:
        "Scored a perfect 180 (99.99 percentile) on my LSAT and was on law review at Harvard Law School.",
      university: "Harvard",
      company: "Microsoft",
      bgColor: "#A41034",
      textColor: "white",
      imgSrc: "https://www.ycombinator.com/vite/assets/daryl-49F1QQZ8.png",
      alt: "Bryant's profile",
    },
    {
      name: "Bryant",
      achievement:
        "Scored a perfect 180 (99.99 percentile) on my LSAT and was on law review at Harvard Law School.",
      university: "Harvard",
      company: "Microsoft",
      bgColor: "#A41034",
      textColor: "white",
      imgSrc: "https://www.ycombinator.com/vite/assets/daryl-49F1QQZ8.png",
      alt: "Bryant's profile",
    },
    {
      name: "Bryant",
      achievement:
        "Scored a perfect 180 (99.99 percentile) on my LSAT and was on law review at Harvard Law School.",
      university: "Harvard",
      company: "Microsoft",
      bgColor: "#A41034",
      textColor: "white",
      imgSrc: "https://www.ycombinator.com/vite/assets/daryl-49F1QQZ8.png",
      alt: "Bryant's profile",
    },
    // Add more profiles here
  ];
  return (
    <div>
      <section className="mx-auto sm:px-6 md:px-[7rem]">
        <div className="mx-[-13px] px-[13px]  ">
          <div className=" py-[70px]">
            <div className="relative flex flex-col items-center md:block">
              <img
                alt="co-founder emojis"
                className="pointer-events-none mb-4 mt-[-70px] w-[50%] md:hidden"
                src="https://www.ycombinator.com/vite/assets/cfm_profiles-Dm-05vp5.png"
              />
              <div className="flex flex-row items-start">
                <div className="flex flex-col items-center justify-start gap-4 md:mt-14 md:max-w-[60%] md:items-start md:gap-4 lg:gap-6">
                  <h1 className="relative flex flex-row justify-center gap-1 text-center font-bold md:gap-2 md:text-left">
                    <div className="md:flex md:flex-row md:gap-2">
                      <div className="whitespace-nowrap text-3xl text-[#fb651e] md:text-4xl">
                        Y Combinator
                      </div>
                      <div className="whitespace-nowrap text-3xl text-black md:text-4xl">
                        Co‑Founder Matching
                      </div>
                    </div>
                  </h1>
                  <div className="text-center text-2xl md:text-left md:text-3xl">
                    Where savvy founders go to meet potential co‑founders
                  </div>
                  <div className="flex flex-row justify-center gap-x-6 md:justify-start">
                    <button className="bg-[#fb651e]  text-white font-normal py-3 px-12 rounded">
                      Sign Up
                    </button>
                    <button className=" bg-white hover:bg-[#fb651e] hover:text-white text-[#fb651e] border border-[#fb651e] font-normal py-3 px-12 rounded">
                      Sign In
                    </button>
                  </div>
                </div>
                <div className="ml-5 hidden md:block md:w-80">
                  <img
                    alt="co-founder emojis"
                    className="pointer-events-none"
                    src="https://www.ycombinator.com/vite/assets/cfm_profiles-Dm-05vp5.png"
                  />
                  <div className="text-md px-4 text-center italic">
                    (Actual founders who met on this site and got funded by YC.)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white ">
        <div className="mx-auto sm:px-6 md:px-[7rem]">
          <div className="py-[70px] mx-4">
            <div className="mx-4">
              <div className=" mb-12 ">
                <p className=" text-2xl md:text-3xl font-medium">
                  We know even the best founders don't always have people in
                  their network who are ready to start a company
                </p>
                <p className="py-6 text-lg">
                  That's why we built co-founder matching.
                </p>
              </div>

              <div className="md:mx-none mx-auto grid max-w-md grid-cols-1 gap-[40px] xs:grid-cols-2 md:max-w-full md:grid-cols-3">
                <div className="flex flex-col">
                  <div className=" border-l-4 border-[#fb651e]">
                    <p className="mb-3 pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px] font-medium">
                      {" "}
                      Good for all stages
                    </p>
                    <p className="mb-3 pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px]">
                      Whether you're getting to know people for the future, or
                      ready to go now.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className=" border-l-4 border-[#fb651e]">
                    <p className="mb-3 pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px] font-medium">
                      {" "}
                      Come with or without an idea
                    </p>
                    <p className="mb-3 pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px]">
                      Don't have the right idea yet? This is a great place to
                      find it.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className=" border-l-4 border-[#fb651e]">
                    <p className="mb-3 pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px] font-medium">
                      Explore on your own terms
                    </p>
                    <p className="mb-3 pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px]">
                      No commitment, no equity, no strings attached.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-4 md:px-[7rem] mt-[5rem]">
        <div className="">
          <p className="text-2xl md:text-3xl font-medium mb-5">
            World-class founders are on co-founder matching
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col justify-between space-y-4 rounded border border-gray-300 bg-white p-4"
            >
              <div className="m-4 text-lg">{profile.achievement}</div>
              <div className="ml-4 mt-5 flex flex-row items-center justify-start space-x-4 text-base">
                <div className="flex flex-row items-center space-x-2">
                  <img
                    className="pointer-events-none h-16 rounded-full"
                    src={profile.imgSrc}
                    alt={profile.alt}
                  />
                  <div>{profile.name}</div>
                </div>
                <div
                  style={{
                    backgroundColor: profile.bgColor,
                    color: profile.textColor,
                  }}
                  className="rounded px-2 py-1"
                >
                  {profile.university}
                </div>
                <div className="rounded bg-gray-300 px-2 py-1 text-black">
                  {profile.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white ">
        <div className="sm:px-6 md:px-[7rem] ">
          <div className="mx-4  py-[70px]">
            <div className="prose prose-sm sm:prose-base mb-2 max-w-full sm:max-w-full">
              <span className="text-2xl font-bold md:text-3xl mb-5">
                The largest network of its kind — over 100K matches made
              </span>
              <p className="my-4">Active profiles in top cities</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">3,200</div>
                <div className="flex flex-row items-center justify-center">
                  <div>San Francisco</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">3,000</div>
                <div className="flex flex-row items-center justify-center">
                  <div>New York City</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">2,900</div>
                <div className="flex flex-row items-center justify-center">
                  <div>London</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">1,900</div>
                <div className="flex flex-row items-center justify-center">
                  <div>Bangalore</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">1,400</div>
                <div className="flex flex-row items-center justify-center">
                  <div>Los Angeles</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">1,200</div>
                <div className="flex flex-row items-center justify-center">
                  <div>Toronto</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">800</div>
                <div className="flex flex-row items-center justify-center">
                  <div>Berlin</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">700</div>
                <div className="flex flex-row items-center justify-center">
                  <div>Paris</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">700</div>
                <div className="flex flex-row items-center justify-center">
                  <div>Seattle</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
                <div className="text-2xl">600</div>
                <div className="flex flex-row items-center justify-center">
                  <div>Singapore</div>
                </div>
              </div>
            </div>
            <div className="prose prose-sm sm:prose-base mt-6 max-w-full sm:max-w-full">
              <p className="lead">
                We also run exclusive in-person co-founder matching meetups for
                founders in SF and NYC
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-[7rem] ">
        <div className="mx-[-13px] px-[13px]  ">
          <div className="mx-auto max-w-ycdc-page py-[70px]">
            <div className="prose prose-sm sm:prose-base max-w-full sm:max-w-full md:w-full">
              <span className="text-2xl font-bold md:text-3xl">
                Built with YC's expertise
              </span>
              <p className="lead">
                We've distilled all of YC's knowledge about the make-up of
                successful founding teams into our matching engine — and into
                our confidential co-founder matching handbook.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="md:px-[7rem] ">
          <div className=" py-[70px] mx-4 md:mx-0">
            <div className="prose prose-sm sm:prose-base mb-6 ">
              <span className="text-2xl font-bold md:text-3xl">
                From YC companies who met on co-founder matching
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col justify-between space-y-2 rounded border border-gray-300 bg-white p-4">
                <div className="m-4 text-lg">
                  Without this we never would have met, done YC, or started this
                  company.
                </div>
                <div className="ml-4 mt-5 flex flex-row items-center justify-start space-x-2 text-sm">
                  <img
                    className="h-10 rounded-full"
                    src="https://www.ycombinator.com/vite/assets/oliver-BLufwa3Y.png"
                    alt="profile headshot"
                  />
                  <img
                    className="h-10 rounded-full"
                    src="https://www.ycombinator.com/vite/assets/royce-Bk7XUyNt.png"
                    alt="profile headshot"
                  />
                  <div>Curtis and Matthew</div>
                  <a
                    className="font-bold no-underline hover:underline"
                    href="https://www.ycombinator.com/companies/whalesync"
                    target="_blank"
                  >
                    Whalesync
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-2 rounded border border-gray-300 bg-white p-4">
                <div className="m-4 text-lg">
                  Without this we never would have met, done YC, or started this
                  company.
                </div>
                <div className="ml-4 mt-5 flex flex-row items-center justify-start space-x-2 text-sm">
                  <img
                    className="h-10 rounded-full"
                    src="https://www.ycombinator.com/vite/assets/oliver-BLufwa3Y.png"
                    alt="profile headshot"
                  />
                  <img
                    className="h-10 rounded-full"
                    src="https://www.ycombinator.com/vite/assets/royce-Bk7XUyNt.png"
                    alt="profile headshot"
                  />
                  <div>Curtis and Matthew</div>
                  <a
                    className="font-bold no-underline hover:underline"
                    href="https://www.ycombinator.com/companies/whalesync"
                    target="_blank"
                  >
                    Whalesync
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-2 rounded border border-gray-300 bg-white p-4">
                <div className="m-4 text-lg">
                  Without this we never would have met, done YC, or started this
                  company.
                </div>
                <div className="ml-4 mt-5 flex flex-row items-center justify-start space-x-2 text-sm">
                  <img
                    className="h-10 rounded-full"
                    src="https://www.ycombinator.com/vite/assets/oliver-BLufwa3Y.png"
                    alt="profile headshot"
                  />
                  <img
                    className="h-10 rounded-full"
                    src="https://www.ycombinator.com/vite/assets/royce-Bk7XUyNt.png"
                    alt="profile headshot"
                  />
                  <div>Curtis and Matthew</div>
                  <a
                    className="font-bold no-underline hover:underline"
                    href="https://www.ycombinator.com/companies/whalesync"
                    target="_blank"
                  >
                    Whalesync
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-2 rounded border border-gray-300 bg-white p-4">
                <div className="m-4 text-lg">
                  Without this we never would have met, done YC, or started this
                  company.
                </div>
                <div className="ml-4 mt-5 flex flex-row items-center justify-start space-x-2 text-sm">
                  <img
                    className="h-10 rounded-full"
                    src="https://www.ycombinator.com/vite/assets/oliver-BLufwa3Y.png"
                    alt="profile headshot"
                  />
                  <img
                    className="h-10 rounded-full"
                    src="https://www.ycombinator.com/vite/assets/royce-Bk7XUyNt.png"
                    alt="profile headshot"
                  />
                  <div>Curtis and Matthew</div>
                  <a
                    className="font-bold no-underline hover:underline"
                    href="https://www.ycombinator.com/companies/whalesync"
                    target="_blank"
                  >
                    Whalesync
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-row justify-center">
              <button className="bg-[#fb651e]  text-white font-normal py-3 px-12 rounded">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-[7rem] ">
        <div className="mx-[-13px] px-[13px] ">
          <div className="mx-auto  py-[70px]">
            <div className="prose prose-sm sm:prose-base max-w-full sm:max-w-full md:w-full">
              <h2 className="mb-5">
                <span className="text-2xl font-bold md:text-3xl ">
                  How does it work?
                </span>
              </h2>
              <div className="flex flex-col gap-4 text-lg md:text-xl">
                <div className="flex flex-row flex-nowrap items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3edd3] text-gray-600 md:h-16 md:w-16">
                    1
                  </div>
                  <div className="max-w-full">
                    <b>Create a profile</b> and tell us about yourself
                  </div>
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3edd3] text-gray-600 md:h-16 md:w-16">
                    2
                  </div>
                  <div className="max-w-full">
                    Our matching engine shows you profiles that fit your
                    preferences
                  </div>
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3edd3] text-gray-600 md:h-16 md:w-16">
                    3
                  </div>
                  <div className="max-w-full">
                    If a profile piques your interest,{" "}
                    <b>invite them to connect</b>
                  </div>
                </div>
                <div className="flex flex-row flex-nowrap items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3edd3] text-gray-600 md:h-16 md:w-16">
                    4
                  </div>
                  <div className="max-w-full">
                    If they accept your invite, <b>that's a match</b>! Find a
                    time to start the conversation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section  className="bg-white">
        <div className="md:px-[7rem] mx-4">
          <div className="mx-auto max-w-ycdc-page py-[70px]">
            <div className="prose prose-sm sm:prose-base mb-6 max-w-full sm:max-w-full md:w-full">
              <span className="text-2xl font-bold md:text-3xl">
                Frequently Asked Questions
              </span>
            </div>
            <div className="flex flex-col gap-4 space-y-6 text-lg md:text-xl">
              <div>
                <div>
                  <strong>Who is this for?</strong>
                </div>
                <div>
                  Anyone who is looking for a co-founder. You can have an idea
                  in mind or just be exploring. You can be already working
                  full-time on a startup or just interested in doing one in the
                  future.
                </div>
              </div>
              <div>
                <div>
                  <strong>
                    Does YC take equity in return for using this? Are there
                    strings attached?
                  </strong>
                </div>
                <div>No, co-founder matching is a completely free product.</div>
              </div>
              <div>
                <div>
                  <strong>
                    I'm not sure if I want to start a startup yet, can I use
                    co-founder matching to just meet people and see what
                    happens?
                  </strong>
                </div>
                <div>
                  Absolutely, co-founder matching is a great way to meet cool
                  people in your city who are interested in startups.
                </div>
              </div>
              <div>
                <div>
                  <strong>
                    Will my profile be public? Can my employer find me?
                  </strong>
                </div>
                <div>
                  No, your profile is not public to the internet. Your profile
                  is visible only to other people who have been approved for
                  co-founder matching.
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-row justify-center">
            <button className="bg-[#fb651e]  text-white font-normal py-3 px-12 rounded">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CofounderPage;
