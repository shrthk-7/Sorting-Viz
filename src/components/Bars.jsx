const Bars = ({ arr }) => {
  return (
    <>
      {arr.map((i, index) => {
        return (
          <div
            key={index}
            className="bar"
            style={{
              height: `${i * 4}vh`,
            }}
          ></div>
        );
      })}
    </>
  );
};

export default Bars;
