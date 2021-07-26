import { PerspectiveCamera, WebGLRenderer } from "three";

class Resizer {
	constructor(
		container: HTMLDivElement,
		camera: PerspectiveCamera,
		renderer: WebGLRenderer
	) {
		this.setSize(container, camera, renderer);

		window.addEventListener("resize", () => {
			// set the size again if a resize occurs
			this.setSize(container, camera, renderer);

			// perform any custom actions
			this.onResize();
		});
	}
	private setSize(
		container: HTMLDivElement,
		camera: PerspectiveCamera,
		renderer: WebGLRenderer
	): void {
		// set the cameras aspect ratio
		camera.aspect = container.clientWidth / container.clientHeight;

		// update the cameras viewing frustum
		camera.updateProjectionMatrix();

		// update the size of the renderer and the canvas
		renderer.setSize(container.clientWidth, container.clientHeight);

		// set the pixel ratio
		renderer.setPixelRatio(window.devicePixelRatio);
	}
	public onResize() { }
}

export { Resizer };
