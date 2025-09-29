import { createAsync, useParams } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import type { PhotoData } from "#types";
import { getPhotoData } from "~/lib/photos";

export default function ImagePage() {
	const params = useParams();
	const image = createAsync(() => getPhotoData(params.id));
	const calculateImageDimensions = (image: PhotoData) => {
		const maxWidth = window.innerWidth * 0.9;
		const maxHeight = window.innerHeight * 0.9;
		const aspectRatio = image.width / image.height;

		let width = image.width;
		let height = image.height;

		if (width > maxWidth) {
			width = maxWidth - 40;
			height = width / aspectRatio;
		}

		if (height > maxHeight) {
			height = maxHeight - 40;
			width = height * aspectRatio;
		}

		return { width, height };
	};
	return (
		<Show
			when={image()}
			fallback={<div class="flex flex-col max-h-11/12">...Loading</div>}
		>
			{(loadedImage) => (
				<div class="flex flex-col max-h-11/12">
					<div class="flex max-h-11/12 content-center justify-center">
						<img
							src={loadedImage().url}
							alt={loadedImage().customMetadata.Caption}
							class="align-middle justify-center"
							sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 60vw"
						/>
					</div>
					<div class="flex max-h-1/12">
						<p class="text-center text-lg font-normal text-slate-900">
							{loadedImage().customMetadata.Caption}
						</p>
					</div>
				</div>
			)}
		</Show>
	);
}
