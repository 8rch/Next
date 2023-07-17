import { DragCard } from "../pages/DragCard";
const Data = [
	{ name: "tarea1" },
	{ name: "tarea2" },
	{ name: "tarea3" },
	{ name: "tarea4" },
];
export function DragFile() {
	return (
		<div className='my-8 mx-8 rounded-xl border w-fit'>
			<div className='my-4'>
				<div>
					<p className='mx-16 font-bold'>Draged Items</p>
				</div>
				{Data.map((e) => (
					<div
						key={e.name}
						className='border w-fit my-2 p-2 mx-16 rounded bg-indigo-400 text-white font-bold cursor-pointer'>
						<DragCard draggable name={e.name} />
					</div>
				))}
			</div>
		</div>
	);
}
export default DragFile;
