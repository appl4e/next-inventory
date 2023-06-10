import { Avatar, Button, Menu } from "@mantine/core";
import React from "react";

export const UserIdentityMenu = () => {
	return (
		<Menu width={200}>
			<Menu.Target>
				<Avatar src="/assets/images/male-avatar.jpg" alt="AM" radius="xl" />
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Application</Menu.Label>
				<Menu.Item>Settings</Menu.Item>
				<Menu.Item>Messages</Menu.Item>
				<Menu.Item>Gallery</Menu.Item>

				<Menu.Divider />

				<Menu.Label>Danger zone</Menu.Label>
				<Menu.Item>Transfer my data</Menu.Item>
				<Menu.Item color="red">Delete my account</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};
