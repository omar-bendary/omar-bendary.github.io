const Button = () => {
  const handleScroll = () => {
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="btn btn-outline sm:w-[188px] h-[52px] rounded-full bg-white text-[#5070D1] font-semibold text-[18px] leading-4 hover:text-white 2xl:hover:bg-[#5070D1] hover:bg-[#5070D1] w-40"
        onClick={handleScroll}
      >
        Hire Me
      </button>
    </div>
  );
};

export default Button;
