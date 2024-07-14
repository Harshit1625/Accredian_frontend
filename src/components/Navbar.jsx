

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
    {/* logo */}
      <div className="logo">
      <img src="/src/svgs/Navbar.svg"/>
      </div>

      {/* //options */}
      <div className="options text-[13px] font-semibold">
        <ul className="hidden lg:flex justify-center items-center gap-8 pt-2 pl-2 pr-2">
            <li>Home</li>
            <li>Benefits</li>
            <li>FAQs</li>
            <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
