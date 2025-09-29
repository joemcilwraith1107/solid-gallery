import { query } from "@solidjs/router";
import type { ImagesData, PhotoData } from "#types";

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

export const getPhotoData = query(async (id: string): Promise<PhotoData> => {
	"use server";
	const result = await fetch(`${process.env.IK_API}/${id}/details`, {
		headers: {
			Authorization: `${process.env.PRIVATE_HEADER}`,
		},
	});
	if (!result.ok) throw new Error(`Failed to fetch photo data for image ${id}`);

	return result.json();
}, "photo");

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
