import { n as CB, r as NQ } from "./chunk-EIO257PC-DdvrSbuu.js";
var s = import.meta.url ? new URL(import.meta.url) : void 0;
typeof window > "u" && typeof self < "u" && (self.onmessage = async (e) => {
	switch (e.data.command) {
		case CB.Subset:
			let a = await NQ(e.data.arrayBuffer, e.data.codePoints);
			self.postMessage(a, { transfer: [a] });
			break;
	}
});
export { s as WorkerUrl };
