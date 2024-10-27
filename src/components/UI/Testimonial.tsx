import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
            name: "Marc Andreessen",
            title: "General Partner, Andreessen Horowitz",
            quote: "Combinator is the best program for creating top-end entrepreneurs that has ever existed.",
            image: "/assets/u1.jpg"
        },
        {
            name: "Ron Conway",
            title: "Founder, SV Angel",
            quote: "Y Combinator is the best startup accelerator in the world. YC helps their companies a lot, and the YC community is a huge asset for the companies that go through the program",
            image: "/assets/u2.jpg"
        },
        {
            name: "Brian Chesky",
            title: "Founder, Airbnb (YC W09)",
            quote: "At YC, we were challenged to do things that don't scale – to start with the perfect experience for one person, then work backwards and scale it to 100 people who love us. This was the best piece of advice we've ever received.",
            image: "/assets/u3.jpg"
        },
        {
            name: "Patrick Collison",
            title: "Founder, Stripe (YC S09)",
            quote: "I doubt that Stripe would have worked without YC. It's that simple. Acquiring early customers, figuring out who to hire, closing deals with banks, raising money – YC's partners were closely involved and crucially helpful.",
            image: "/assets/u4.jpg"
        }
    ];

    return (
         <div className='mx-auto sm:px-6 md:px-[7rem]'>
         <div className="mx-[-13px] px-[13px] ">
            <div className="mx-auto  py-[70px] mx-4">
                <div className="mb-10 text-center text-3xl font-medium">Hear more from the community.</div>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-row mb-10 sm:px-[2rem]">
                        <img src={testimonial.image} alt={testimonial.name } className="mr-5 h-[60px] w-[60px] min-w-[60px] rounded-lg" />
                        <div className="flex flex-col">
                            <div className="text-lg">"{testimonial.quote}"</div>
                            <div className="flex flex-row flex-wrap gap-x-2">
                                <div><b>{testimonial.name}</b><span>,</span></div>
                                <span>{testimonial.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
         </div>
    );
}

export default Testimonial;
