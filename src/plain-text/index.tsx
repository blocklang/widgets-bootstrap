import { create, tsx } from "@dojo/framework/core/vdom";

export interface PlainTextProperties {
	value?: string;
}

const factory = create().properties<PlainTextProperties>();

export default factory(function PlainText({ properties }) {
	const { value = "" } = properties();
	return <virtual key="root">{value}</virtual>;
});
