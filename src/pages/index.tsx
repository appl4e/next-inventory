import Image from "next/image";
import { Inter } from "next/font/google";
import { AdminLayout } from "@/components/layouts/AdminLayout";
import { gql, useQuery } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

const GET_ITEMS = gql`
	query INVENTORY_QUERY {
		inventoryItems {
			nodes {
				_id
				name
				description
			}
		}
	}
`;

export default function Home() {
	const { loading, data, error } = useQuery(GET_ITEMS);

	return (
		<AdminLayout>
			<button className="btn">Hello</button>
			<pre>{JSON.stringify(data, null, 4)}</pre>
		</AdminLayout>
	);
}
