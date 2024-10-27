import React from "react";
import about from "../../../public/assets/about.png";
import Image from "next/image";
const AboutPage = () => {
  return (
    <>
      <div className="mx-auto px-6 md:px-[7rem]">
        <div className="mx-auto ">
          <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] border-t  border-b pt-6 lg:pt-9 pb-6 lg:pb-9">
            <p className="text-3xl">What Happens at YC</p>
          </section>
          <div className="flex justify-between">
            <section className=" relative isolate z-0 border-retro-sectionBorder border-b pt-10 pr-5 lg:pt-9 pb-6 lg:pb-9 md:w-[70%]">
              <div className="">
                <div className="py-6">
                  <p className="text-[#fb651e] text-md font-medium py-6">INTRODUCTION</p>
                  <p className="text-sm">
                    People often ask us what happens at Y Combinator. Here is an
                    overview of what happens during the YC program and the
                    benefits you get as a YC founder. You can read more about
                    why you should apply to YC{" "}
                    <a href="https://ycombinator.com" id="here">
                      here
                    </a>
                    .
                  </p>
                  
                      <p className="text-[#fb651e] text-md font-medium py-6">THE YC PROGRAM</p>
                    
                 
                 
                  <p className="text-sm">
                    YC hosts two 3-month programs — one from January through
                    March, and one from July through September. Here’s what
                    happens during the 3 months of YC:
                  </p>

                  <p className="text-md font-medium py-6">The Goal</p>
                  <p className="text-sm">
                    The overall goal of YC is to help startups really take off.
                    They arrive at YC at all different stages. Some haven’t even
                    started working yet, and others have been launched for a
                    year or more. But whatever stage a startup is at when they
                    arrive, our goal is to help them to be in dramatically
                    better shape 3 months later.
                  </p>
                  <p className="text-sm">
                    For most startups, better shape translates into two things:
                    to have a better product with more users, and to have more
                    options for raising money.
                  </p>
                  <p className="text-sm py-3">
                    Startups at all stages benefit from the intensity of YC.
                    That’s probably the best word to describe the atmosphere.
                    For 3 months, it’s all startup, all the time. Everyone
                    around you—us, the other founders in your batch, the alumni,
                    the speakers, the investors—wants to help your startup
                    succeed. In that atmosphere it’s hard not to be highly
                    motivated. And that kind of extraordinary motivation is what
                    one needs to do something as difficult as starting a
                    startup.
                  </p>
                  <p className="text-sm py-3">
                    Many founders describe the 11 weeks leading up to Demo Day
                    as the most productive period in their lives. Though YC
                    continues after the 3 month cycle, and the alumni community
                    is an increasingly valuable resource, those 11 weeks are
                    still the most important thing. You can’t make people
                    something they’re not, but the right conditions can bring
                    out the best in them. And since most people have way more
                    potential than they realize, they’re often surprised by what
                    they’re capable of.
                  </p>
                  <p className=" text-md font-medium py-6">Funding</p>
                  <p className="text-sm py-3">
                    YC{" "}
                    <a href="https://ycombinator.com/deal" >
                      invests
                    </a>{" "}
                    $500,000 in every company on standard terms. Our $500K
                    investment is made on 2 separate safes:
                  </p>
                  <ul className="list-disc text-sm pl-6">
                    <li >
                      We invest $125,000 on a post-money safe in return for 7%
                      of your company (the “$125k safe”)
                    </li>
                    <li>
                      We invest $375,000 on an uncapped safe with a Most Favored
                      Nation (“MFN”) provision (the “MFN safe”)
                    </li>
                  </ul>
                  <p className="text-md font-medium py-6">
                  Groups
                  </p>
                  <p className="text-sm py-3">
                    During the batch, startups are sorted into 4 groups. Each
                    group is led by group partners who advise the founders in
                    one-on-one and group office hours. Each group is split into
                    12-14 sections (6-10 companies), so that founders get the
                    benefit of an intimate setting within the larger batch.
                  </p>
                  <p className="text-md font-medium py-6">
                    Office Hours
                  </p>
                  <p className="text-sm py-3">
                    Much of what takes place at YC happens during office hours.
                    Group partners host group office hours every two weeks and
                    one-on-one office hours as often as founders want. What
                    startups talk about at office hours depends on the stage of
                    the company and where they are in the YC cycle.
                  </p>
                  <figure className="py-2" >
                    <Image
                      src="https://www.ycombinator.com/blog/content/images/2023/05/img-office-hours-23c633bd985bc6fc42d6.png"
                      layout="responsive"
                      className="w-full h-auto object-cover object-center "
                     alt="about_Image"
                     height={0}
                     width={0}
                    />
                  </figure>
                  <p className="text-md font-medium py-6">
                   Bookface
                  </p>
                  <p className="text-sm py-3">
                    Bookface is the platform founders use to connect to one
                    another—imagine a combination of Facebook, Quora, and
                    LinkedIn. Each founder has a profile and can tag themselves
                    as an expert in any topic. If you have a question, need an
                    introduction, or want to poll for knowledge, you can post
                    the request to the forum on Bookface. The knowledge base of
                    the YC community is both broad and deep—the community
                    includes founders who are the world’s foremost experts in
                    everything from security to community building to nuclear
                    energy.
                  </p>
                  <p className="text-md font-medium py-6">
                   Batch Retreat
                  </p>
                  <p className="text-sm py-3">
                    In the first few weeks of the batch we host a 3-day,
                    in-person retreat. The retreat gives founders the
                    opportunity to get to know each other, their group partners,
                    and the YC team.
                  </p>
                  <p className="text-md font-medium py-6">
                   Alumni Talks
                  </p>
                  <p className="text-sm py-3">
                    Every week, we invite an eminent person from the startup
                    world to speak. Most speakers are successful startup
                    founders — the founders of Airbnb, Stripe, Doordash and
                    Ginkgo Bioworks often come back to tell the inside story of
                    what happened in the early days of their startups. Talks are
                    strictly off the record to encourage candor, because the
                    inside story of most startups is more colorful than the one
                    presented later to the public.
                  </p>
                  <p className="text-md font-medium py-6">
                   Public Launches
                  </p>
                  <p className="text-sm py-3">
                    Once a startup has something built that’s ready to launch,
                    we help founders figure out how to present it to users and
                    the press. We prepare founders for launches on community
                    sites like Product Hunt and Hacker News, and for their first
                    press pitches and interviews.
                  </p>
                  <p className="text-md font-medium py-6">
                   First Customers
                  </p>
                  <p className="text-sm py-3">
                    B2B and consumer companies often get their first 40-50
                    paying customers from the YC community. With that, you not
                    only get first customers, you get the smartest early product
                    feedback possible.
                  </p>
                  <p className="text-md font-medium py-6">
                 Weekly Meetups
                  </p>
                  <p className="text-sm py-3">
                    Throughout the batch, we host weekly meetups in San
                    Francisco. These events often feature special guests like
                    the founders of YC and successful YC founders.
                  </p>
                  <p className="text-md font-medium py-6">
                   Demo Day
                  </p>
                  <p className="text-sm py-3">
                    On <a href="https://ycombinator.com/demoday">Demo Day</a>,
                    the latest batch of Y Combinator-funded founders present
                    their companies to an audience of specially selected
                    investors and press. We doubt there’s another occasion when
                    such a large percentage of the top startup investors have
                    their attention focused on the same thing.
                  </p>
                  <p className="text-sm py-3">
                    In the weeks following Demo Day we keep in close touch with
                    the startups as they negotiate the fundraising maze, and
                    help them decipher the real messages in investors’ sometimes
                    deliberately ambiguous responses. Often we talk to the
                    investors ourselves, to find out what they’re really
                    thinking about a particular startup. Because YC-funded
                    startups are a known quantity to investors and get
                    introduced to enough of them to create serious price
                    competition, companies tend to get higher valuations than
                    they might otherwise.
                  </p>
                  <p className="text-[#fb651e] text-md font-medium py-6">
                 
                    BEYOND THE BATCH
                   
                  </p>
                  <p className="text-sm py-3">
                    YC doesn’t stop after the 3 month program ends. Here are
                    some of the resources available to YC alumni as their
                    companies grow.
                  </p>
                  <h3 className="text-[#fb651e] text-md font-medium py-6">
                    
                   ADVICE
                    
                  </h3>
                  <p className="text-md font-medium py-6">
                  
                  Ongoing office hours
                  
                  </p>
                  <p className="text-sm py-3">
                    Office hours don’t stop after the YC program. We have office
                    hours year round, and startups from all previous cycles can
                    book time whenever they want.
                  </p>
                  <h3 className="text-[#fb651e] text-md font-medium py-6">
                 
                     COMMUNITY
                    
                  </h3>
                  <p className="text-md font-medium py-6">
                   
                     Alumni community
                  
                  </p>
                  <p className="text-sm py-3">
                    Today the YC alumni community is probably the most powerful
                    community in the startup world. It’s powerful not just
                    because of its size, but also because its members have such
                    a strong commitment to helping one another.{" "}
                    <a className="text-blue-500 underline"
                      href="https://foundersatwork.posthaven.com/the-social-radar-what-i-did-at-y-combinator"
                      id="a-culture-of-helpfulness-has-been-an-important-part-of-yc-since-the-beginning"
                    >
                      A culture of helpfulness has been an important part of YC
                      since the beginning
                    </a>
                    , and founders know that if they ever come across a
                    challenge they need help with, they not only have the
                    partners at their disposal, they have 6,000+ domain experts
                    they can call on.
                  </p>
                  <p className="text-md font-medium py-6">
                    Alumni Reunion
                  </p>
                  <p className="text-sm py-3">
                    Each year, YC hosts a formal gathering of alumni. Exciting
                    things happen when you bring founders together — ideas are
                    exchanged, deals get made, problem solving happens amongst
                    peers.
                  </p>
                  <p className="text-md font-medium py-6">
               Founder Communities
                  </p>
                  <p className="text-sm py-3">
                    Founders have access to WhatsApp groups and Bookface
                    channels that reach specific communities. There are lists
                    for hardware, biotech, edtech, non-profits, international,
                    women founders, Black founders, Hispanic and Latino
                    founders, and more.
                  </p>
                  <p className="text-sm py-3">
                   Alumni Demo Day
                  </p>
                  <p className="text-sm py-3">
                    Active YC founders get an early look at the YC companies in
                    each batch at Alumni Demo Day.
                  </p>
                  <p className="text-md font-medium py-6">
                   Deals
                  </p>
                  <p className="text-sm py-3">
                    Each YC company receives access to discounts and free
                    accounts for over 100 products. Some of these are highly
                    significant, including hundreds of thousands of dollars of
                    free hosting for each company provided by major cloud
                    hosting companies.
                  </p>
                  <p className="text-[#fb651e] text-md font-medium py-6">
                  
                   BRAND
                   
                  </p>
                  <p className="text-md font-medium py-6">
                  
                  Credibility
                    
                  </p>
                  <p>
                    When one company in YC does well, the whole community
                    benefits. Because YC has such a strong track record, early
                    adopters, investors and press are often more willing to take
                    a look at YC founders, even if they’re first time founders.
                  </p>
                  <p className="text-md font-medium py-6">
                  Company Directory
                  </p>
                  <p className="text-sm py-3">
                    YC companies are showcased in the{" "}
                    <a
                     className="text-blue-500 underline"
                      href="https://ycombinator.com/companies"
                      id="yc-startup-directory"
                    >
                      YC Startup Directory
                    </a>
                    . Our startups can be filtered and discovered by potential
                    customers, investors, or hires.
                  </p>
                  <p className="text-[#fb651e] text-md font-medium py-6">
                   
                    HIRING
                  
                  </p>
                  <p className="text-md font-medium py-6">
                 
                    Work at a Startup
                  
                  </p>
                  <p className="text-sm py-3">
                    <a className="text-blue-500 underline" href="https://ycombinator.com/jobs"> Work at a Startup</a>{" "}
                    helps YC founders build their team — from first employees to
                    VPs of product and operations. Thousands of jobseekers
                    across hundreds of YC companies have landed roles through
                    the platform and extended YC community.
                  </p>
                  <p className="text-md font-medium py-6">
                   Hacker News
                  </p>
                  <p className="text-sm py-3">
                    <a href="https://news.ycombinator.com/" className="text-blue-500 underline">
                      HN
                    </a>{" "}
                    is a news aggregator where users can find and discuss the
                    latest news and submit content on anything that gratifies
                    one’s intellectual curiosity. YC alumni also post
                    engineering, product, and design jobs on HN.
                  </p>
                </div>
              </div>
            </section>
            <section className=" relative isolate z-0 border-retro-sectionBorder sm:pr-[13px]  border-b pt-6 lg:pt-9 pb-6 lg:pb-9">
              <nav className="hidden sticky top-4 self-start bg-white p-6 md:block py-6">
                <div className="space-y-4">
                  <ol>
                    <li className="my-0 text-sm text-black [&amp;_a]:text-black [&amp;_a]:no-underline">
                      <a className="text-base text-[#999]">THE YC PROGRAM</a>
                      <ol className="mt-1 space-y-0.5 text-[#555] list-decimal">
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#the-goal"
                          >
                            The Goal
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#funding"
                          >
                            Funding
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#groups"
                          >
                            Groups
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#office-hours"
                          >
                            Office Hours
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#bookface"
                          >
                            Bookface
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#batch-retreat"
                          >
                            Batch Retreat
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#alumni-talks"
                          >
                            Alumni Talks
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#public-launches"
                          >
                            Public Launches
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#first-customers"
                          >
                            First Customers
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#weekly-meetups"
                          >
                            Weekly Meetups
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#demo-day"
                          >
                            Demo Day
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <ol>
                    <li className="my-0 text-sm text-black [&amp;_a]:text-black [&amp;_a]:no-underline">
                      <a className="text-base text-[#999]">ADVICE</a>
                      <ol className="mt-1 space-y-0.5 text-[#555] list-decimal">
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#ongoing-office-hours"
                          >
                            Ongoing office hours
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <ol>
                    <li className="my-0 text-sm text-black [&amp;_a]:text-black [&amp;_a]:no-underline">
                      <a className="text-base text-[#999]">COMMUNITY</a>
                      <ol className="mt-1 space-y-0.5 text-[#555] list-decimal">
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#alumni-community"
                          >
                            Alumni community
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#alumni-reunion"
                          >
                            Alumni Reunion
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#founder-communities"
                          >
                            Founder Communities
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#alumni-demo-day"
                          >
                            Alumni Demo Day
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#deals"
                          >
                            Deals
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <ol>
                    <li className="my-0 text-sm text-black [&amp;_a]:text-black [&amp;_a]:no-underline">
                      <a className="text-base text-[#999]">BRAND</a>
                      <ol className="mt-1 space-y-0.5 text-[#555] list-decimal">
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#credibility"
                          >
                            Credibility
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#company-directory"
                          >
                            Company Directory
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <ol>
                    <li className="my-0 text-sm text-black [&amp;_a]:text-black [&amp;_a]:no-underline">
                      <a className="text-base text-[#999]">HIRING</a>
                      <ol className="mt-1 space-y-0.5 text-[#555] list-decimal">
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#work-at-a-startup"
                          >
                            Work at a Startup
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#hacker-news"
                          >
                            Hacker News
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
