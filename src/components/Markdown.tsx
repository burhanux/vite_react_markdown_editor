import { useContext } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { textContext } from "../context/textContext"


const Markdown = () => {
    const { text } = useContext(textContext)
    return (
        <div className="flex w-full h-full">
            <ReactMarkdown className="prose w-full" children={text}></ReactMarkdown>
        </div>
    )
}

export default Markdown;