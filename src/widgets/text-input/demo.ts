import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';

export default class TextInput extends WidgetBase {
	protected render(): DNode {
		return v('div', ['TextInput Widget Demo']);
	}
}
