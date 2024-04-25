import scene from "./basic/scene.js"
import camera from "./basic/camera.js"
import renderer from "./basic/renderer.js"
import cube from "./basic/shapes/cube.js"
import light from "./basic/light.js"
import resize from "./basic/resize.js"
import plane from "./basic/shapes/plane.js"
import keyListener from "./basic/keyListener.js"
import keyCode from "./basic/keyCode.js"
import loopMachine from "./loopMachine.js"

scene.add(cube);
scene.add(light);
scene.add(plane)

// camera.position.z = 5;
camera.position.set(2,2,2)  
camera.lookAt(cube.position)

loopMachine.addCallback(() =>{
    if(keyListener.isPressed(keyCode.ENTER)) cube.rotation.y += 0.01;
    renderer.render(scene, camera)  //take a picture of the scene
})



console.log(scene, camera, renderer, cube)
resize.start(renderer)
loopMachine.start()
keyListener.start()