import { Camera, Clock, Scene, WebGLRenderer } from "three";
import { Stats } from './stats'

class Loop {
	private camera: Camera;
	private scene: Scene;
	private renderer: WebGLRenderer;
	public updateTables: Array<any>;
	private clock: Clock;
	private stats: Stats;
	constructor(camera: Camera, scene: Scene, renderer: WebGLRenderer) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.updateTables = [];
		this.clock = new Clock();
		// FPS STATS
		this.stats = new Stats();
		this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
		document.body.appendChild(this.stats.dom);
	}
	start(): void {
		this.renderer.setAnimationLoop(() => {
			// tell every animated object to tick forward one frame
			window.requestAnimationFrame(this.tick);

			// switch between the stats frames
			// render a frame
			this.renderer.render(this.scene, this.camera);
		});
	}
	stop(): void {
		this.renderer.setAnimationLoop(null);
	}
	public tick = () => {
		this.stats.begin();
		const delta = this.clock.getDelta();
		for (const object of this.updateTables) {
			object.tick(delta);
		}
		this.stats.end();
	}
}


export { Loop };
