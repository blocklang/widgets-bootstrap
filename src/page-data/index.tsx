import WidgetBase from "@dojo/framework/core/WidgetBase";
import { tsx } from "@dojo/framework/core/vdom";
import * as jp from "jsonpath";

export interface PageDataProperties {
	jsonData: any;
	jsonPath?: string;
}

export default class PageData extends WidgetBase<PageDataProperties> {
	protected render() {
		const { jsonData, jsonPath = "" } = this.properties;

		if (!jsonData || jsonPath.trim() === "") {
			return <virtual></virtual>;
		}

		console.log(jsonData, jsonPath);

		const value = jp.value(jsonData, jsonPath) || "";
		console.log(value);

		return <virtual>{`{${jsonPath}}: ${value}`}</virtual>;
	}
}
