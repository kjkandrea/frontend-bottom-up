# UI Framework

DOM 을 동적으로 제어하는것은 어려운 주제입니다.

`document.querySelectorAll` 등 범용성 있는 DOM API 가 보편화 되어 과거 `jQuery` 등에 의존하던 개발 환경 보다는 한층 성숙해졌습니다.
 
하지만 여전히 *데이터의 상태에 따른 문서의 변경* 을 다루는 주제는 가볍지 않습니다.

DOM API 를 이용한 컴포넌트 방식의 vanilla javascript 코드는 다음과 같습니다.

### TODO List : vanilla javascript

```js
import mock from '../mock'

(function () {
  var $app = document.getElementById('app')

  function main() {
    renderTodo(mock);
  }

  function renderTodo(todos) {
    $app.append(getTodosElement(todos))
  }

  function getTodosElement (todos) {
    var $todoList = document.createElement('ul')

    for (var i = 0; i < todos.length ;i += 1) {
      var $todoItem = document.createElement('li')
      $todoItem.id = getTodoId(todos[i].id)
      $todoItem.append(getTodoElement(todos[i]))
      $todoList.append($todoItem)
    }

    return $todoList;
  }

  function getTodoElement (todo) {
    var $todo = document.createElement('div')
    var $paragraph = document.createElement('p')
    var $deleteButton = document.createElement('button')
    var contentTextNode = document.createTextNode(todo.content)
    var deleteButtonTextNode = document.createTextNode('완료')
    $deleteButton.addEventListener('click', function () {
      deleteTodoById(todo.id)
    })

    $paragraph.append(contentTextNode)
    $deleteButton.append(deleteButtonTextNode)
    $todo.append($paragraph)
    $todo.append($deleteButton)

    return $todo;
  }

  function getTodoId (id) {
    var todoIdNamespace = 'todo-item-'

    return todoIdNamespace + id
  }

  function deleteTodoById (id) {
    document.getElementById(getTodoId(id)).remove()
  }

  main()
}())
```

이렇게 구현된 코드를 'DOM 중심의 사고방식' 이라 칭하겠습니다.
'DOM 중심의 사고방식' 코드 내에 일어나는 동적 이벤트들은 대체로 다음과 같은 특징을 띕니다. 

1. 이벤트를 수신한다.
2. DOM selector API 를 이용해 변경을 일으킬 DOM Node 를 찾아낸다.
3. 해당 DOM Node 에 변경을 일으킨다.

## React

이러한 주제를 추상화 하여 제공하는 대표적인 도구로는 React 가 있습니다.

React 는 데이터의 *상태 줌심으로 DOM 을 변경하도록 설계된* UI 라이브러리 입니다.

DOM 을 선언하는 주제에 대해서도 JSX 탬플릿 문법으로 훌륭한 대안을 제공합니다.

React 로 작성된 코드는 다음과 같습니다.

### TODO List : with react

```jsx
import React, { useState } from 'react'
import mock from '../mock'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('app')).render(<Main />)

function Main() {
  const [todos, setTodos] = useState(mock)

  const deleteTodoById = id => setTodos(prev => prev.filter(todo => todo.id !== id))

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <p>{todo.content}</p>
          <button onClick={() => deleteTodoById(todo.id)}>완료</button>
        </li>
      ))}
    </ul>
  )
}
```

이러한 React 등 UI Framework 를 통해 작성된 코드들은 '데이터 중심의 사고방식' 을 유도합니다.
'데이터 중심의 사고방식' 은 다음과 같은 특징을 띕니다.

1. 데이터를 수신한다.
2. 데이터를 변경한다.
3. DOM 은 그에 맞게 *동적으로* 업데이트 된다.