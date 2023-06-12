import Component from "@glimmer/component";

export default class WeatherChildComponent extends Component {
	get temperature() {
		return this.args.temperature;
	}
}