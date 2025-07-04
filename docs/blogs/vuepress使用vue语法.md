---
title: "在vuePress中使用vue写法"
date: 2025-1-17
categories:
  - 前端
tags:
  - VuePress
sidebar: 'auto'
publish: true
sticky: 1
---

# <ClientOnly> <press></press> </ClientOnly>

:::tip
您将看到注释，注释前面的代码将显示在列表页面上的文章摘要中。
:::


```vue
 <template>
  <div>
    这是直接在md文档中写的文本，未被vue解析，而是被解析为代码片段
    <p>p标签</p>
  </div>
</template>
```
