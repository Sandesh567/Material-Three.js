import * as THREE from ’three’ import { OrbitControls } from ’three/examples/jsm/controls/OrbitControls.js’ import gsap from ’gsap’ import * as dat from ’dat.gui’     // Debug UI 
  const gui = new dat.GUI() //parameters for color and spin when clicked 
function const parameters ={ color : 0x6381db, spin : () => { gsap.to(mesh.rotation,{duration:1, y:mesh.rotation.y+10}) } }  gui .addColor(parameters,’color’) .onChange(()=> { material.color.set(parameters.color) })  gui .add(parameters,’spin’) 

/** * Base */ 
// Canvas 
const canvas = document.querySelector(’canvas.webgl’)  
// Scene 
const scene = new THREE.Scene() 

 /** * Object */ 
  const geometry = new THREE.BoxGeometry(1, 1, 1) 
  const material = new THREE.MeshBasicMaterial({ color: parameters.color }) 
  const mesh = new THREE.Mesh(geometry, material) scene.add(mesh)

 //Debug //
gui.add(mesh.position,’y’).min(-3) . max(3) .step(0.01) .name(’elevation) 
  //name is changed of y axis to elevation 
gui. add(mesh.position,’y’) .min(-3) .max(3) .step(0.01) .name(’elevation’)  
//making visible and hide the object in the mesh  
gui .add(mesh,’visible’)  
gui .add(material,’wireframe’)


 /** * Sizes */ 
  const sizes = { 
    width: window.innerWidth, 
    height: window.innerHeight 
  } 

window.addEventListener(’resize’, () => { 
  // Update sizes 
  sizes.width = window.innerWidth 
    sizes.height = window.innerHeight 
  // Update camera 
  camera.aspect = sizes.width / sizes.height 
    camera.updateProjectionMatrix()  
  // Update renderer 
  renderer.setSize(sizes.width, sizes.height) 
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) 
})


/** * Camera */ 
// Base camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100) 
  camera.position.z = 3 
  scene.add(camera)
