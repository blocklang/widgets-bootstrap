const { describe, it } = intern.getInterface("bdd");

import harness from "@dojo/framework/testing/harness";
import { tsx } from "@dojo/framework/core/vdom";
import PageData from "../../../src/page-data";

describe("PageData", () => {
	it("default properties", () => {
		const h = harness(() => <PageData jsonData={{}} />);

		h.expect(() => <virtual></virtual>);
	});

	it("jsonPath: not exist", () => {
		const h = harness(() => <PageData jsonData={{}} jsonPath="$.a" />);

		h.expect(() => <virtual></virtual>);
	});

	it("jsonPath: $.a", () => {
		const jsonData = { a: "hello" };
		const h = harness(() => <PageData jsonData={jsonData} jsonPath="$.a" />);

		h.expect(() => <virtual>hello</virtual>);
	});

	it("jsonPath: $.a[0].b", () => {
		const jsonData = { a: [{ b: "bar" }] };
		const h = harness(() => <PageData jsonData={jsonData} jsonPath="$.a[0].b" />);

		h.expect(() => <virtual>bar</virtual>);
	});
});
