const info = [
  {
    number: "3",
    title: "Years of experience",
  },
  {
    number: "20+",
    title: "Projects completed",
  },
  {
    number: "2 ",
    title: "Frameworks mastered",
  },
];

const Buttons = () => {
  return (
    <>
      <div className="flex justify-between flex-col gap-2 sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        {info.map((item, index) => {
          return (
            <div className="flex gap-1 lg:gap-2 justify-center align-center">
              <div className="w-[40px] text-xl lg:text-3xl xl:text-4xl flex align-center font-medium justify-center">
                {item.number}
              </div>
              <div className="max-w-[100px] text-sm lg:text-md xl:text-lg">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
