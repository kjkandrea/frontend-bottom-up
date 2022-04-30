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