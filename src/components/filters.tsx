import { For } from "solid-js";
import { Button } from "#components/ui/button";

type Props = {
	tags: () => string[];
	onTagClick: (tag: string) => void;
};
export default function Filters({ tags, onTagClick }: Props) {
	return (
		<header class="container mx-auto flex flex-row items-center justify-between space-x-4 bg-white px-6 py-6">
			<nav class="content center p flex w-full flex-row flex-wrap justify-center">
				<For each={tags()}>
					{(tag) => (
						<Button variant="link" onClick={() => onTagClick(tag)}>
							{tag}
						</Button>
					)}
				</For>
			</nav>
		</header>
	);
}
