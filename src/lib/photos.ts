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

	return (await results.json()) as ImagesData[];
}, "photos");
