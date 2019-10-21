# ref
    reference：引用

    
## 使用场景

1. 想获取dom元素,操作dom
2. 想直接使用自定义组件中的某个方法
3. 想直接使用dom元素中的某个方法

## 使用

```js

  <input type="text" ref="txt"/>

```
## 获取

```js

     console.log(this.refs.txt)

```

## 作用在不同组件上时
1. 内置组件：得到真实的dom对象
2. 自定义类组件：得到react元素对象
3. 自定义函数组件：不能使用ref

# ref不再推荐使用字符串赋值，将来可能被移除

推荐使用**对象**，或者是**函数**

1. 对象
    通过**React.createRef**函数创建或者自己{current:null}初始化，会在渲染时赋值

    ```js
        constructor(props){
            super(props)
            this.txt = React.createRef()  // { current:null }
        }

        <input type="text" ref={this.txt}/>

        this.txt.current.focus() //不再使用this.refs
    ```

2. 函数

    调用时机：
    
        1. 组件挂载完成之后componentDidMount会调用，
            1. 在此之前，不能使用ref

        2. 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数和新的函数（绑定了多个函数），时间点出现在componentDidUpdate之前。

            1. 旧的函数传入null
            2. 新的函数传入真正要用的参数
            3. 所以最好赋值函数的引用

        3. 如果组件被卸载，会调用
   

    参数遵循ref作用再不同组件上时的返回结果
    
    ```js
        <input type="text" ref={(dom) => {
            this.el = dom
        }}/>
    ```

**谨慎使用ref，什么时候无法避免？**
能不用就不用，与react理念不符

1. 要调用真实的dom对象中方法时，可以使用
2. 需要调用类组件的方法时
