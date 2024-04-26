import * as THREE from "three";

// Carga de la textura de la imagen
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("../../assets/pasto.jpg");

// Creación del material utilizando la textura cargada
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

// Creación de la geometría del plano
const geometry = new THREE.PlaneGeometry(10, 10);

// Creación del plano utilizando la geometría y el material
const plane = new THREE.Mesh(geometry, material);

// Rotación del plano para que sea un fondo
plane.rotation.x = Math.PI * 0.5;

export default plane;