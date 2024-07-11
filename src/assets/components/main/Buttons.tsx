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
      <div className="flex justify-between">
        {info.map((item, index) => {
          return (
            <div className="flex gap-2 justify-center align-center">
              <div className="text-4xl flex align-center font-medium justify-center">
                {item.number}
              </div>
              <div className="max-w-[100px]">{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
