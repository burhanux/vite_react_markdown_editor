import Editor from "./components/Editor";
import Divider from "./components/Divider";
import Markdown from "./components/Markdown";
import TextProvider from "./context/textContext";

function App() {
  return (<div className="relative flex w-full h-full">
    <TextProvider>
      {/* Editor */}
      <Editor />
      {/* ievider */}
      <Divider />
      {/* Markdown */}
      <Markdown />
    </TextProvider>
  </div>)
}

export default App
