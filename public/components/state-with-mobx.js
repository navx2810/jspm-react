import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable, computed } from "mobx"

@observer
export default class Greeter extends Component {

	@observable name = "Bob"

	@computed get otherName() { return (this.name === "Bob") ? "Robert" : "Bob" }

	render() {
		return (
			<h1 onClick={() => { this.name = this.otherName }}>Hello, {this.name}. Click me to change the name to {this.otherName}</h1>
		)
	}


}