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
