import { A, createAsync } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import ImageGrid from "#components/ImageGrid";

import { getAllPhotoData } from "~/lib/photos";

export const route = {
	preload: () => getAllPhotoData(),
};

export default function Home() {
	const photos = createAsync(() => getAllPhotoData());
	return (
		<main class="shrink basis-11/12">
			<Suspense fallback={<div>...Loading</div>}>
				<ImageGrid images={photos()} />
			</Suspense>
		</main>
	);
}
