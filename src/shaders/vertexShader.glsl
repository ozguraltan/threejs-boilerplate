varying vec2 vUv;
varying vec3 vertexNormal;
void main() {
    vertexNormal = normal;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}