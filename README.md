## Cloud React App

### 依赖 git 子模块

- cloud-lib
## Cloud React App

### 依赖 git 子模块

- cloud-lib

### 使用

#### 初始化git子模块（仅第一次）

```bash
git submodule update --init --recursive
```

#### 更新git子模块代码

```bash
git submodule foreach git pull origin master
```

### 运行

```bash
yarn install
yarn start
```

### 路由配置

```ts
interface IRouterConfig {
  /** 地址 */
  path?: string | string[];
  /** 用于面包屑显示的title */
  title?: string | string[];
  /** 是否完全匹配 */
  exact?: boolean;
  /** 路由根组件 */
  component?: () => Promise<any>;
  /** 路由依赖的rematch模块 */
  model?: any;
  /** 组件props，重定向路由时为Redirect的props */
  props?: {
    [key: string]: any;
  };
  /** 是否是重定向路由 */
  redirect?: boolean;
  /** 子路由 */
  children?: IRouterConfig[];
  /** 加载样式 */
  loadingType?: 'page' | 'full';
}
```

### 路由渲染

```tsx
import { RouteRender } from '@cloud-library/components';

const routerConfig: IRouterConfig[] = [];

<RouteRender config={topRouter} />
```

### 详细文档使用

[点击查看文档](https://github.com/mqyun/cloud-lib/blob/master/README.md)
