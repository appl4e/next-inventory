import { AppShell, Navbar, Header, NavLink, Badge } from "@mantine/core";
import { PropsWithChildren } from "react";
import { MenuItems } from "../../config/menu.config";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserIdentityMenu } from "../admin-components/UserIdentityMenu";

interface IAdminLayoutProp {
	hasHeader: boolean;
}

export const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	return (
		<AppShell
			padding="md"
			layout="alt"
			navbar={
				<Navbar width={{ base: 300 }} p="xs">
					<Navbar.Section grow mt="md">
						{MenuItems.map((item) => (
							<NavLink label={item.label} icon={<item.icon />} component={Link} href={item.href} active={router.pathname == item.href} />
						))}
					</Navbar.Section>
				</Navbar>
			}
			header={
				<Header height={60} p="xs" className="flex justify-end !pr-6">
					<UserIdentityMenu></UserIdentityMenu>
				</Header>
			}
			styles={(theme) => ({
				main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
			})}
		>
			{/* Your application here */}
			{children}
		</AppShell>
	);
};
