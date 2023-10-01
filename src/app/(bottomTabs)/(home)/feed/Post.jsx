import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Post({ ImageSrc, postOwnerUsername, timestamp }) {
	return (
		<Link href={"/profile/1"} className="self-start">
			<div className="flex-row justify-start">
				{/* Avatar */}
				<div className="avatar justify-start w-fit">
					<div className="rounded-full h-10 w-10">
						<Image
							src={ImageSrc}
							height={0}
							width={0}
							className="w-full h-full"
						/>
					</div>
				</div>
				<div className="items-start w-fit ml-2">
					{/* user */}
					<div className="w-fit">
						<span>{postOwnerUsername}</span>
					</div>
					{/* Timestamp */}
					<div className="w-fit">
						<span className="opacity-70">{timestamp}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
