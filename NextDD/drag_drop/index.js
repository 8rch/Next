import DragFile from "./src/app/components";
import { useDrop } from "react-dnd";
import { useState } from "react";
const [basket, setBasket] = useState([]);
export default function Home() {
	const [basket, setBasket] = useState([]);

	const [{ isOver }, dropRef] = useDrop({
		accept: "language",
		drop: (item) =>
			setBasket((basket) =>
				!basket.includes(item) ? [...basket, item] : basket
			),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});

	return (
		<div className='flex'>
			<div>
				<DragFile />
			</div>
			<div className='my-8 mx-8 rounded-xl border w-fit' ref={dropRef}>
				<div className='my-4'>
					<div>
						<p className='mx-16 font-bold'>Droped Items</p>
					</div>
					{basket.map((e) => (
						<p className='border w-fit my-2 p-2 mx-16 rounded bg-indigo-400 text-white font-bold cursor-pointer'>
							{e.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
