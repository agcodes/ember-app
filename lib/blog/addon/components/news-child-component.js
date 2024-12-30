import Component from "@glimmer/component";
import {action} from '@ember/object';

export default class NewsChildComponent extends Component {
	@action sendAction(){
		this.args.parentAction();
	}
}