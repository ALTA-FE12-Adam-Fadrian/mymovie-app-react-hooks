import React,{useState} from "react";

interface Props {
    children?: React.ReactNode
}


const [darkTheme, setDarkTheme] = useState(true)

function toogleTheme() {
    setDarkTheme(prev => !prev)
}

export function ThemeProvider({children}) {

}