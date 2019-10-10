const { describe, it } = intern.getInterface("bdd");

import harness from "@dojo/framework/testing/harness";
import { tsx } from "@dojo/framework/core/vdom";

import TextInput from "../../src/text-input";
import * as css from "../../src/text-input/index.m.css";

describe("TextInput", () => {
	it("default properties", () => {
		const h = harness(() => <TextInput />);
		h.expect(() => <input classes={[css.root]} value={undefined} oninput={() => {}} />);
	});

	it("value", () => {
		const h = harness(() => <TextInput value="1" />);
		h.expect(() => <input classes={[css.root]} value="1" oninput={() => {}} />);
	});
});
