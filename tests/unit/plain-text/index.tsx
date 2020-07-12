const { describe, it } = intern.getInterface("bdd");

import harness from "@dojo/framework/testing/harness/harness";
import { tsx } from "@dojo/framework/core/vdom";
import PlainText from "../../../src/plain-text";
import assertionTemplate from "@dojo/framework/testing/harness/assertionTemplate";

const baseAssertion = assertionTemplate(() => <virtual key="root"></virtual>);

describe("PlainText", () => {
	it("default properties", () => {
		const h = harness(() => <PlainText />);
		h.expect(baseAssertion);
	});

	it("custom properties", () => {
		const valueAssertion = baseAssertion.setChildren("@root", () => ["Hello"]);
		const h = harness(() => <PlainText value="Hello" />);
		h.expect(valueAssertion);
	});
});
