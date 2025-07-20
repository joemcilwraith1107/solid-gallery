import { IconBrandFlickr, IconBrandInstagram } from "./ui/icons";

export default function Footer() {
	return (
		<footer class="flex max-w-full flex-none basis-1/12 justify-end bg-gray-600 p-1 bottom-0">
			<div class="flex flex-none flex-row-reverse self-center">
				<div class="p-4">
					<a
						href="https://www.flickr.com/photos/azima_97"
						target="_blank"
						rel="noreferrer"
					>
						<IconBrandFlickr />
					</a>
				</div>
				<div class="p-4">
					<a
						href="https://www.instagram.com/joe_mcilwraith"
						target="_blank"
						rel="noreferrer"
					>
						<IconBrandInstagram />
					</a>
				</div>
			</div>
		</footer>
	);
}
