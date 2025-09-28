import { query } from "@solidjs/router";
import type { ImagesData } from "#types";

export const getAllPhotoData = query(async () => {
	"use server";
	const results = await fetch(
		`${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
		{
			headers: {
				Authorization: `${process.env.PRIVATE_HEADER}`,
			},
		},
	);

	if (!results.ok) throw new Error("Failed to fetch photo data");

	const data: ImagesData[] = await results.json();
	return data;
}, "photos");

export default function getFilterData(images: ImagesData[]) {
	const array = ["all"];
	for (const image of images) {
		const tags = image.tags;
		if (tags == null) {
			console.log(`Untagged picture ${image.fileId}`);
		} else {
			for (const tag of tags) {
				array.push(tag);
			}
		}
	}
	return [...new Set(array)];
}
