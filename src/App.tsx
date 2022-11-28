import React, { useEffect, useState } from 'react'
import './App.css'
import { EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import LoaddingPortal from './components/loaddingView/LoaddingPortal'

export default function App() {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	)
	useEffect(() => {
		console.log(editorState)
	}, [editorState])
	return (
		<div>
			<LoaddingPortal />
			<div>adsfjkhdjasfhasjkldhfakljds</div>
		</div>
	)
}
