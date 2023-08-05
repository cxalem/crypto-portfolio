import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TagProps = {
	children: ReactNode;
	className?: string;
};

export const Tag: React.FC<TagProps> = ({ children, className }) => {
	const rootClassName = twMerge(
		"bg-gray-100 text-gray-600 text-xs font-bold py-1 px-2 rounded-md",
		className ? className : ""
	);
	return <span className={rootClassName}>{children}</span>;
};
