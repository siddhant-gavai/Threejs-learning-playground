import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222233); // Dark studio background

const camera = new THREE.PerspectiveCamera(
  60, // Thoda cinematic FOV
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 8, 15); // Camera ko thoda upar aur door rakha

// Cube geometry aur material
const geometry = new THREE.BoxGeometry(4, 4, 4);
const material = new THREE.MeshStandardMaterial({
  color: 0xff69b4, // Hot pink
  metalness: 0.6,
  roughness: 0.3,
});
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 2;
scene.add(cube);

// Floor add kiya
const floorGeometry = new THREE.PlaneGeometry(30, 30);
const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0x444455,
  metalness: 0.2,
  roughness: 0.8,
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = 0;
scene.add(floor);

// Studio lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
keyLight.position.set(10, 20, 10);
keyLight.castShadow = true;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0x88aaff, 0.6);
fillLight.position.set(-10, 10, 10);
scene.add(fillLight);

const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
backLight.position.set(0, 15, -20);
scene.add(backLight);

// Renderer setup
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = true;
controls.target.set(0, 2, 0); // Cube ke center par focus
controls.update();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

function animate() {
  window.requestAnimationFrame(animate);
  cube.rotation.y += 0.01; // Cube ko halka rotate karo
  controls.update();
  renderer.render(scene, camera);
}

animate();
