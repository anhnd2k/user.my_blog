import React, { useEffect, useState } from 'react'
import './styles.css'

const LoaddingPortal = () => {
	const [fade, setFade] = useState(false)
	const [transparent, setTransparent] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setFade(true)
			setTimeout(() => {
				setTransparent(true)
			}, 1500)
		}, 100)
	}, [])
	return (
		<div className={`main ${transparent ? 'mainActive' : ''}`}>
			{/* <div className="test"></div> */}

			<div
				className={`${fade && 'show_view_up_right'} view_up_right2`}
			></div>
			<div
				className={`${fade && 'show_view_down_left'} view_down_left`}
			></div>
			<div
				className={`${fade && 'show_view_up_right'} view_up_right`}
			></div>
		</div>
	)
}

LoaddingPortal.propTypes = {}

export default LoaddingPortal
