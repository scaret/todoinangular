function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn angular', done:true, date:"2013-12-02"},
    {text:'build an angular app', done:false, date:"2013-12-31"}];
 
  var now = new Date();
  $scope.now = now.getFullYear()+"-" + (now.getMonth()+1) + "-" + now.getDate();
  $scope.todoDeadline = $scope.now;
  
  $scope.addTodo = function() {
	console.log("triggered");
    $scope.todos.push({text:$scope.todoText, done:false, date:$scope.todoDeadline});
    $scope.todoText = '';
    $scope.todoDeadline = $scope.now;
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };

  $scope.sort = function(){
	$scope.todos.sort(function(todo){return  (0 + todo.date.split("-").join("0")) * (todo.done?1:-1);});
  };

}