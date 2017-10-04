import React, { Component, PropTypes } from "react";
import { EditableText } from "@blueprintjs/core";

var containerStyle = {
	display: 'flex',
	minHeight: '100vh',
	flexWrap: 'wrap',
	backgroundColor: 'lightgray'
}
var sidebarStyle = {
	flexBasis: '20%',
	textAlign: 'center',
	backgroundColor: 'white',
	minHeight: '95vh'
}
var sidebarHeaderStyle = {
	backgroundColor: 'darkblue',
    display: 'flex'
}
var sidebarHeadingStyle = {
	marginTop: '3rem',
    backgroundColor: 'cornflowerblue',
    padding: '1rem',
    flex: '1'
}
var bodyStyle = {
	display: 'flex',
	flexDirection: 'column',
	flex: '1'
}
var mainStyle = {
	flex: '1',
	margin: '3rem'
}
var footerStyle = {
	flexBasis: '100%',
	textAlign: 'center',
	alignSelf: 'flex-end',
	backgroundColor: 'darkgrey',
	minHeight: '5vh'
}
class Test extends Component {
	static propTypes = {};

	render() {
		return <div style={containerStyle}>
			<aside style={sidebarStyle}>
				<div style={sidebarHeaderStyle}>
					<div style={sidebarHeadingStyle}>
						<h3>My Project</h3>
					</div>
				</div>
			</aside>
			<div style={bodyStyle}>
				<main className="pt-card" style={mainStyle}>						
					<h1>Project Settings Page</h1>
					<p>Name</p>
					<h2><EditableText /></h2>
					<label htmlFor="search">Search Something</label>
					<div className="pt-input-group">
					  <span className="pt-icon pt-icon-search"></span>
					  <input className="pt-input" type="search" name="search" placeholder="Search input" dir="auto" />
					</div>
				</main>
			</div>
			<footer style={footerStyle}>
				<a href="www.refinepro.com">www.refinepro.com</a>
			</footer>
		</div>;
	}
}

export default Test;
