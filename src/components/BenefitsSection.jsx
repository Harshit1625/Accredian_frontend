import tableData from "../utils/tabledata.json";
import Button from './Button'

const BenefitsSection = () => {
  return (
    <div className="flex relative justify-center gap-[3vw] items-center mt-[3vw] mb-[8vh] flex-col pt-6 pb-6">
      {/* heading */}
      <div className="gap-3 flex mt-5">
        <h1 className="text-[20px] font-bold">
          {"What are Referral"}{" "}
          <span className="text-blue-500">Benefits ?</span>
        </h1>
      </div>

      {/* table */}
      <table className="border shadow-2xl  p-9 w-full">
        <thead className="text-left bg-blue-100 rounded-lg">
          <tr>
            <th className="text-blue-400 p-4">Program</th>
            <th className="text-blue-400 p-4 text-center">Referrer Bonus</th>
            <th className="text-blue-400 p-4 text-center">Referee Bonus</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.referee}>
                <td className="p-4 border flex gap-2 items-center">
                  <span>
                    <img
                      className="h-[15px]"
                      src="/src/svgs/BenefitSection.svg"
                    />
                  </span>
                  <p>{data.program}</p>
                </td>
                <td className=" p-4 text-center border">{data.referrer}</td>
                <td className="p-4 text-center border">{data.referee}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
       {/* button */}
       <div className="w-[15vw]">
        <Button />
      </div>
    </div>
  );
};

export default BenefitsSection;
