import Image from "next/image";
import { SearchIcon } from "./Icons/SearchIcon";
import Link from "next/link";

export const SearchItem = ({ name, image, id }: Coin) => {
  return (
    <li key={id}>
      <Link
        className="flex justify-between hover:bg-gray-100 py-2 px-4"
        href={`/coins/${id}`}
      >
        <div className="flex items-center gap-3">
          <Image width={30} height={30} src={image} alt={name} />
          <span>{name}</span>
        </div>

        <SearchIcon />
      </Link>
    </li>
  );
};
