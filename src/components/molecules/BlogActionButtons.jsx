import React from "react"

export default function BlogActionButtons({ size, id='', className='', like, replies }) {
    const fontSize = size && size == 'lg' ? 'text-xl' : 'text-xs'
    const iconSize = size && size == 'lg' ? 'w-9 h-9' : 'w-6 h-6'
	return (
		<div
			className={`inline-flex items-center text-slateGrey gap-4 ${size && size == 'lg' ? 'md:gap-9 w-full' : 'md:gap-6'} ${className}`}
			id={id}
		>
			{/* Like */}
            <a href="#" className="inline-flex items-center gap-3 hover:opacity-50">
				<img src="/assets/svg/ic-thumb_up.svg" className={iconSize} alt="" />
				<p className={`font-semibold ${fontSize}`}>{like}</p>
			</a>
            {/* Thread */}
			<button type="button" className="inline-flex items-center gap-3 hover:opacity-50" data-open-thread>
				<img src="/assets/svg/ic-comment.svg" className={iconSize} alt="" />
				<p className={`font-semibold ${fontSize}`}>{replies}</p>
			</button>
            {/* Share */}
			<a href="#" className={`inline-flex items-center gap-3 hover:opacity-50 ${size && size == 'lg' ? ' ml-auto' : ''}`}>
				<img src="/assets/svg/ic-share.svg" className={iconSize} alt="" />
				<p className={`font-semibold ${fontSize}`}>Share</p>
			</a>
		</div>
	)
}
