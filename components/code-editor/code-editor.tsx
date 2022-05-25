import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import styles from "./code-editor.module.scss";
import { isMacOS } from "utils";
import { BFS_CODE } from "components/maze/maze.constant";

export default function CodeEditor() {
  return (
    <CodeMirror
      className={styles.editor}
      value={BFS_CODE}
      theme="dark"
      height="100%"
      editable={false}
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
