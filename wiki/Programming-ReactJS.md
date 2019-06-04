---
layout: page
title: Programming ReactJS
wikiPageName: Programming-ReactJS
menu: wiki
---

## Code samples

### Testing

* Combining functional and snapshot testing: [Component](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/SingleForm.js) - [Tests](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/SingleForm.test.js)

* Snapshot test with mocks, sample data and negative tests: [Component](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/Users.js) - [Tests](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/Users.test.js)

* Reducers tests:
  * [Reducer for Dictionary-Shape](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/reducers/todos.js) - [Tests](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/reducers/todos.test.js)
  * [Reducer for Array](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app/src/reducers/todos.js) - [Tests](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app/src/reducers/todos.test.js)

### Redux

* **Condensed example**: [redux_sample_in_one_file.js](https://gist.github.com/dacanizares/2684684c5b7a9031570a4ef501e8f579)

* Functional Components and Containers examples:

  * **Basic**: [Functional Component](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/TodoList.js) - [Container](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/containers/VisibleTodoList.js) - [How to use it](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/App.js)

  * **Own Props**: [Functional Component](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/Link.js) - [Container](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/containers/FilterLink.js) - [How to use it](https://github.com/dacanizares/ReactJS-Redux-Examples/blob/master/todo-app/src/components/Footer.js)

  * **HOC extending functional component**: [Functional Component](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/Users.js) - [HOC](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/wrappers/withLoading.js) - [Container](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/containers/UsersContainer.js) - [How to use it](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/App.js)

* Thunk:

  * **API calling** with UI *on-loading* and *receiving* states: 
    * [Simple API call](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/api/UsersApi.js) - [Actions](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/actions/index.js) - [Reducers](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/reducers/index.js) - [Create store](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/index.js) - [Container](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/containers/UsersContainer.js).
    * See also *HOC extending functional component*: [Functional Component](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/Users.js) - [HOC](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/wrappers/withLoading.js) - [Container](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/containers/UsersContainer.js) - [How to use it](https://github.com/dacanizares/reactjs-redux-thunk-example/blob/master/src/components/App.js)

* Redux-Forms:

  * [Form](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/src/components/streams/StreamForm.js) - [Editing](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/src/components/streams/StreamEdit.js) - [Reducer](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/src/reducers/index.js)

* Selectors:
  
  * Library [reselect](https://github.com/reduxjs/reselect)

  * Using [Selectors from state and props](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors/src/selectors/index.js) and [Containers](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors/src/containers/VisibleTodoList.js).

  * Using [Router and state selectors](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/selectors/index.js) with [Containers](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/containers/VisibleTodoList.js).

* **Advanced example**:

  * Configuring a [Store](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/configureStore.js) with Redux Dev Tools and auto-saving to [local storage](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/localStorage.js) and [using it](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/index.js).

  * [Root component](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/components/Root.js) and [child components with access to Router](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/containers/VisibleTodoList.js) and [Selectors](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/selectors/index.js).

  * [Bind history to the router](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/src/components/App.js), [Create manual history](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/src/history.js) and [use it to redirect](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/src/actions/index.js)

  * [Reducer composition](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/reducers/todos.js) and [Actions](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/actions/index.js). State using *Dictionary Shape* and [Selectors](https://github.com/dacanizares/reactjs-redux-examples/blob/master/todo-app-router-selectors-advanced/src/selectors/index.js) to convert it into *Values Array*.

  * [React Portals](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/src/components/Modal.js) This is an example for modals. [Use of the modal](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/src/components/streams/StreamDelete.js). [Add the div in index.html](https://github.com/pipecaniza/React-Traning/blob/master/streams/client/public/index.html)

### FAQ

* React Router changes url params but doesn't re-mount component: https://stackoverflow.com/questions/48009825/force-remounting-component-when-react-router-params-changing

