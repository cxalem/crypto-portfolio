import { CoinsList } from "@/components/CoinList";
import { SearchBar } from "@/components/SearchBar";

export default async function Home() {
  return (
    <main className="flex min-h-screen p-5 md:p-0 flex-col items-center mt-10 gap-5 md:gap-10">
      <SearchBar />
      <CoinsList />
    </main>
  );
}
