import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Post({
	profilePictureSrc,
	postOwnerUsername,
	postOwnerTitle,
	timestamp,
	postTitle,
	postDescription,
	postImgSrc,
}) {
	return (
		<>
			<div className="card bg-accent shadow-xl mb-3">
				<div className="card-body rounded-2xl rounded-b-none p-2">
					{/* post owner */}
					<Link href={"/profile/1"} className="self-start">
						<div className="flex-row justify-start">
							{/* Avatar */}
							<div className="avatar justify-start w-fit">
								<div className="rounded-full h-10 w-10">
									<Image
										src={profilePictureSrc}
										alt={postOwnerUsername + "profile picture"}
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
								<div className="w-fit flex-row">
									<span className="opacity-70 text-xs">{postOwnerTitle}</span>
									<span className="opacity-70 text-xs">&nbsp;·&nbsp;</span>
									<span className="opacity-70 text-xs">{timestamp}</span>
								</div>
							</div>
						</div>
					</Link>
					<h2 className="card-title">{postTitle}</h2>
					<p>{postDescription}</p>
				</div>

				<figure>
					<Image
						src={postImgSrc}
						alt={postOwnerUsername + "post image."}
						height={0}
						width={0}
						className="h-full w-full"
					/>
				</figure>
			</div>
		</>
	);
}
