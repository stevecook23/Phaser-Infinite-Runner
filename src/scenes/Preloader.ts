import Phaser from 'phaser'
import TextureKeys from '../consts/TextureKeys'

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }


    preload()
    {
        this.load.image(TextureKeys.Background, 'backgrounds/bg_layer1.png')
        this.load.atlas(
            TextureKeys.RocketMouse, 'characters/rocket-mouse.png', 'characters/rocket-mouse.json')
    }

    create()
    {
        this.anims.create({
            key: 'rocket-mouse-run',
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
        
        this.scene.start('game')
    }
}