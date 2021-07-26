import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Camera } from 'three'

function createControls(camera: Camera, canvas: HTMLElement) {
	const controls = new OrbitControls(camera, canvas);

	// damping and auto rotation require
	// the controls to be  updated each frame

	// this controls auto rotation
	//controls.autoRotate = true;

	// enable damping
	controls.enableDamping = true;

	(controls as any).tick = () => controls.update();

	return controls;
}

export { createControls };
