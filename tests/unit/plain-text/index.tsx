const { describe, it } = intern.getInterface("bdd");

import harness from "@dojo/framework/testing/harness";
import { tsx } from "@dojo/framework/core/vdom";
import PlainText from "../../../src/plain-text";

describe("PlainText", () => {
	it("default properties", () => {
		const h = harness(() => <PlainText />);

		h.expect(() => <virtual key="root"></virtual>);
	});

	it("custom properties", () => {
		const h = harness(() => <PlainText value="Hello" />);

		h.expect(() => <virtual key="root">Hello</virtual>);
	});
});
