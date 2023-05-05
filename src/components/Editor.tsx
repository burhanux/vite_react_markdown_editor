import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useContext } from 'react';
import { textContext } from '../context/textContext';


const Editor = () => {
    const { text, setText } = useContext(textContext)
    return (<div className="flex w-full h-full">
        <CodeMirror style={{ width: "100%" }} value={text} onChange={(e) => setText(e)} theme={dracula} extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />
    </div>)
}

export default Editor;