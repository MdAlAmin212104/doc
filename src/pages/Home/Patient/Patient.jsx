import chart from './../../../assets/Media/chart.png'
const Patient = () => {
  return (
    <div className="bg-[#E1F5FF] relative h-[350px] py-5">
      <div className="max-w-[1160px] mx-auto">
      <h1 className="w-[532px] mx-auto font-semibold text-[48px] text-center text-[#020043]">
        Comprehensive Care for Every Patient
      </h1>
      <div className=" grid md:grid-cols-5 grid-cols-2 absolute">
        <div className="card bg-base-100 w-[216px] h-[312px] bottom-[140px] shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-[40px] font-semibold">90% </h2>
            <p>Patient satisfaction rate, reflecting our commitment.</p>
            <div className="card-actions justify-center">
              <img src={chart} alt="" className='w-[130px]' />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Patient;
