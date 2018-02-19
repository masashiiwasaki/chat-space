$(function(){

  var serch_list = $('#chat-group-users.clearfix');

  function addUser(name, id){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8' data-user-id="${id}" data-user-name="${name}">
                  <input name="" type="hidden" value="${id}">
                  <p class="chat-group-user__name">${name}</p>
                  <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-name="${name}">削除</a>
                </div>`
    serch_list.append(html);
  }

  $(document).on("click", ".chat-group-user__btn--add", function(){
    console.log("aaa");
    var name = $(this).attr('data-user-name');
    var id = $(this).attr('data-user-id');
    addUser(name,id);
    $(this).parent().remove();
  });
  $(document).on("click", ".js-remove-btn", function(){
    console.log("bbb");
    $(this).parent().remove();
  });

});
