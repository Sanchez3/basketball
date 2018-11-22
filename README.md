# basketball 

仿[决胜三分球demo](http://jdc.jd.com/demo/ball-demo/)
使用 [phaser](http://phaser.io/) 替代 [LayaAir](https://www.layabox.com/) + [matter.js](http://brm.io/matter-js/)

# phaser
利用 P2 PHYSICS 完成物理碰撞

## Issues
当渲染模式非CANVAS时，使用BitmapData，update方法中 bitmapdata无法render（除非设置`dirty - If dirty this BitmapData will be re-rendered.`）

参考：[Drawing on BitmapData](http://www.html5gamedevs.com/topic/21640-drawing-on-bitmapdata/)



> Note: 
> If the game is running in WebGL this will push the texture up to the GPU if it's dirty.
>
> Phaser doesn't need to be running in Canvas mode in order for a BitmapData to render a canvas to itself. What it does is take the canvas, extract the 2d context from it and then draws that. The problem is that in a WebGL game there isn't anything on the 2d context, it's blank. You can render a WebGL canvas to another canvas if it was created with preserveDrawingBuffer enabled, which you could do, but it can harm performance as well, so is a trade off.




## Refenerce
- [Spring Basketball Arrow Target](https://www.askforgametask.com/game/spring-basketball-arrow-target/)
- [H5游戏开发：决胜三分球](https://aotu.io/notes/2017/11/16/basketball/index.html)