import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import styles from "./code-editor.module.scss";
import { isMacOS } from "utils";

export default function CodeEditor() {
  return (
    <CodeMirror
      className={styles.editor}
      value=""
      theme="dark"
      height="100%"
      editable={true}
      extensions={[javascript({ jsx: false })]}
      onKeyDown={(event) => {
        const isCmd = isMacOS() ? event.metaKey : event.ctrlKey;
        if (isCmd && event.key === "s") {
          event.preventDefault();
        }
      }}
      // onChange={(value) => {}}
    />
  );
}
