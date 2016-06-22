let _todos = {};
let _callbacks = [];

const ToDoStore = {
  all: function(){
    return Object.assign({}, _todos);
  },


  executeHandlers: function(){
    _callbacks.forEach(function(cb){
      cb();
    });
  },


  create: function(obj){
    $.ajax({
      method: 'POST',
      url: "/api/todos",
      dataType: "JSON",
      data: {todo: obj},
      success: function(resp){
        _todos[resp.id] = resp;
        this.executeHandlers();
      }.bind(this)
    });
  },

  destroy: function(id){
    $.ajax({
      method: "DELETE",
      url: `/api/todos/${id}`,
      dataType: "JSON",
      success: function (resp){
        delete _todos[id];
        this.executeHandlers();
      }.bind(this)
    });
  },

  toggleDone: (id) => {
    $.ajax({
      method: "PATCH",
      url: `/api/todos/${id}`,
      dataType: "JSON",
      success: function(resp){
        _todos[id] = resp;
        this.executeHandlers();
      }.bind(this)
    });
  },

  reset: function(newToDos){
    _todos = newToDos;
  },

  addHandler: function(cb){
    _callbacks.push(cb);
  },

  removeHandler: function(cb){
    let idx = _callbacks.indexOf(cb);
    _callbacks.splice(idx, 1);
  },

  fetch: function() {
    $.ajax({
      url: "/api/todos",
      dataType: "JSON",
      success: function(resp){
        let objResp = {};
        resp.forEach(function(respInst){
          objResp[respInst.id] = respInst;
        });
        this.reset(objResp);
        this.executeHandlers();
      }.bind(this)
    });
  }
};

module.exports = ToDoStore;
