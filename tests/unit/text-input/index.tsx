const { describe, it } = intern.getInterface("bdd");

import harness from "@dojo/framework/testing/harness";
import { tsx } from "@dojo/framework/core/vdom";

import TextInput from "../../../src/text-input";
import * as c from "bootstrap-classes";
import * as css from "../../../src/text-input/index.m.css";

describe("TextInput", () => {
	it("default properties", () => {
		const h = harness(() => <TextInput />);
		h.expect(() => <input key="root" classes={[css.root, c.form_control]} value="" oninput={() => {}} />);
	});

	it("custom properties", () => {
		const h = harness(() => <TextInput value="1" />);
		h.expect(() => <input key="root" classes={[css.root, c.form_control]} value="1" oninput={() => {}} />);
	});
});
