import { WebGLRenderer } from 'three'


// TODO 
interface WebGLOptionalParams {
	canvas?: HTMLElement;
}


const createRenderer = (): WebGLRenderer => {
	const opts = {
		antialias: true
	}
	const renderer = new WebGLRenderer(opts);

	// turn on physically correct lighting
	renderer.physicallyCorrectLights = true;
	return renderer;
}

export { createRenderer, WebGLOptionalParams }
