import Button from "./Button";

const HowDoISection = () => {
  return (
    <div className="flex relative justify-center gap-[3vw] items-center mt-[5vw] mb-[3vh] flex-col inner rounded-lg bg-blue-100 pt-6 pb-6">
      {/* heading */}
      <div className="gap-3 flex  mt-5">
        <h1 className="text-[20px] font-bold">
          {"How Do I "} <span className="text-blue-500">Refer ?</span>
        </h1>

      </div>
        {/* image */}
      <img className="lg:h-[55vh] " src="/src/svgs/HowDoI.svg" />

      {/* absolute images */}
      <div className="absolute flex flex-col items-center lg:top-[220px] xl:top-[210px] top-[102px] sm:top-[140px] md:top-[170px] left-[14vw]  gap-3 lg:gap-4 w-[12vw] lg:w-[11vw] lg:left-[14vw] xl:left-[19vw] text-center ">
        <img className="lg:h-[10vh] w-[6vw] mt-1 lg:w-[5vw]" src="/src/svgs/AddFriend.svg" />
        <p className="text-[1vw] lg:text-[0.8vw] font-semibold">
          Submit referrals through our website referral section easily.
        </p>
      </div>

      <div className="absolute flex flex-col items-center lg:top-[230px] xl:top-[214px] top-[102px] sm:top-[140px] md:top-[170px] left-[39vw]  gap-3 lg:gap-4 w-[12vw] lg:w-[11vw] lg:left-[39.3vw] xl:left-[38.6vw] text-center ">
        <img className="lg:h-[10vh] w-[6vw] mt-1 lg:w-[5vw]" src="/src/svgs/Note.svg" />
        <p className="text-[1.1vw] lg:text-[0.8vw] font-semibold">Referral joins an Accredian program.</p>
      </div>

      <div className="absolute flex flex-col items-center lg:top-[230px] xl:top-[210px] top-[102px] sm:top-[140px] md:top-[170px] left-[64vw]  gap-2 lg:gap-4 w-[12vw] lg:w-[11vw] lg:left-[64vw] xl:left-[58.5vw] text-center ">
        <img className="lg:h-[10vh] w-[6vw] mt-1 lg:w-[5vw]" src="/src/svgs/Bonus.svg" />
        <p className="text-[1.1vw] lg:text-[0.8vw] font-semibold">
          Both parties receive a bonus after 30 days of enrollment.
        </p>
      </div>

      {/* button */}
      <div className="w-[15vw]">
        <Button />
      </div>
    </div>
  );
};

export default HowDoISection;
