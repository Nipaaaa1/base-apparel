const Hero = () => {
  return (
    <>
      <img
        className=" order-2 hidden h-screen w-max md:block"
        src="/images/hero-desktop.jpg"
        alt=""
      />
      <img
        className="order-1 h-max w-full md:hidden "
        src="/images/hero-mobile.jpg"
        alt=""
      />
    </>
  );
};

export default Hero;
