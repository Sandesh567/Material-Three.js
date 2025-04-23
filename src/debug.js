import * as THREE from ’three’ import { OrbitControls } from ’three/examples/jsm/controls/OrbitControls.js’ import gsap from ’gsap’ import * as dat from ’dat.gui’     // Debug UI 
  const gui = new dat.GUI() //parameters for color and spin when clicked 
function const parameters ={ color : 0x6381db, spin : () => { gsap.to(mesh.rotation,{duration:1, y:mesh.rotation.y+10}) } }  gui .addColor(parameters,’color’) .onChange(()=> { material.color.set(parameters.color) })  gui .add(parameters,’spin’) 

/** * Base */ // Canvas 
const canvas = document.querySelector(’canvas.webgl’)  
// Scene 
const scene = new THREE.Scene() 
