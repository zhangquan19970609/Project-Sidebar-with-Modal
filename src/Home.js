import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
// Before custom hook
// import { AppContext } from './context'

// After custom hook
import { useGlobalContext } from './context'

const Home = () => {
  
  // const data = useGlobalContext();
  // console.log(data); 
  // 将 两个 state 和重设用的 function 取到！
  // 本 Home component 只需要 两个 open function，不涉及 useState
  const {openModal,openSidebar} = useGlobalContext();

  // 添加完毕后，可以看到每次新加载页面， 
  // 会将 <AppContext.Provider value={'Hello!'}> 的 value 打印出来

  // 用 AppContext 设置这个 useGlobalContext 的意义: 
  // 在所有 APP 组件中，都可以取到 useContext

  return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars />
    </button>
    <button className='btn' onClick={openModal}>show modal</button>
  </main>
}

export default Home
