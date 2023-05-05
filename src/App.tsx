import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { ReactMarkdown } from "react-markdown/lib/react-markdown"


const code = ``;

function App() {
  return (<div className="relative flex w-full h-full">

    {/* Editor */}
    <div className="flex w-full h-full">
      <CodeMirror style={{ width: "100%" }} value={code} theme={dracula} extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />
      {/* <textarea className="flex w-full h-full border-none outline-none"></textarea> */}
    </div>

    {/* Devider */}
    <div className="h-full min-h-screen border p-0 m-2"></div>

    {/* Markdown */}
    <div className="flex w-full h-full">
      <ReactMarkdown className="prose w-full" children={code}></ReactMarkdown>

    </div>

  </div>)
}

export default App
