const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const CURRENCY = process.env.NEXT_PUBLIC_API_CURRENCY;

const endpoints = {
  coins: {
    getCoins: (perPage: number) =>
      `${API}/api/${VERSION}/coins/markets?${CURRENCY}&order=market_cap_desc&per_page=${perPage}&page=1`,
  },
};

export { endpoints };
