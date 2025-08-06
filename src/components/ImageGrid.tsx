import { A } from "@solidjs/router";
import { For } from "solid-js";
import type { ImagesData } from "#types";

type GalleryProps = {
	images: ImagesData[] | undefined;
};

export default function ImageGrid({ images }: GalleryProps) {
	if (!images) return <p>No photos available</p>;

	return (
		<div class="container mx-auto px-4 py-8">
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				<For each={images}>
					{(image, index) => (
						<div class="relative aspect-square w-full overflow-hidden rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
							<A href={`/image/${image.fileId}`}>
								<img
									src={`${image.url}&tr=w-400,h-400`}
									alt={image.customMetadata.Caption}
									class="transition-transform duration-300 hover:scale-110 h-[350px] w-[350px] object-cover"
								/>
							</A>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
