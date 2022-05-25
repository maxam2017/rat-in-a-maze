import mitt from "mitt";

type Events = {
  "run-code": void;
};

const appEmitter = mitt<Events>();

export default appEmitter;
