---
title: JS优化
date: '2025-07-04 09:24:00'
meta: []
permalink: /post/js-optimization-d6k6y.html
author:
  name: xiaoqin
  link: https://github.com/wine-wind
---


<!-- more -->




# JS优化

1. 不必要的循环和中间数组

    场景：我们需要从一个用户列表中，筛选出所有激活状态（isActive）的用户，并且只提取他们的名字（name）。

    错误写法：

    ```js
    const users = [/* ... 一个包含 10,000 个用户的数组 ... */];

    // 写法一：链式调用
    const activeUserNames = users
      .filter(user => user.isActive) // 第一次循环，生成一个中间数组
      .map(user => user.name);        // 第二次循环，在中间数组上操作

    console.log(activeUserNames.length)；
    ```

    这段代码清晰、易读，但它存在一个性能问题：**它循环了两次，并创建了一个临时的中间数组**。

    1. ​`filter`​ 方法会遍历所有 10,000 个用户，创建一个新的数组（比如包含 5,000 个激活用户）。
    2. ​`map`​ 方法会再次遍历这个包含 5,000 个用户的中间数组，提取名字，并最终生成结果数组。

    总共的迭代次数是 10,000 + 5,000 \= 15,000 次。

    正确写法：

    ```js
    /**
    * 使用reduce或者简单的for循环，只遍历一次数组
    * 1. 使用reduce
    */
    const activeUserNames = user.reduce((acc,user) => {
    	if(user.isActive){
    		acc.push(user.name);s
    	}
    },[])

    /**
    * 2. 使用for...of(通常性能更好，更已读)
    */
    const activeUserNames = [];
    for (const user of users) {
      if (user.isActive) {
        activeUserNames.push(user.name);
      }
    这两种优化方法都只进行了 10,000 次迭代，并且没有创建任何不必要的中间数组。在数据量巨大时，性能提升非常显著}
    ```

2. ### `unshift`​ 和 `shift`​ —— 数组头部的“昂贵”操作

    我们需要在数组的开头添加或删除元素时，很自然地会想到 unshift 和 shift。但这两个操作在性能上非常“昂贵”。

    JavaScript 的数组在底层是以**连续的内存空间**存储的。

    - 当我们 `unshift`​ 一个新元素时，为了给这个新元素腾出位置，数组中**所有**现有元素都需要向后移动一位。
    - 同样，当我们 `shift`​ 删除第一个元素时，为了填补空缺，**所有**后续元素都需要向前移动一位。

    常见写法(不合适)：

    ```js
    const numbers = [/* ... 100,000 个数字 ... */];

    // 极其缓慢的操作
    for(let i = 0; i < 1000; i++){
    	numbers.unshift(i); // 每次操作都要移动所有现有元素
    }
    ```

    #### 优化方案：用 `push`​ 和 `pop`​，或者先 `reverse`​

    1. **从尾部操作**：`push`​ 和 `pop`​ 只操作数组的末尾，不需要移动其他元素，因此速度极快（O(1) 复杂度）。如果业务逻辑允许，尽量将操作改为在数组尾部进行。
    2. **先收集，再反转**：如果我们确实需要在开头添加一堆元素，更好的办法是先把它们 `push`​ 进一个临时数组，然后通过 `concat`​ 或扩展语法合并，或者最后进行一次 `reverse`​。

    ```js
    const numbers = [/* ... 100,000 个数字 ... */];
    const newItems = [];

    for (let i = 0; i < 1000; i++) {
      newItems.push(i); // 在新数组尾部添加，非常快
    }

    // 最终合并，比 1000 次 unshift 快得多
    const finalArray = newItems.reverse().concat(numbers);
    ```

3. ### 滥用 `includes`​, `indexOf`​, `find`​

    场景：在循环中查找一个元素是否存在于另一个数组中

    ```js
    const productIds = [/* ... 1,000 个ID ... */];
    const productsInStock = [/* ... 5,000 个有库存的产品对象 ... */];

    // 性能糟糕的写法
    const availableProducts = productsInStock.filter(product => 
    	productIds.includes(product.id); // 每次 filter 都要在 productIds 中搜索一遍
    );
    ```
    这段代码的问题在于，filter 每遍历一个库存产品，includes 就要从头到尾搜索 productIds 数组来查找匹配项。如果 productIds 很大，这个嵌套循环的计算量将是 5000 * 1000，非常恐怖。

    #### 优化方案：使用 `Set`​ 或 `Map`​ 创建查找表

    ​`Set`​ 和 `Map`​ 数据结构在查找元素方面具有天然的性能优势。它们的查找时间复杂度接近 O(1)，几乎是瞬时的，无论集合有多大。

    我们可以先把用于查找的数组转换成一个 `Set`​。

    ```js
    const productIds = [/* ... 1,000 个 ID ... */];
    const productsInStock = [/* ... 5,000 个有库存的产品对象 ... */];

    // 1. 创建一个 Set 用于快速查找
    const idSet = new Set(productIds); // 这一步很快

    // 2. 在 filter 中使用 Set.has()
    const availableProducts = productsInStock.filter(product => 
      idSet.has(product.id) // .has() 操作近乎瞬时完成
    );
    ```
    通过一次性的转换，我们将一个嵌套循环的性能问题，优化成了一个单次循环，性能提升是数量级的。
