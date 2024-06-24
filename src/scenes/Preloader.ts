import Phaser from 'phaser'
import TextureKeys from '../consts/TextureKeys'
import SceneKeys from '../consts/SceneKeys'
import AnimationKeys from '../consts/AnimationKeys'

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super(SceneKeys.Preloader)
    }


    preload()
    {
        this.load.image(
            TextureKeys.Background, 
            'house/bg_repeat_340x640.png'
        )
        
        this.load.atlas(
            TextureKeys.RocketMouse, 
            'characters/rocket-mouse.png', 
            'characters/rocket-mouse.json')
    }

    create()
    {
        this.anims.create({
            key: AnimationKeys.RocketMouseRun,
            frames: this.anims.generateFrameNames('rocket-mouse', {
                start: 1,
                end: 4,
                prefix: 'rocketmouse_run',
                zeroPad: 2,
                suffix: '.png'
            }),
            repeat: -1,
            frameRate: 10
        
        })
        
        this.scene.start(SceneKeys.Game)
    }
}