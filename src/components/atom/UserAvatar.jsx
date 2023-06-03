import React from "react"

export default function UserAvatar({avatar, username}) {
	return (
		<div className="inline-flex gap-3 items-center">
			<img src={avatar} className="rounded-full" width="24" height="24" alt="" />
			<p className="text-xs leading-5">{username}</p>
		</div>
	)
}
