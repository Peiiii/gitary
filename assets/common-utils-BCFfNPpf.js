const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let nanoid$2 = (size = 21) => {
	let id = "";
	let bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
	while (size--) id += urlAlphabet[bytes[size] & 63];
	return id;
};
var nanoid$1 = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
	byte &= 63;
	if (byte < 36) id += byte.toString(36);
	else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
	else if (byte > 62) id += "-";
	else id += "_";
	return id;
}, "");
let nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
	byte &= 63;
	if (byte < 36) id += byte.toString(36);
	else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
	else if (byte > 62) id += "-";
	else id += "_";
	return id;
}, "");
export { nanoid$1 as n, nanoid$2 as r, nanoid as t };
