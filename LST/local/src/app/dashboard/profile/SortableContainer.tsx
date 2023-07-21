import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface ContainerItem {
	id: string;
	content: string;
}

interface DraggableItemProps {
	item: ContainerItem;
	onSort: (draggedId: string, targetId: string) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item, onSort }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [, drop] = useDrop({
		accept: "container",
		hover: (draggedItem: ContainerItem) => {
			if (!ref.current || draggedItem.id === item.id) {
				return;
			}
			onSort(draggedItem.id, item.id);
			draggedItem.id = item.id; // Update the id to avoid flickering when sorting
		},
	});
	const [{ isDragging }, drag] = useDrag({
		type: "container",
		item,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	drag(drop(ref));

	return (
		<div
			ref={ref}
			style={{
				opacity: isDragging ? 0.5 : 1,
				border: "1px solid #ccc",
				padding: "10px",
				textAlign: "center",
				cursor: "grab",
			}}>
			{item.content}
		</div>
	);
};

interface SortableContainerProps {
	items: ContainerItem[];
	onSort: (draggedId: string, targetId: string) => void;
}

export const SortableContainer: React.FC<SortableContainerProps> = ({
	items,
	onSort,
}) => {
	return (
		<DndProvider backend={HTML5Backend}>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 200px)",
					gap: "10px",
				}}>
				{items.map((item) => (
					<DraggableItem key={item.id} item={item} onSort={onSort} />
				))}
			</div>
		</DndProvider>
	);
};
