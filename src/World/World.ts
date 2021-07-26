import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createCamera } from '../components/camera'
import { createCube } from '../components/Cube'
import { createLights } from '../components/lights'
import { createScene } from '../components/scene'
import { createRenderer } from '../systems/renderer'
import { Loop } from '../systems/Loop'
import { Resizer } from '../systems/Resizer'
import { createControls } from '../systems/controls'


class World {
	private camera: PerspectiveCamera;
	private scene: Scene;
	private renderer: WebGLRenderer;
	private loop: Loop;

	constructor(container: HTMLDivElement) {
		this.camera = createCamera();
		this.scene = createScene();
		this.renderer = createRenderer();
		this.loop = new Loop(this.camera, this.scene, this.renderer);

		// null check
		if (container) {
			// add the canvas to the container
			container.append(this.renderer.domElement);
		}

		const { directionalLight } = createLights();
		const cube = createCube();
		this.scene.add(directionalLight, cube);
		this.loop.updateTables.push(cube);


		// set up the orbit controls
		const controls = createControls(this.camera, this.renderer.domElement);
		this.loop.updateTables.push(controls);

		const resizer = new Resizer(container, this.camera, this.renderer);
		resizer.onResize();

	}

	// Render the scene
	render() {
		// draw a single frame
		this.renderer.render(this.scene, this.camera);

	}
	start() {
		this.loop.start();
	}
	stop() {
		this.loop.stop();
	}
}


export { World };
