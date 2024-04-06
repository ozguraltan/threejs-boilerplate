import * as THREE from 'three'
import {OrbitControls, SVGLoader} from "three/addons"
import uniforms from "@/uniforms"
const innerWidth = window.innerWidth
const innerHeight = window.innerHeight
import sphere from "@/models/sphere"
const scene = new THREE.Scene()
scene.background = new THREE.Color('#ffffff')
const light = new THREE.AmbientLight(0xffffff, 5)
scene.add(light)
scene.add(sphere)
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.5, 100)
camera.position.set(0, 0, 10)
camera.lookAt(0, 0, 0)
const renderer = new THREE.WebGLRenderer({
    antialias: true
})
renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)


const controls = new OrbitControls(camera, renderer.domElement)
const clock = new THREE.Clock()
function animate() {
    controls.update()
    renderer.render(scene, camera)
    uniforms.u_time.value = clock.getElapsedTime()
    uniforms.u_resolution.value.x = innerWidth
    uniforms.u_resolution.value.y = innerHeight
    requestAnimationFrame(animate)
}

animate()