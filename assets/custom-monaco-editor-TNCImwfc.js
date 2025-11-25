import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, k as useColorMode } from "./chakra-ui-NHV_-bGL.js";
import { En as editor, Tn as KeyMod, wn as KeyCode } from "./monaco-CcclqKWN.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
const CustomMonacoEditor = (props) => {
	const { colorMode } = useColorMode();
	const { theme: propTheme, options: monacoOptions, onMount, value, language, keyBindings, onChange } = props;
	const editorRef = import_react.useRef(null);
	const containerRef = import_react.useRef(null);
	import_react.useEffect(() => {
		if (!containerRef.current) return;
		const currentTheme = propTheme || (colorMode === "dark" ? "vs-dark" : "vs");
		editorRef.current = editor.create(containerRef.current, {
			value,
			language,
			theme: currentTheme,
			...monacoOptions
		});
		onMount?.();
		const changeModelContentSubscription = editorRef.current.onDidChangeModelContent(() => {
			onChange?.(editorRef.current?.getValue() ?? "");
		});
		keyBindings?.forEach((binding) => {
			editorRef.current?.addCommand(binding.key, binding.action);
		});
		const resizeObserver = new ResizeObserver(() => {
			editorRef.current?.layout();
		});
		resizeObserver.observe(containerRef.current);
		return () => {
			resizeObserver.disconnect();
			changeModelContentSubscription.dispose();
			editorRef.current?.dispose();
		};
	}, [
		value,
		language,
		monacoOptions,
		onMount,
		keyBindings,
		propTheme,
		colorMode,
		onChange
	]);
	import_react.useEffect(() => {
		if (editorRef.current) {
			const model = editorRef.current.getModel();
			const position = editorRef.current.getPosition();
			editorRef.current.setValue(value);
			if (model && position) {
				editorRef.current.setPosition(position);
				editorRef.current.revealPosition(position);
			}
		}
	}, [value]);
	import_react.useEffect(() => {
		if (editorRef.current && !propTheme) {
			const newTheme = colorMode === "dark" ? "vs-dark" : "vs";
			editor.setTheme(newTheme);
		}
	}, [colorMode, propTheme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		style: { height: "100%" }
	});
};
const MonacoKeyMod = KeyMod;
const MonacoKeyCode = KeyCode;
export { CustomMonacoEditor, MonacoKeyCode, MonacoKeyMod };
