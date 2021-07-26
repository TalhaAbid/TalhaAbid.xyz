import { BoxBufferGeometry, MeshStandardMaterial, Mesh, MathUtils } from 'three'


const createMaterial = (): MeshStandardMaterial => {
	// you can add texture loader here for example
	// const textureLoader = new TextureLoader();

	// create a mesh standard material
	const material = new MeshStandardMaterial({
		color: "blue"
	})
	return material;
}

const createCube = (): Mesh => {
	// create a geometry
	const geometry = new BoxBufferGeometry(2, 2, 2);
	// create the material
	const material = createMaterial();

	// create the mesh containing geometry and material
	const cube = new Mesh(geometry, material)
	const radiansPerNSeconds = ((360 / 12) * Math.PI) / 180;
	(cube as any).tick = (delta: number) => {
		cube.rotation.z += radiansPerNSeconds * delta;
		cube.rotation.x += radiansPerNSeconds * delta;
		cube.rotation.y += radiansPerNSeconds * delta;
	}

	return cube;
}

export { createCube };
