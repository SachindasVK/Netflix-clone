import { useLocation } from "react-router-dom";
import InputButton from "../InputButton/InputButton";
import LanguageSelect from "../Language/LanguageSelect";
import { Card } from "../ui/card";

const LandFooter = () => {
  const location = useLocation();
  const isHome = location.pathname === "/in";
  const isDetails = location.pathname.includes('/details')
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
    <>
      <div className="py-5 relative flex-col text-center bg-black font-semibold text-white">
        {isHome || !isDetails && (
          <>
            <div className=" py-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="flex justify-center">
              <InputButton />
            </div>
          </>
        )}
      </div>
      <div className="py-10 pl-33 bg-black text-stone-400 font-medium">
        Questions? Call{" "}
        <span className="underline cursor-pointer">000-800-919-1743</span>
      </div>
      <div className=" bg-black flex px-30 py-2 space-x-10">
        {footerDetails.map((link, index) => {
  return (
    <Card
      key={`card-${index}`}
      className="flex items-start relative p-0 border-0 w-52 h-[11.8rem] isolate bg-black rounded-none"
    >
      <div className="cursor-pointer underline p-2 space-y-4 text-stone-400 font-medium">
        {link.link1 && <div>{link.link1}</div>}
        {link.link2 && <div>{link.link2}</div>}
        {link.link3 && <div>{link.link3}</div>}
        {link.link4 && <div>{link.link4}</div>}
      </div>
    </Card>
  );
})}
      </div>

      <div className="pl-30 bg-black text-stone-400 space-y-10 pb-40">
        <LanguageSelect />
        <div>Netflix India</div>
        <div>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="cursor-pointer underline text-blue-500">
            Learn more.
          </span>
        </div>
      </div>
    </>
  );
};

export default LandFooter;
