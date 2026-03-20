import React, { useState } from "react";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const questions = [
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
      title: "Where can I watch?",
      description:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      description:
        "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      description:
        "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      description:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <div className="bg-black text-white py-4 px-4 sm:px-6 md:px-20 lg:px-30 space-y-1">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold pb-4 text-center md:text-left">
        Frequently Asked Questions
      </div>

      {questions.map((question, index) => (
        <div key={index} className="space-y-0.5">
          {/* Question Title */}
          <div
            onClick={() => handleToggle(index)}
            className="bg-stone-700 cursor-pointer p-5 sm:p-4 md:p-5 flex justify-between items-center text-lg sm:text-xl md:text-1xl transition-all duration-200 hover:bg-stone-600"
          >
            <div>{question.title}</div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-extralight">
              {activeIndex === index ? "×" : "+"}
            </span>
          </div>

          {/* Answer Description */}
          <div
            className={`overflow-hidden bg-stone-700 transition-all duration-300 text-sm sm:text-base md:text-lg ${
              activeIndex === index ? "max-h-[1000px] p-3 sm:p-4 md:p-5" : "max-h-0"
            }`}
          >
            {question.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;