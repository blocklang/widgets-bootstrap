import { tsx, create } from "@dojo/framework/core/vdom";
import { isObject } from "util";

export interface PageDataProperties {
	data?: any;
}

const factory = create().properties<PageDataProperties>();

export default factory(function index({ properties }) {
	const { data } = properties();

	let value = data;
	if (Array.isArray(data) || isObject(data)) {
		value = JSON.stringify(data);
	}
	return <virtual>{`${value ? value : ""}`}</virtual>;
});
