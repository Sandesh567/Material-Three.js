import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/*

Debug
*/

const gui = new dat.GUI()

/*
Textures
*/

const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()
const colorTexture = textureLoader.load('/textures/door/color.jpg')
const dooralphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('/textures/matcaps/3.png')
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')
gradientTexture.minFilter = THREE.NearestFilter
gradientTexture.magFilter = THREE.NearestFilter
gradientTexture.generateMipmaps = false


const enviromentMapTextures = cubeTextureLoader.load(
    [
        '/textures/environmentMaps/3/px.jpg',
        '/textures/environmentMaps/3/nx.jpg',
        '/textures/environmentMaps/3/py.jpg',
        '/textures/environmentMaps/3/ny.jpg',
        '/textures/environmentMaps/3/pz.jpg',
        '/textures/environmentMaps/3/nz.jpg'
    ])

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')