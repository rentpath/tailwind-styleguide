interface ImportMeta {
	env: {
		MODE: string
	},
	hot: {
		accept: () => void;
		dispose: (cb: () => void) => void;
	};
}
