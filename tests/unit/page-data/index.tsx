const { describe, it } = intern.getInterface("bdd");

import harness from "@dojo/framework/testing/harness/harness";
import { tsx } from "@dojo/framework/core/vdom";
import assertionTemplate from "@dojo/framework/testing/harness/assertionTemplate";
import PageData from "../../../src/page-data";

const baseAssertion = assertionTemplate(() => <virtual assertion-key="root"></virtual>);

describe("PageData", () => {
	it("default properties", () => {
		const h = harness(() => <PageData />);
		h.expect(baseAssertion);
	});

	it("data is string", () => {
		const stringAssertion = baseAssertion.setChildren("~root", () => ["Hello"]);
		const h = harness(() => <PageData data="Hello" />);
		h.expect(stringAssertion);
	});

	it("data is number", () => {
		const numberAssertion = baseAssertion.setChildren("~root", () => ["1"]);
		const h = harness(() => <PageData data={1} />);
		h.expect(numberAssertion);
	});

	it("data is boolean", () => {
		const booleanAssertion = baseAssertion.setChildren("~root", () => ["true"]);
		const h = harness(() => <PageData data={true} />);
		h.expect(booleanAssertion);
	});

	it("data is object", () => {
		const objectAssertion = baseAssertion.setChildren("~root", () => ['{"a":"b"}']);
		const h = harness(() => <PageData data={{ a: "b" }} />);
		h.expect(objectAssertion);
	});

	it("data is array", () => {
		const arrayAssertion = baseAssertion.setChildren("~root", () => ['["a"]']);
		const h = harness(() => <PageData data={["a"]} />);
		h.expect(arrayAssertion);
	});
});
