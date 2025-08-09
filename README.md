# Three.js Studio GLB Scene

This project creates a **3D scene** in Three.js featuring:

- A **GLB 3D model** loaded via `GLTFLoader`
- **HDRI environment lighting** for realistic reflections
- **Studio-style lighting** (ambient, key, fill, back)
- **Orbit controls** for interactive camera movement
- Responsive window resizing
- Animation loop for smooth rendering

## 🎯 Features

- Cinematic camera angle
- Realistic HDRI and studio lighting
- GLB model loading support
- Smooth orbit and zoom controls
- Responsive window resizing

## 📂 Project Structure

```
three2/
├── index.html
├── src/
│   └── main.js
├── skull_downloadable.glb
├── README.md
```

## 🚀 Getting Started

1. Clone the repository.
2. Place your `.glb` model (e.g. `skull_downloadable.glb`) in the project folder.
3. Run a local server (e.g. with Vite, Live Server, or Python's `http.server`).
4. Open `index.html` in your browser.

## 🛠️ Dependencies

- [Three.js](https://threejs.org/)
- [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
- [RGBELoader](https://threejs.org/docs/#examples/en/loaders/RGBELoader)
- [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls)

## ✨ Credits

- HDRI from [Poly Haven](https://polyhaven.com/)
- Example GLB model from [Sketchfab](https://sketchfab.com/) or your own

---

Feel free to customize the scene, model, or lighting
