
class AnimationLoader {
    constructor(urlModel, urlAnimations){
        this.model = null
        this.urlModel = urlModel
        this.urlAnimations = urlAnimations
    }
    addPromiseLoader(promiseLoader){
        this.promiseLoader = promiseLoader
    }
    getModelWithAnimations(){
        return new Promise((res,rej)=> {
            const animationAndModelPromises = []
            //first loading(model)
            animationAndModelPromises.push(this.promiseLoader.load(this.urlModel))
            //other loading (animations)
            Object.keys(this.urlAnimations).forEach(stringIndex => {
                animationAndModelPromises.push(this.promiseLoader.load(this.urlAnimations))
            });
            Promise.all(animationAndModelPromises).then(payload => {
                const model = payload.shift()
                const animationEmptyModels = payload

                const animations = []
            })
        })
    }
}