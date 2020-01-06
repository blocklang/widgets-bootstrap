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

		const value = jp.value(jsonData, jsonPath) || "";
		return <virtual>{value}</virtual>;
	}
}
