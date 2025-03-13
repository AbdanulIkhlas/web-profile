const CardGrid = ({ items }) => {
  const isOdd = items.length % 2 !== 0;

  return (
    <div className="relative">
      <img
        src="/images/bg-pattern.png"
        alt="Background Pattern"
        className="w-full h-auto"
      />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-2 gap-2 bg-transparent">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center border border-white border-opacity-30 bg-white bg-opacity-10
              backdrop-blur-sm text-[#D6D6D6] text-[10px] w-[149px] h-[31px] rounded-md"
            >
              {item}
            </div>
          ))}
          {/* Jika jumlah item ganjil, tambahkan slot kosong */}
          {isOdd && <div className="border border-transparent"></div>}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
