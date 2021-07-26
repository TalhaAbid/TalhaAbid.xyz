import { Scene, Color } from 'three'

const createScene = (): Scene => {
	const scene: Scene = new Scene();
	scene.background = new Color("royalblue")
	return scene;
}

export { createScene };
