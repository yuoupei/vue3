import { createVNode } from "./vnode";

export function createAppAPI(render) {
  console.log(render)
  return function createApp(rootComponent) {
    console.log(rootComponent)
    const app = {
      _component: rootComponent,
      mount(rootContainer) {
        console.log("基于根组件创建 vnode");
        const vnode = createVNode(rootComponent);
        console.log("调用 render，基于 vnode 进行开箱",vnode,111);
        render(vnode, rootContainer);
      },
    };

    return app;
  };
}
