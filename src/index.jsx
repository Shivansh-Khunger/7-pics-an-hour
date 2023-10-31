import React from "react";
import { createRoot } from 'react-dom/client';
import "./output.css";
import Landing from "./landing"
import BgGrid from "./bg-grid"
import Content from "./content"
import Display from "./api-test";
document.getElementById("app").classList.add("bg-base-100","h-screen");

function App() {
    return (
        <>
            <Landing />
            {/* <Content/> */}
            <Display/>
        </>
    )
}

export default App;

const root = createRoot(document.getElementById('app'));
root.render(<App/>)