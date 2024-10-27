import React from "react";
import about from "../../../public/assets/about.png";
import Image from "next/image";
import Link from "next/link";
const DiscountsPage = () => {
  return (
    <>
      <div className="mx-auto px-6 md:px-[7rem]">
        <div className="mx-auto ">
          <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] border-t  border-b pt-6 lg:pt-9 pb-6 lg:pb-9">
            <p className="text-3xl">Safe Financing Documents</p>
            <p className="text-xs text-gray-300">By Carolynn Levy</p>
          </section>
          <div className="flex justify-between">
            <section className=" relative isolate z-0 border-retro-sectionBorder border-b pt-10 pr-5 lg:pt-9 pb-6 lg:pb-9 md:w-[70%]">
              <div className="">
                <div className="py-6">
                  <p className="text-[#fb651e] text-md font-medium py-6">DOWNLOAD THE SAFE</p>
                  <p className="text-md font-medium py-6">US companies</p>
                  <p className="text-sm">
                  There are three versions of the post-money safe intended for use by US companies, plus an optional side letter.    .
                  </p>
                  <ul className="list-disc text-sm pl-6 text-blue-600 underline">
                    <li >
                    Safe: Valuation Cap, no Discount
                    </li>
                    <li>
                    Safe: Discount, no Valuation Cap
                    </li>
                    <li>
                    Safe: MFN, no Valuation Cap, no Discount
                    </li>
                    <li>
                    Pro Rata Side Letter
                    </li>
                    <li>
                    Safe User Guide
                    </li>
                  </ul>

                  <p className="text-md font-medium py-6">Non-US companies</p>
                  <p className="text-sm">
                  There is one version of the post-money safe, Valuation Cap (no discount), intended for use by companies formed in Canada, Cayman and Singapore, plus an optional side letter for each country. Before using any of these international forms, you should consult with a lawyer licensed in the relevant country.
                  </p>
                  <ul className="list-disc text-sm pl-6 text-blue-600 underline">
                    <li >
                    Safe: Valuation Cap, No Discount (Canada)
                    </li>
                    <li>
                    Pro Rata Side Letter (Canada)
                    </li>
                    <li>
                    Safe: Valuation Cap, No Discount (Caymans)
                    </li>
                    <li>
                    Pro Rata Side Letter (Caymans)
                    </li>
                    <li>
                    Safe: Valuation Cap, No Discount (Singapore)
                    </li>
                    <li>
                    Pro Rata Side Letter (Singapore)
                    </li>
                  </ul>
                  
                      <p className="text-[#fb651e] text-md font-medium py-6">ABOUT THE SAFE</p>
                    
                 
                 
                  <p className="text-md">
                  Y Combinator introduced the safe (simple agreement for future equity) in late 2013, and since then, it has been used by almost all YC startups and countless non-YC startups as the main instrument for early-stage fundraising.
                  </p>
                  <p className="text-sm">
                  Our first safe was a “pre-money” safe, because at the time of its introduction, startups were raising smaller amounts of money in advance of raising a priced round of financing (typically, a Series A Preferred Stock round). The safe was a simple and fast way to get that first money into the company, and the concept was that holders of safes were merely early investors in that future priced round. But early stage fundraising evolved in the years following the introduction of the original safe, and now startups are raising much larger amounts of money as a first “seed” round of financing. While safes are being used for these seed rounds, these rounds are really better considered as wholly separate financings, rather than “bridges” into later priced rounds.
                  </p>
                  <p className="text-sm">
                  In 2018 we released the “post-money” safe. By “post-money,” we mean that safe holder ownership is measured after (post) all the safe money is accounted for - which is its own round now - but still before (pre) the new money in the priced round that converts and dilutes the safes (usually the Series A, but sometimes Series Seed). The post-money safe has what we think is a huge advantage for both founders and investors - the ability to calculate immediately and precisely how much ownership of the company has been sold. It’s critically important for founders to understand how much dilution is caused by each safe they sell, just as it is fair for investors to know how much ownership of the company they have purchased.
                  </p>
                  <p className="text-sm py-3">
                  The safe has two fundamental features that are critically important for startups:
                  </p>
                 
                  <ul className="list-disc text-sm pl-6 ">
                    <li >
                    It allows for <span><Link href="#">high resolution fundraising</Link></span>. Startups can close with an investor as soon as both parties are ready to sign and the investor is ready to wire money, instead of trying to coordinate a single close with all investors simultaneously. In fact, high resolution fundraising may be much easier now that both founders and investors have more certainty and transparency into what each side is giving and getting.
                    </li>
                    <li>
                    As a flexible, one-document security without numerous terms to negotiate, safes save startups and investors money in legal fees and reduce the time spent negotiating the terms of the investment. Startups and investors will usually only have to negotiate one item: the valuation cap. Because a safe has no expiration or maturity date, there should be no time or money spent dealing with extending maturity dates, revising interest rates or the like.
                    </li>
                   
                  </ul>



                
                  <p className="text-sm py-3">
                  Whether you are using the safe for the first time or are already familiar with safes, we recommend reviewing our Safe User Guide (geared primarily at US companies). The Safe User Guide explains how the safe converts, with sample calculations, an explanation of the pro rata side letter, and suggestions for best use.
                  </p>
               
                 
                  <p className="text-sm py-3">
                  While the safe may not be suitable for all financing situations, the terms are intended to be balanced, taking into account both the startup’s and the investors’ interests. There is a trade-off between simplicity and comprehensiveness, so while not every edge case is addressed, we believe the safe covers the most pertinent and common issues. Both parties are encouraged to have their lawyers review the safe if they want to, but we believe it provides a starting point that can be used in most situations, without modifications. We hold this belief because of our firsthand experience seeing and helping hundreds of companies fundraise every year, as well as the thoughtful feedback we received from the founders, investors, lawyers and accountants with whom we have shared drafts of every iteration of the safe.
                  </p>
                
                  <p className="text-md py-3 font-medium">
                  Needless to say, YC does not assume responsibility for the contents of, or the consequence of using, any version of the safe or any other document found on our website. Before using any of these forms, you should consult with a lawyer licensed in the country where your company was formed.
                  </p>
           
                </div>
              </div>
            </section>
            <section className=" relative isolate z-0 border-retro-sectionBorder sm:pr-[13px]  border-b pt-6 lg:pt-9 pb-6 lg:pb-9">
              <nav className="hidden sticky top-4 self-start bg-white p-6 md:block py-6">
                <div className="space-y-4">
                  <ol>
                    <li className="my-0 text-sm text-black [&amp;_a]:text-black [&amp;_a]:no-underline">
                      <a className="text-base text-[#999]">Contents</a>
                      <ol className="mt-1 space-y-0.5 text-[#555] list-decimal">
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#the-goal"
                          >
                            Downloads
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#funding"
                          >
                            About the Safe
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                 
                  <ol>
                    <li className="my-0 text-sm text-black [&amp;_a]:text-black [&amp;_a]:no-underline">
                      <a className="text-base text-[#999]">Elsewhere</a>
                      <ol className="mt-1 space-y-0.5 text-[#555] list-decimal">
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#ongoing-office-hours"
                          >
                          Template Sales and Cloud Service Agreements
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#ongoing-office-hours"
                          >
                         Series A Term Sheet Template
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#ongoing-office-hours"
                          >
                       About Y Combinator
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#ongoing-office-hours"
                          >
                     Frequently Asked Questions
                          </a>
                        </li>
                        <li className="ml-5">
                          <a
                            className="block rounded text-sm font-bold py-0.5 pl-1"
                            href="#ongoing-office-hours"
                          >
                    Handshake Deal Protocol
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

export default DiscountsPage;
