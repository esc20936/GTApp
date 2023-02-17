import React,{useRef} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, ImageBackground, } from "react-native";
import * as THREE from 'three';
import ExpoTHREE, {Renderer} from 'expo-three';
import { GLView, startARSessionAsync } from 'expo-gl';
import Expo from 'expo';

// export const Camera = () => {
//     const glView = useRef(null);

//     const onContextCreate = async (gl) => {
//         console.log(glView.current)
//         const arSession = await gl.startARSessionAsync();
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//         75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
//         const renderer = new Renderer({ gl });
//         scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);
//         renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

//         const geometry = new THREE.BoxGeometry(1, 1, 1);
//         const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//         const cube = new THREE.Mesh(geometry, material);
//         scene.add(cube);
//         camera.position.z = 5;

//         const animate = () => {
//             requestAnimationFrame(animate);
//             cube.rotation.x += 0.07;
//             cube.rotation.y += 0.04;
//             renderer.render(scene, camera);
//             gl.endFrameEXP();
//         }
//         animate();
//     }

//     return (
//         <GLView
//         style={{ flex: 1 }}
//         onContextCreate={onContextCreate}
//         ref={glView}
//       />
//     )
// }

export class Camera extends React.Component {

    render() {
        return (
          <GLView
            ref={(ref) => this._glView = ref}
            style={{ flex: 1 }}
            onContextCreate={this._onGLContextCreate}
          />
        );
      }
      _onGLContextCreate = async (gl) => {
        const arSession = await this._glView.startARSessionAsync();
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
        75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
                const renderer = new Renderer({ gl });

        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.07;
            cube.rotation.y += 0.04;
            renderer.render(scene, camera);
            gl.endFrameEXP();
          }
          animate();
      }
}