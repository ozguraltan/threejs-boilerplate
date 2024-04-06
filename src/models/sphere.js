import * as THREE from 'three'
import vertexShader from '@/shaders/vertexShader.glsl'
import fragmentShader from '@/shaders/fragmentShader.glsl'


const geometry = new THREE.SphereGeometry(5, 75, 75)

const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader
    }
)
export default new THREE.Mesh(geometry, material)