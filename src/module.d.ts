interface ImportMeta {
	hot: {
		accept: () => void;
		dispose: (cb: () => void) => void;
	};
}
