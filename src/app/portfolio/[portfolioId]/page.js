"use client";

import { useParams } from "next/navigation";

const PortfolioDetail = () => {
  const { portfolioId } = useParams();

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">Portfolio Detail: {portfolioId}</h1>
      <p className="mt-2">
        Detail informasi tentang project {portfolioId} akan ditampilkan di sini.
      </p>
    </div>
  );
};

export default PortfolioDetail;
