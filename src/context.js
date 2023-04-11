import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => { // children 就是 index.js 中的 <App/>
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openSidebar = () => {
        setShowSidebar(true);
    }

    const openModal = () => {
        setShowModal(true);
    }

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    const closeModal = () => {
        setShowModal(false);
    } // 由于 value AppContext 的 value property 可以 注入 Home，
    // 则 这些 function 也可以注入 value 并分散给 component。

    return <AppContext.Provider value={{
        showModal,showSidebar,
        openModal,openSidebar,
        closeModal,closeSidebar
    }}>
        {children} 
        {/* 这里的 children 就是 AppProvider import 到 index.js 之后，
        包括在 <AppProvider></AppProvider> 中的 <App/> */}
    </AppContext.Provider>
}

// custom hook
// 作用：避免 import 多个 module (useContext 和 AppContext) 让 component 变卡。
// 在 component 中使用时，只需要注入 { useGlobalContext } 即可。
export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider} // Export 到 index.js 中去