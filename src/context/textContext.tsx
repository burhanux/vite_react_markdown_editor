import { createContext, useState } from "react";


interface defaultValuesProps {
    text: string,
    setText: any
}
const defaultValues: defaultValuesProps = {
    text: "",
    setText: (e: string) => (e)
}
export const textContext = createContext(defaultValues);

const TextProvider = (props: { children: any }) => {
    const [text, setText] = useState<string>("");
    const values = {
        text, setText
    }
    return (<textContext.Provider value={values}>
        {props.children}
    </textContext.Provider>)
}

export default TextProvider;