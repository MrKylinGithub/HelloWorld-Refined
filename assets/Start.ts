import { _decorator, assetManager, AssetManager, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component {
    start() {
        assetManager.loadBundle("game",(err,bundle:AssetManager.Bundle)=>{
            director.loadScene("main");
        });
    }

    update(deltaTime: number) {
        
    }
}

