import WidgetBase from "@dojo/framework/core/WidgetBase";
import { tsx } from "@dojo/framework/core/vdom";

export interface PlainTextProperties {
	value?: string;
}

export default class PlainText extends WidgetBase<PlainTextProperties> {
	protected render() {
		const { value = "" } = this.properties;

		return <virtual>{value}</virtual>;
	}
}
