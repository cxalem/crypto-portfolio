"use client";

import { useEffect, useState } from "react";
import { endpoints } from "@/services/api";
import { useDebounce } from "@/lib/hooks";
import { SearchItem } from "./SearchItem";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{
    items: Coin[];
    show: boolean;
  }>({
    items: [],
    show: false,
  });

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(endpoints.coins.getCoins(100));
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const coins = await res.json();
        setCoins(coins);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCoins();
  }, []);

  const search = () => {
    const items = query.trim()
      ? coins.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase().trim())
        )
      : [];

    setResults((prevResults) => ({ ...prevResults, items }));
  };

  useDebounce(search, query, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full flex justify-center relative">
      <div className="flex items-center w-full md:w-2/3 h-12 rounded-lg focus-within:shadow-lg bg-white border">
        <input
          className="bg-white border-0 w-full h-full outline-none text-sm text-gray-700 px-4 border-gray-300 rounded-l-xl"
          type="text"
          autoComplete="off"
          value={query}
          onChange={handleSearch}
          id="search"
          placeholder="Find your crypto currency..."
          onFocus={() => setResults({ ...results, show: true })}
          onBlur={() =>
            setTimeout(() => setResults({ ...results, show: false }), 150)
          }
        />

        <button className="grid w-12 h-full text-gray-300 place-items-center" aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {results.show && (
        <div className="absolute w-full top-12 z-10 flex items-center justify-center pt-4">
          <ul className="relative w-full md:w-2/3 bg-white rounded-xl focus-within:shadow-lg pb-4 shadow-md">
            {results.items.length > 0 ? (
              <SearchResults results={results} />
            ) : (
              <div className="flex flex-col gap-3">
                <h2 className="p-4 font-semibold text-gray-500">
                  Top crypto currencies 🔥
                </h2>
                {coins.slice(0, 5).map((coin) => (
                  <SearchItem key={coin.id} {...coin} />
                ))}
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
