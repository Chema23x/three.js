import fileList from "./Filelist"
import PromiseLoader from "../../../basic/PromiseLoader.js";
import AnimationLoader from "../../../basic/animations/AnimationLoader.js";
import * as THREE from "three";




const folder = "src/models/characters/Maria"

const urlAnimations = {}
for (const [key,value] of Object.entries(fileList)){
    urlAnimations[key] = folder + 'animations/' + value
}

const MariaLoader = () => {
    const animationLoader = new AnimationLoader(urlModel, urlAnimations)
    const promiseLoader = new PromiseLoader(THREE.FBXLoader, funciton (object){
        const scale = 0.005
        object.scale.set(scale, scale, scale)
        object.traverse(function (child)){
            if(child.isMesh){
                child.castShadow = true;
                child.receiveShadow = true;
            }
    });
    object.castShadow = true;
    object.receiveShadow = true;
    return object
    })
    animationLoader.addPromiseLoader(promiseLoader)
    return animationLoader.getModelWithAnimations()
}