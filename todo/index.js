import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, Button, TextInput, StyleSheet, Platform } from 'react-native';
import App from './App';

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

class TodoApp extends Component {
	state = {
		tasks:  [],
	}

	addTask = () => {
		let tasks = this.state.tasks.concat([{'title': this.state.text}]);

		this.setState({
			tasks: tasks,
			text: 'Add Task'
		})

	}

	deleteTask = index => {
		let temp = this.state.tasks.splice(index, 1);
		let tasks = this.state.tasks
		this.setState({ tasks: tasks })
	}

	render() {
		return (
			<View style={[styles.container]}>
				<FlatList style={styles.list} data={this.state.tasks} renderItem={({ item, index }) =>
					<View>
		            	<View style={styles.listItemCont}>
		                	<Text style={styles.listItem}>
		                  		{ item.title }
		                	</Text>
		                	<Button title="X" onPress={() => this.deleteTask(index)} />
		              </View>
		              <View style={styles.hr} />
		            </View>}
		        />
				
				<TextInput
		        	style={styles.textInput}
		        	onChangeText={(text) => this.setState({text})}
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
