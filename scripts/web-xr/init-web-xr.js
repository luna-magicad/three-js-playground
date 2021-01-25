import { VRButton } from '../../three/examples/jsm/webxr/VRButton.js';
import { BoxLineGeometry } from  '../../three/examples/jsm/geometries/BoxLineGeometry.js';

// Inspired by : https://github.com/mrdoob/three.js/blob/master/examples/webxr_vr_ballshooter.html

window.addEventListener('load', () => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.xr.enabled = true;
    document.body.appendChild( renderer.domElement );
    document.body.appendChild( VRButton.createButton( renderer ) )

    camera.position.set(0, 0, 0);

    const room = new THREE.LineSegments(
        new BoxLineGeometry( 6, 6, 6, 10, 10, 10 ),
        new THREE.LineBasicMaterial( { color: 0x808080 } )
    );
    room.geometry.translate( 0, 3, 0 );
    scene.add( room );

    animate();

    // Methods
    // ----------------------

    function animate() {
        renderer.setAnimationLoop( render );
    }

    function render() {
        renderer.render( scene, camera );
    }
});


