import { createAsync } from "@solidjs/router";
import { createMemo, createSignal, Suspense } from "solid-js";

import Filters from "#components/filters";
import ImageGrid from "#components/ImageGrid";
import { getAllPhotoData } from "~/lib/photos";

export const route = {
	preload: () => getAllPhotoData(),
};
//TODO suspense doesn't do anything, presumably because of the createEffect
export default function Home() {
	const imagesData = createAsync(() => getAllPhotoData());
	const [selectedTag, setSelectedTag] = createSignal<string>("all");

	const tags = createMemo(() => [
		"all",
		...Array.from(new Set(imagesData()?.flatMap((img) => img.tags) ?? [])),
	]);

	const handleTagClick = (tag: string) => {
		setSelectedTag(tag);
	};

	const filteredImages = createMemo(() => {
		const tag = selectedTag();
		const data = imagesData() ?? [];
		return tag === "all"
			? [...data]
			: data?.filter((img) => img.tags.includes(tag));
	});

	return (
		<main class="shrink basis-11/12">
			<Suspense fallback={<div>...Loading</div>}>
				<Filters tags={tags} onTagClick={handleTagClick} />
				<ImageGrid imagesData={filteredImages} />
			</Suspense>
		</main>
	);
}
