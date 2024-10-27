import React from "react";
import Image from "next/image";
import d1 from "../../../public/assets/d1.jpg";
import d2 from "../../../public/assets/d2.jpg";
import d3 from "../../../public/assets/d3.jpg";

const Demo = () => {
  return (
    <div className="mx-auto sm:px-6 md:px-[7rem]">
      <div className="mx-auto max-w-ycdc-page py-[70px] mx-4">
        <div className="text-center text-3xl font-medium">
          We put <span className="text-brand">founders' interests&nbsp;</span>
          first.
        </div>
        <div className="mx-auto mb-0 mt-10 mt-8 grid max-w-lg gap-4 sm:my-10 lg:max-w-4xl lg:grid-cols-2">
          <div>
            <span className="mr-2 inline-block h-2 w-2 rotate-45 rounded-sm bg-brand"></span>
            We don’t take a board seat.
          </div>
          <div>
            <span className="mr-2 inline-block h-2 w-2 rotate-45 rounded-sm bg-brand"></span>
            We don’t demand 20% of your company.
          </div>
          <div>
            <span className="mr-2 inline-block h-2 w-2 rotate-45 rounded-sm bg-brand"></span>
            We don’t take weeks/months to decide to invest.
          </div>
          <div>
            <span className="mr-2 inline-block h-2 w-2 rotate-45 rounded-sm bg-brand"></span>
            We don’t charge fees.
          </div>
          <div>
            <span className="mr-2 inline-block h-2 w-2 rotate-45 rounded-sm bg-brand"></span>
            We don’t require decks, business plans, or MBAs.
          </div>
          <div>
            <span className="mr-2 inline-block h-2 w-2 rotate-45 rounded-sm bg-brand"></span>
            We don't tell you what to do. We only offer advice.
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
          <Image src={d1} alt="Demo 1" className="rounded-md h-[255px]"  />
          <Image src={d2} alt="Demo 2" className="rounded-md h-[255px]"/>
          <Image src={d3} alt="Demo 3" className="rounded-md h-[255px]" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
