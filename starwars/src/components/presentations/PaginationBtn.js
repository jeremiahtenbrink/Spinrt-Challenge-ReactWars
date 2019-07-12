import React from 'react'

export const PaginationBtn = ({ txt, url, pageTurn, way }) => (
	<button
		disabled={!url}
		onClick={pageTurn(url, way)}
	>
		{txt}
	</button>
)