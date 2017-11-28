import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, Button, TextInput, StyleSheet, Platform } from 'react-native';
import App from './App';

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

class TodoApp extends Component {
	state = {
		tasks:  [],
	}

	addTask = task => {
		console.log(task);
		let tasks = this.state.tasks.concat([{'title': task}]);

		  this.setState({
		      tasks: tasks
		  })

		  console.log(tasks);
		// var temp = (this.state.tasks && this.state.tasks.length > 0) ? this.state.tasks : []
		// temp.push(task)
		// this.setState({ tasks : temp, text: '' })
	}


	render() {
		const taskList = this.state.tasks.map((data) => {
		    return (
		      <View><Text>{data.title}</Text></View>
		    )
		  });
		return (
			<View style={[styles.container]}>
				{taskList}
				
				<TextInput
		        	style={styles.textInput}
	          		onSubmitEditing={this.addTask}
	          		value={this.state.text}
	          		placeholder="Add Tasks"
	          		returnKeyType="done"
	          		returnKeyLabel="done"
		        />
			</View>
		);
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
});

AppRegistry.registerComponent('todo', () => TodoApp);
