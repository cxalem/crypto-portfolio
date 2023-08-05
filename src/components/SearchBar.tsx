import { SearchIcon } from "./Icons/SearchIcon";

export const SearchBar = () => {
	return (
		<div className="flex items-center justify-center w-full md:w-2/3 pl-3 h-12 text-base bg-white border rounded-lg">
			<SearchIcon />
			<input
				className="w-full placeholder-gray-400 h-full px-3 rounded-lg focus:outline-none text-slate-500"
				type="text"
				placeholder="Search"
			/>
		</div>
	);
};