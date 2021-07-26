import { World } from './World/World'



// create the main world loop
const main = () => {

	// get a ref to the container element
	const container: HTMLDivElement | null = document.querySelector('#scene-container');
	let world: World;
	if (container) {
		world = new World(container);
		world.render();
		world.start();
	}
}

main();
