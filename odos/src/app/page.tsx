"use client";

import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const ClientOnly = dynamic(() => import("react").then((mod) => mod.default));

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			{/* Rest of your JSX code */}
			<ClientOnly>
				<DropZone />
			</ClientOnly>
		</main>
	);
}

function DropZone() {
	useEffect(() => {
		const updateThumbnail = (dropZoneElement: HTMLElement, file: File) => {
			let thumbnailElement = dropZoneElement.querySelector(
				".drop-zone__thumb"
			) as HTMLElement;

			// First time - remove the prompt
			const promptElement = dropZoneElement.querySelector(
				".drop-zone__prompt"
			) as HTMLElement;
			if (promptElement) {
				promptElement.remove();
			}

			// First time - there is no thumbnail element, so let's create it
			if (!thumbnailElement) {
				thumbnailElement = document.createElement("div");
				thumbnailElement.classList.add("drop-zone__thumb");
				dropZoneElement.appendChild(thumbnailElement);
			}

			thumbnailElement.dataset.label = file.name;

			// Show thumbnail for image files
			if (file.type.startsWith("image/")) {
				const reader = new FileReader();

				reader.readAsDataURL(file);
				reader.onload = () => {
					if (thumbnailElement.style) {
						thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
					}
				};
			} else {
				if (thumbnailElement.style) {
					thumbnailElement.style.backgroundImage = "";
				}
			}
		};
	}, []);

	return (
		<div className='drop-zone'>
			<span className='drop-zone__prompt'>
				Drop file here or click to upload
			</span>
			<input type='file' name='myFile' className='drop-zone__input' />
		</div>
	);
}
