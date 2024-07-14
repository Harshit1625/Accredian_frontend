import Button from "../components/Button";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center mb-[8vh] mt-[3vh]">
      <div className="flex justify-center rounded-md pl-2 lg:p-5 bg-blue-100 pr-5 lg:w-1/2 h-[115px] sm:h-[150px] md:h-[18vh] w-[60vw] sm:w-[50vw] md:w-[40vw] lg:h-[42vh] xl:h-[319px] shadow-2xl">
        {/* text-area */}
        <div className="flex flex-col gap-2 sm:gap-2 lg:gap-4 sm:mt-3 md:mt-1 lg:mt-4 xl:mt-1 p-5">
          <h1 className="font-bold text-[2.3vw] md:text-[1.7vw] lg:text-[2.5vw]">
            {"Let's Learn and"} <span className="text-blue-500">Earn</span>
          </h1>
          <h1 className="font-semibold text-[1.6vw] md:text-[1.2vw] lg:text-[1.7vw]">
            Get a chance to win upto{" "}
            <span className="text-blue-500">Rs.15000</span>
          </h1>
          <Button />
        </div>

        {/* image */}
        <div>
          <img
            className="h-[120px] sm:h-[19vh] sm:w-[30vw] md:h-[20vh] md:w-[40vw] w-[70vw] lg:h-[45vh] xl:h-[51vh] lg:w-[50vw]"
            src="/HeroSection.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
