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
            <div>
              {item.title}, {item.number}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
