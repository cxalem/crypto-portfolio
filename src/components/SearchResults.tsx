import { SearchIcon } from "./Icons/SearchIcon";
import { SearchItem } from "./SearchItem";

type Props = {
  results: {
    items: Coin[];
    show: boolean;
  };
};

export const SearchResults: React.FC<Props> = ({ results }) => (
  <div className=" flex flex-col gap-3 max-h-96 overflow-scroll ">
    <div className="flex items-center justify-between opacity-50 p-4">
      <h4 className="font-normal">Search</h4>
      <SearchIcon />
    </div>
    {results.items.map((item: Coin) => (
      <SearchItem key={item.id} {...item} />
    ))}
  </div>
);