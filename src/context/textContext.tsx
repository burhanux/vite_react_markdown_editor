import { createContext, useState } from "react";

const textContext = createContext({});

const TextProvider = (props: { children: any }) => {
    const [text, setText] = useState<string>("");
    const values = {
        text, setText
    }
    return (<textContext.Provider value={values}>
        {props.children}
    </textContext.Provider>)
}