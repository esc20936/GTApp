import React,{useRef} from "react";
import { View,Button, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, ImageBackground, } from "react-native";
import * as THREE from 'three';
import ExpoTHREE, {Renderer} from 'expo-three';
import { GLView, startARSessionAsync } from 'expo-gl';
import Expo from 'expo';
import { TextureLoader } from 'three';
import { Asset } from 'expo-asset';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

const loader = new THREE.TextureLoader();
export const CameraClass= () =>{
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }


  const _onGLContextCreate = async (gl) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
    75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
            const renderer = new Renderer({ gl });

    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const geometry = new THREE.BoxGeometry(1, 1, 0.5);
  
    const texture = await ExpoTHREE.loadAsync('https://pbs.twimg.com/profile_images/788074121091514372/XbPALVGw.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const materials = [
      new THREE.MeshBasicMaterial({color: "#cf3030"}),
      new THREE.MeshBasicMaterial({color: "#cf3030"}),
      new THREE.MeshBasicMaterial({color: "#cf3030"}),
      new THREE.MeshBasicMaterial({color: "#cf3030"}),
      new THREE.MeshBasicMaterial({map: texture}),
      new THREE.MeshBasicMaterial({color: "#cf3030"}),

    ];
    const cube = new THREE.Mesh(geometry, materials);
    renderer.setClearColor( 0xffffff, 0);

    scene.add(cube);
    camera.position.z = 5;
    cube.rotation.y = 0.5;

    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.04;
        renderer.render(scene, camera);
        gl.endFrameEXP();
      }
      animate();
  }

        return (
          <View style={styles.container} onPress={toggleCameraType}>
             <View style={styles.container}>
              <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          
          <GLView
            style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            onContextCreate={_onGLContextCreate}
            onPress={toggleCameraType}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}> Pay </Text>
          </TouchableOpacity>

          </View>
        );
      
      
  }     


   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 0.2,
    width:"100%",
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
