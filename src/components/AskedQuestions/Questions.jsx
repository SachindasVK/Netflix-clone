import React, { useState } from "react";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const quesions = [
    {
      title: "What is Netflix?",
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      description:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.",
    },
    {
      title: "Where can i watch?",
      description:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do i cancel",
      description:
        "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can i watch on Netflix",
      description:
        "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids",
      description:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  return (
   <div className="py-8 p-34 h-full text-white bg-black relative space-y-2">
  <div className="text-2xl font-bold pb-4">Frequently Asked Questions</div>

  {quesions.map((question, index) => {
    return (
      <div key={index}>
        <div
          onClick={() => handleToggle(index)}
          className="text-2xl bg-stone-700 p-[10px] flex items-center transition-all duration-200 hover:bg-stone-600 justify-between px-10 cursor-pointer"
        >
          <div>{question.title}</div>

          {activeIndex === index ? (
            <span className="text-6xl font-extralight mb-2">×</span>
          ) : (
            <span className="text-6xl font-extralight mb-2">+</span>
          )}
        </div>

        <div
          className={`overflow-hidden mt-px transition-all duration-300 text-2xl bg-stone-700 px-10 ${
            activeIndex === index ? "max-h-125 p-4" : "max-h-0"
          }`}
        >
          {question.description}
        </div>
      </div>
    );
  })}
</div>
  );
};

export default Questions;
