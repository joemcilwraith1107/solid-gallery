import { A } from "@solidjs/router";
import { For } from "solid-js";
import type { ImagesData } from "#types";

type Props = {
	imagesData: () => ImagesData[];
};

export default function ImageGrid({ imagesData }: Props) {
	return (
		<div class="container mx-auto px-4 py-8">
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				<For each={imagesData()}>
					{(image) => (
						<div class="relative aspect-square w-full overflow-hidden rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
							<A href={`/images/${image.fileId}`}>
								<img
									src={`${image.url}&tr=w-400,h-400`}
									alt={image.customMetadata.Caption}
									class="transition-transform duration-300 hover:scale-110 object-cover"
									sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
									loading="lazy"
								/>
							</A>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
