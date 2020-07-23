
/**
 *
 * import React,{useState,useEffect,useContext,useCallback} from 'react';
 * 1、useState 更改状态的hooks
 * 使用：
 * 		const [state,setState] = useState;
 *
 * 		setState(state+1)
 *
 * 2、useEffect  可以替代componentDidMount componentDidUpdate componentWillUnMount
 *
 * useEffect(()=>{
 * 	console.log('走否')
 * },[])
 * 空数组表达的是，只走一次这里，如果想多次走，相当于componentDidUpdate的功能，那么空数组就不加，就可以每次触发，空数组里
 * 可以添加内容，当数组里的内容发生变化的时候，也会触发
 * 3、useContext 减少组件层级
 * 首先声明一个公共方法 const themObj = React.createContext(null)
 * 父组件
 * 		<themObj.Provider value='123'>
 * 			<Child />
 * 		</themObj.Provider>
 *
 * 子组件
 * 	 const user = useContext(themObj);
 * 	 console.log(user) //123
 *
 * 4、useReducer
 *  const [state,dispatch] = useReducer(reducer,initialState);
 *
 * 类似于redux，dispacth发起actions请求，改变state的值
 * 结合useContext可以代替redux
 *
 * 	大概是
 * 	<themObj.Provider value={{state,dispatch}}>
 * 	<Child />
 * </themObj.Provider>
 *这样就可以实现组件之间共享了
 *
 * 5、useCallback记忆函数
 *
 * 使用
 * 	function clickfn = useCallback(()=>{
 * 		console.log('点击了)
 * 	},[])  //数组的意思是和上面的useEffect的效果一样，空数组只有第一次的时候才执行创建，以后再怎么更新，都不会重新创建，节省性能
 * 所以叫做记忆函数
 * 		<Button onClick={clickfn}>点击事件</Button>
 *
 *6、useMemo 记忆组件

 * 使用
 * 	function clickfn = useMemo( () => ()=>{
 * 		console.log('点击了)
 * 	},[])  //数组的意思是和上面的useEffect的效果一样，空数组只有第一次的时候才执行创建，以后再怎么更新，都不会重新创建，节省性能
 * 所以叫做记忆函数
 * 		<Button onClick={clickfn}>点击事件</Button>

 * 这个方法和useCallback方法类似 唯一的区别是，useCallback不会执行第一个参数的函数，而是将它返回给你，而useMemo会执行第一个函数，
 并将结果返回
 *
 *function Parent({ a, b }) {
  // Only re-rendered if `a` changes:
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // Only re-rendered if `b` changes:
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <>
      {child1}
      {child2}
    </>
  )
}

只有a/b改变时，这两组件才会重新渲染
7、useRef
let nameRef = useRef();


		<input ref={nameRef} />

		<Button onClick={()=>{
			console.log(nameRef.current.values)
		}}></Button>
 *
 8、useLayoutEffect 同步执行副作用

这个是在useEffect之前DOM更新之后进行的，

 */