import { DirectionalLight } from 'three'

interface Lights {
	directionalLight: DirectionalLight;
}

const createLights = (): Lights => {
	const directionalLight = new DirectionalLight("white", 8);
	return { directionalLight };
}

export { createLights };
