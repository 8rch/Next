"use client";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { SortableContainer } from "./SortableContainer";

function ProfilePage() {
	const { data: session, status } = useSession();

	console.log(session, status);

	interface ContainerItem {
		id: string;
		content: string;
	}
	const [items, setItems] = useState<ContainerItem[]>([
		{ id: "item-1", content: "Container 1" },
		{ id: "item-2", content: "Container 2" },
		{ id: "item-3", content: "Container 3" },
		// Agrega más contenedores aquí si lo deseas
	]);

	const handleSort = (draggedId: string, targetId: string) => {
		const draggedIndex = items.findIndex((item) => item.id === draggedId);
		const targetIndex = items.findIndex((item) => item.id === targetId);
		const newItems = [...items];
		newItems.splice(targetIndex, 0, newItems.splice(draggedIndex, 1)[0]);
		setItems(newItems);
	};

	return (
		<div className='h-[calc(100vh-4rem)] flex flex-col gap-y-10 items-center justify-center'>
			<h1 className='font-bold text-3xl'>Profile</h1>

			<pre className='bg-zinc-800 p-4'>
				{JSON.stringify(
					{
						session,
						status,
					},
					null,
					2
				)}
			</pre>

			<button
				className='bg-zinc-800 px-4 py-2 block mb-2'
				onClick={() => {
					signOut();
				}}>
				Signout
			</button>
			<div>
				<h2>Drag and Drop Grid</h2>
				<SortableContainer items={items} onSort={handleSort} />
			</div>
		</div>
	);
}

export default ProfilePage;
