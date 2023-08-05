import Image from "next/image";
import { Tag } from "./Tag";
import { formatPrice, truncateTitle } from "@/lib";

type CoinCardProps = {
	name: string;
	symbol: string;
	market_cap_rank: number;
	current_price: number;
	image: string;
};

export const CoinCard: React.FC<CoinCardProps> = ({
	name,
	symbol,
	market_cap_rank,
	current_price,
	image,
}) => {
	const formatedPrice = formatPrice(current_price);

	return (
		<div className="flex flex-col justify-center gap-4 border h-fit rounded-lg w-full max-w-xs p-6 bg-white shadow-sm hover:shadow-lg cursor-pointer transition-shadow">
			<div className="flex gap-2 items-center w-full">
				<Image className="" width={40} height={40} src={image} alt="bitcoin" />
				<h2 className="font-bold text-3xl">{truncateTitle(name)}</h2>
			</div>

			<div className="flex gap-1 justify-between">
				<div className="space-x-1">
					<Tag className="uppercase">{symbol}</Tag>
					<Tag>Rank #{market_cap_rank}</Tag>
				</div>
				<span className="font-bold">{formatedPrice}</span>
			</div>
		</div>
	);
};
