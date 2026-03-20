import { useLocation } from "react-router-dom";
import InputButton from "../InputButton/InputButton";
import LanguageSelect from "../Language/LanguageSelect";
import { Card } from "../ui/card";

const LandFooter = () => {
  const location = useLocation();
  const isHome = location.pathname === "/in";
  const isDetails = location.pathname.includes("/details");

  const footerDetails = [
    {
      link1: "FAQ",
      link2: "Investor Relations",
      link3: "Privacy",
      link4: "Speed Test",
    },
    {
      link1: "Help Centre",
      link2: "Jobs",
      link3: "Cookie Preferences",
      link4: "Legal Notices",
    },
    {
      link1: "Account",
      link2: "Ways to Watch",
      link3: "Corporate Information",
      link4: "Only on Netflix",
    },
    {
      link1: "Media Centre",
      link2: "Terms of Use",
      link3: "Contact Us",
    },
  ];

  return (
    <footer className="bg-black font-medium w-full">
      {/* Input Section (conditionally rendered) */}
      {isHome && isDetails && (
        <div className="flex flex-col items-center text-center py-5 px-4 sm:px-6 md:px-10">
          <div className="py-3 text-white font-semibold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="flex justify-center w-full sm:w-auto">
            <InputButton />
          </div>
        </div>
      )}

      {/* Call Section */}
      <div className="py-5 px-4 sm:px-6 md:px-34 text-stone-400 font-medium text-center sm:text-left">
        Questions? Call{" "}
        <span className="underline cursor-pointer">000-800-919-1743</span>
      </div>

      {/* Footer Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-6 md:px-32 py-6">
        {footerDetails.map((link, index) => (
          <Card
            key={`card-${index}`}
            className="flex items-start p-2 border-0 w-full bg-black text-stone-400"
          >
            <div className="space-y-2 text-stone-400  cursor-pointer underline">
              {link.link1 && <div>{link.link1}</div>}
              {link.link2 && <div>{link.link2}</div>}
              {link.link3 && <div>{link.link3}</div>}
              {link.link4 && <div>{link.link4}</div>}
            </div>
          </Card>
        ))}
      </div>

      {/* Language & Legal Section */}
      <div className="flex flex-col space-y-4 px-4 sm:px-6 md:px-34 pb-20">
        <LanguageSelect />
        <div className="text-white">Netflix India</div>
        <div className="text-stone-400 text-sm sm:text-base">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="cursor-pointer underline text-blue-500">
            Learn more.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default LandFooter;
