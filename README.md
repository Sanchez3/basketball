# basketball 

仿[决胜三分球demo](http://jdc.jd.com/demo/ball-demo/)
使用 [phaser](http://phaser.io/) 替代 [LayaAir](https://www.layabox.com/) + [matter.js](http://brm.io/matter-js/)

# phaser  物理引擎
**利用 [phaser3](https://photonstorm.github.io/phaser3-docs/index.html) 支持 [matter.js](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Matter.html) 引擎，重构游戏，并完成篮网效果**

> - Engine：引擎是用来不断更新Matter.js所模拟的世界。Engine模块提供了很多函数和属性，允许你来控制引擎的各种行为
> - World：该模块为您提供即时的创建和控制整个世界的函数和属性。World实际上是一个具有像重力和边界等附加属性的Composite
> - Bodies: Bodies模块包含各种函数来帮助您创建具有常见形状（如圆形、矩形或梯形）的实体
> - Body: 该模块为您提供了各种的方法和属性，用于创建和操作使用Bodies模块中的函数创建的实体。该模块允许您缩放、旋转或移动单个物体。 它提供函数来改变物体的速度、密度或惯性。因为改模块所具有的能力颇多，我们将在本系列的第三篇教程中深入的讨论
> - Composites: 类似`Bodies`模块，该模块也有很多的函数让你可以使用这些函数来创建具有通用配置的复合实体。例如，你可以通过`Composites`模块的特定函数创建通过矩形组成的堆或金字塔
> - Composite: `Composite`模块提供函数和属性让你可以轻易的创建和控制复合实体。我们将在本系列的第四个教程详细的了解复合实体。
> - Constraint: 该模块允许你创建和控制约束。你可以使用约束来限制两个物体或固定的点与物体间保持在固定的距离。可以想象它通过钢杆连接两个物体。还可以修改这些约束的刚度，使杆开始更像弹簧。当需要创建牛顿摇篮或链式组合物体时，我们可以使用Matter.js的`Constraint`模块才实现。
> - MouseConstraint：该模块提供函数和属性来创建和控制鼠标约束，这在想让用户与`World`中的物体交互时候特别有用。





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
- [Matter.js指南（一）：基础介绍（译）](http://blog.davidandty.com/2018/04/15/Matter-js%E6%8C%87%E5%8D%97%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E5%9F%BA%E7%A1%80%E4%BB%8B%E7%BB%8D%EF%BC%88%E8%AF%91%EF%BC%89/)



# Versions

### 0.0.0 

利用`phaser2`（`phaser-ce`）引擎 

### 1.0.0 

利用`phaser3`引擎 

