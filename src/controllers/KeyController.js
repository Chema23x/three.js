import keyCode from "../basic/keyCode.js"
import keyListener from "../basic/keyListener.js"

class KeyController{
    constructor(peerId){
        this.peerId = peerId
        this.state = null
        this.keyListener = keyListener
    }
    setKeyListener(keyListener){
        this.keyListener = keyListener
    }
    init(characterController){
        this.state = characterController.state
        this.state['translation'] = {x: 0, y: 0}
        this.state['rotation'] = {y:0}
        this.state['angle'] = {y: 0}
    }
    tick(){
        this.state.translation.x = 0
        this.state.translation.y = 0
        this.state.rotation.y = 0
        this.state.angle.y = 0
        if (this.keyListener.isPressed(keyCode.KEY_W)) this.state.translation.y = 1
        if (this.keyListener.isPressed(keyCode.KEY_S)) this.state.translation.y = -1
        if (this.keyListener.isPressed(keyCode.KEY_A)) this.state.translation.x = 1
        if (this.keyListener.isPressed(keyCode.KEY_D)) this.state.translation.x = -1
        if (this.keyListener.isPressed(keyCode.LEFT_ARROW)) this.state.translation.x = 1
        if (this.keyListener.isPressed(keyCode.RIGHT_ARROW)) this.state.translation.x = -1
        if (this.keyListener.isPressed(keyCode.UP_ARROW)) this.state.translation.y = 1
        if (this.keyListener.isPressed(keyCode.DOWN_ARROW)) this.state.translation.y = -1
        
    }
}


const keyController = new KeyController()

export default keyController

export {KeyController}