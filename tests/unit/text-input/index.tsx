const { describe, it } = intern.getInterface("bdd");
const { assert } = intern.getPlugin("chai");

import harness from "@dojo/framework/testing/harness";
import { tsx } from "@dojo/framework/core/vdom";
import { stub } from "sinon";
import TextInput from "../../../src/text-input";
import * as c from "bootstrap-classes";
import * as css from "../../../src/text-input/index.m.css";
import assertionTemplate from "@dojo/framework/testing/assertionTemplate";

const baseAssertion = assertionTemplate(() => (
	<input key="root" classes={[css.root, c.form_control]} value="" oninput={() => {}} />
));

describe("TextInput", () => {
	it("default properties", () => {
		const h = harness(() => <TextInput />);
		h.expect(baseAssertion);
	});

	it("custom properties", () => {
		const valueAssertion = baseAssertion.setProperty("@root", "value", "1");
		const h = harness(() => <TextInput value="1" />);
		h.expect(valueAssertion);
	});

	it("onValue", () => {
		const onValueStub = stub();
		const h = harness(() => <TextInput onValue={onValueStub} />);
		h.trigger("@root", "oninput", { target: { value: "1" }, stopPropagation: () => {} });
		assert.isTrue(onValueStub.calledOnce);
	});
});
