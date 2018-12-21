# basketball 

仿[决胜三分球demo](http://jdc.jd.com/demo/ball-demo/)
使用 [phaser](http://phaser.io/) 替代 [LayaAir](https://www.layabox.com/) + [matter.js](http://brm.io/matter-js/)

# phaser  物理引擎
> Arcade，P2，Ninja物理引擎区别
>
> **Arcade：**轻量级高性能AABB式物理碰撞系统，AABB即Axis-aligned Bounded Rectangles，译为轴对称盒子，只能以矩形框计算碰撞区域，精度低，运算速度快，可以实现简单的碰撞、重力等效果。
>
> **P2：**可以实现多种物理模型和物理特性，如Arcade所不能实现的多边形碰撞区域、弹簧、摩擦力、碰撞材质、反弹系数等，功能强大但也必然会使运算复杂、耗费性能。
>
> **Ninja：**可以实现平面、凹凸面、球面等的碰撞，物体在非平整面上碰撞时不会翻倒，跟忍者一样。

| 属性               | 类型    | 默认值     | 说明                           |
| ------------------ | ------- | ---------- | ------------------------------ |
| acceleration       | object  | {x=0, y=0} | 加速度                         |
| allowGravity       | boolean | true       | 是否启用重力效果               |
| bounce             | object  | {x=0, y=0} | 设置反弹系数                   |
| collideWorldBounds | boolean | false      | 是否监测与游戏世界边沿的碰撞   |
| friction           | object  | {x=1, y=0} | 设置摩擦系数                   |
| gravity            | object  | {x=0, y=0} | 设置物体重力，会和世界重力叠加 |
| immovable          | boolean | false      | 设置是否固定不动               |
| mass               | number  | 1          | 设置重量                       |
| velocity           | object  | {x=0, y=0} | 设置速度                       |

利用 P2 PHYSICS 完成物理碰撞

P2物理引擎，body常用属性：

- angle ：角度。
- angularVelocity ：角速度。
- position ：坐标。
- damping ：速度阻尼。刚体在线性速度方向上受到的阻力。
- force ：作用力。刚体在线性速度方向上收到的扭力。
- velocity ：速度。
- type ：刚体类型。Dynamic、Kinematic或Static
- mass ：刚体质量。

[p2.js](https://github.com/schteppe/p2.js)

## keys
刚体穿透问题



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
- [Phaser物理引擎篇](https://ryangun.github.io/2018/03/05/Phaser%E7%89%A9%E7%90%86%E5%BC%95%E6%93%8E%E7%AF%87/)