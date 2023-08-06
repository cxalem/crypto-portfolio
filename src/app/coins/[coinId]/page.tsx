import { NextPage } from "next";

type PageProps = {
  params: {
    coinId: string;
  };
};

const CoinPage: NextPage<PageProps> = async ({ params: coinId }) => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <h1 className="text-3xl font-bold">Coin Page under construction</h1>
    </div>
  );
};

export default CoinPage;
