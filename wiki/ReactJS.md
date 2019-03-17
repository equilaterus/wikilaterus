---
layout: page
title: ReactJS
wikiPageName: ReactJS
menu: wiki
---

## Code samples

### Testing

* Combining functional and snapshot testing: [Component](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/SingleForm.js) - [Tests](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/SingleForm.test.js)

### Redux

* Functional Components and Containers examples:

  * **Basic**: [Functional Component](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/TodoList.js) - [Container](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/containers/VisibleTodoList.js) - [How to use it](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/App.js)

  * **Own Props**: [Functional Component](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/Link.js) - [Container](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/containers/FilterLink.js) - [How to use it](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/Footer.js)

  * **HOC extending functional component**: [Functional Component](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/Users.js) - [HOC](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/wrappers/withLoading.js) - [Container](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/containers/UsersContainer.js) - [How to use it](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/App.js)

* Thunk:

  * **API calling** with UI *on-loading* and *receiving* states: 
    * [Simple API call](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/api/UsersApi.js) - [Actions](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/actions/index.js) - [Reducers](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/reducers/index.js) - [Create store](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/index.js).
    * See also *HOC extending functional component*: [Functional Component](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/Users.js) - [HOC](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/wrappers/withLoading.js) - [Container](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/containers/UsersContainer.js) - [How to use it](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/App.js)

* Selectors:
  
  * Library [reselect](https://github.com/reduxjs/reselect)

  * Using [Selectors from state and props](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors/src/selectors/index.js) and [Containers](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors/src/containers/VisibleTodoList.js).

  * Using [Router and state selectors](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/selectors/index.js) with [Containers](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/containers/VisibleTodoList.js).

* **Advanced example**:

  * Configuring a [Store](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/configureStore.js) with Redux Dev Tools and auto-saving to [local storage](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/localStorage.js) and [using it](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/index.js).

  * [Root component](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/components/Root.js) and [child components with access to Router](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/containers/VisibleTodoList.js) and [Selectors](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/selectors/index.js).

  * [Reducer composition](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/reducers/todos.js) and [Actions](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/actions/index.js). State using *Dictionary Shape* and [Selectors](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/selectors/index.js) to convert it into *Values Array*.

