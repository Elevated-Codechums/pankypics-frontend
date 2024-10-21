import { cn } from "@/libs/utils";
import Link from "next/link";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export function PillButton({
	children,
	className,
	buttonProps,
    onClick
}: ButtonProps) {
	return (
		<button
			className={cn(
				"px-4 py-2 bg-gray text-white rounded-full",
				className
			)}
            onClick={onClick}
		>

                {children}
		</button>
	);
}
