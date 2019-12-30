import { create, tsx } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import dojo from "@dojo/themes/dojo";

import * as css from "./App.m.css";
import PlainText from "./plain-text";
import TextInput from "./text-input";
import "bootstrap/dist/css/bootstrap.min.css";

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	if (!theme.get()) {
		theme.set(dojo);
	}
	return (
		<div classes={[css.root]}>
			<fieldset>
				<legend>PlainText</legend>
				空文本：
				<code>
					<PlainText />
				</code>{" "}
				<br />
				有文本：
				<code>
					<PlainText value="Hello World!" />
				</code>{" "}
				<br />
			</fieldset>

			<fieldset>
				<legend>TextInput</legend>
				<TextInput />
			</fieldset>
		</div>
	);
});
