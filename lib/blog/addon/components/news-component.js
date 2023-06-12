import Component from "@glimmer/component";
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class NewsComponent extends Component {
	@tracked info;
	constructor(owner, args) {
		super(owner, args);
		this.info = "Waiting...";
	}
	@action receiveAction() {
		console.log("receive action");
		this.info = "Action sent by child at "+new Date().toISOString();
	}
}