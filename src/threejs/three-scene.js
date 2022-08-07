import React, {Component} from "react";
import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from 'three';

class ThreeScene extends Component {

    componentDidMount(){

        // create a Scene
        this.scene = new Scene();

        // Set the background color
        this.scene.background = new Color('skyblue');

        // Create a camera
        const fov = 35; // AKA Field of View
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1; // the near clipping plane
        const far = 100; // the far clipping plane

        this.camera = new PerspectiveCamera(fov, aspect, near, far);

        // every object is initially created at ( 0, 0, 0 )
        // move the camera back so we can view the scene
        this.camera.position.set(0, 0, 10);

        // create a geometry
        const geometry = new BoxBufferGeometry(2, 2, 2);

        // create a default (white) Basic material
        const material = new MeshBasicMaterial();

        // create a Mesh containing the geometry and material
        const cube = new Mesh(geometry, material);

        // add the mesh to the scene
        this.scene.add(cube);

        // create the renderer
        this.renderer = new WebGLRenderer();

        // next, set the renderer to the same size as our container element
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // finally, set the pixel ratio so that our scene will look good on HiDPI displays
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // add the automatically created <canvas> element to the page
        this.mount.appendChild(this.renderer.domElement)

        // render, or 'create a still image', of the scene
        this.renderer.render(this.scene, this.camera);


    }

    render(){
        return(
            <div
            ref={mount => {
                this.mount = mount;
            }}
            />
        )
    }
}
export default ThreeScene;