import { endpoint } from "@/services/api";
import { CoinCard } from "./CoinCard";

export const CoinsList = async () => {
	const coins = await (await fetch(endpoint.coins.getCoins(10))).json();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-2/3 justify-items-center gap-6">
			{coins.map((coin: any) => (
				<CoinCard key={coin.id} {...coin} />
			))}
		</div>
	);
};
