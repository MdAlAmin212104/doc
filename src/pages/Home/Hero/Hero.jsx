import hero1 from "./../../../assets/Media/Rectangle 5.png";
const Hero = () => {
  return (
    <div className="inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px,#C1D5DE),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px,#E1F5FF)] bg-[size:6rem_4rem]">
    <div
      className="hero h-[470px] rounded-[48px] bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url(${hero1})`
      }}
    >
      <div className="hero-overlay bg-opacity-40 rounded-[48px] max-w-[1160px]"></div>
    </div>
  </div>
  );
};

export default Hero;

{
  /* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */
}
