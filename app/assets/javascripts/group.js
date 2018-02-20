$(function(){

  var search_list = $('#chat-group-users.clearfix');
  var member_list = $("#user-search-result");

  function addUser(name, id){
    var html = `<div class='chat-group-user clearfix js-chat-member' data-user-id="${id}" data-user-name="${name}">
                  <input name="" type="hidden" value="${id}">
                  <p class="chat-group-user__name">${name}</p>
                  <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-name="${name}">削除</a>
                </div>`
    search_list.append(html);
  }

  function appendUser(user){
    var html = `<div class="chat-group-user clearfix" data-user-id="${user.id}" data-user-name="${user.name}">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    member_list.append(html);
  }

  function appendNoUser(user){
    var html = `<div class="chat-group-user clearfix">${user}</div>`
    member_list.append(html);
  }

  $(document).on("click", ".chat-group-user__btn--add", function(){
    var name = $(this).attr('data-user-name');
    var id = $(this).attr('data-user-id');
    addUser(name,id);
    $(this).parent().remove();
  });
  $(document).on("click", ".js-remove-btn", function(){
    $(this).parent().remove();
  });

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      $(".chat-group-user.clearfix").empty();
      if (users.length !==0){
        users.forEach(function(user){
          appendUser(user);
          });

      } else {
        appendNoUser("一致するユーザーはいません");
      }
    })
    .fail(function(){
      alert('error');
    });
  });

});
