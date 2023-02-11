const name = "codexgh"
let oli = "<li><b>" + name + ", learning ES6</b></li>"
// 我们发现上面这种不能换行，不利于阅读，而且使用变量只能使用字符串拼接方法。

// 模板字符串：
let oli1 = `
          <li>
            <b>${name}, learning ES6</b>
          </li>
      `
      console.log(oli1);