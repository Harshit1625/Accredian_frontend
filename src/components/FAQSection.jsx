const FAQSection = () => {
  return (
    <div className="flex relative justify-center gap-[3vw] items-center mt-[3vw] mb-[8vh] flex-col pt-6 pb-6">
      {/* heading */}
      <div className="gap-3 flex mt-5">
        <h1 className="text-[20px] font-bold">
          {"Frequently Asked"}{" "}
          <span className="text-blue-500">Questions !!</span>
        </h1>
      </div>

      {/* text area */}
      <div className="flex flex-col justify-center items-center gap-9 lg:w-1/2 w-8/12 text-center">
        <h1 className="text-blue-400 font-bold lg:text-[1.5vw] text-[2.0vw]">
          Do I need to have prior Product Management and Project Management
          experience to enroll in the program?
        </h1>
        <h1 className="font-semibold text-[1.7vw] lg:text-[0.9vw]">
          No, the program is designed to be inclusive of all levels of
          experience. All topics will be covered from the basics, making it
          suitable for individuals from any field of work.
        </h1>
      </div>

      {/* svg */}
      <img className="lg:h-[20vh]  mt-9 h-[5vh] lg:w-[50vw]" src="/FAQ.svg"/>
    </div>
  );
};

export default FAQSection;
