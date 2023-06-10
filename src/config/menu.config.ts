import { MdOutlineDashboardCustomize } from "react-icons/md";
import React from "react";
interface IMenuItem {
	label: string;
	icon: any;
	href: string;
}
export const MenuItems: IMenuItem[] = [
	{
		label: "Dashboard",
		icon: MdOutlineDashboardCustomize,
		href: "/",
	},
	{
		label: "Sell Now",
		icon: MdOutlineDashboardCustomize,
		href: "/sell-now",
	},
	{
		label: "Items",
		icon: MdOutlineDashboardCustomize,
		href: "/items",
	},
	{
		label: "Categories",
		icon: MdOutlineDashboardCustomize,
		href: "/categories",
	},
];
