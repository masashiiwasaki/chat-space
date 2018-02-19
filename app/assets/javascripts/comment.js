$(function(){
  function buildHTML(message){
    var image = (message.image.url == null) ? "" : `<img src="${message.image.url}">`
    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">${message.user_name}</div>
                    <div class="upper-message__date">${message.date}</div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">${message.content}</p>
                    ${image}
                  </div>
                </div>`
    return html;
  }

  function pageRESET(){
    $('.form__message').val('');
    $('#message_image').val('');
    $('.form__submit').prop('disabled', false);
  };

  function defineFLASH(){
    var notice = `<div class="notice">送信が完了しました。</div>`
    return notice;
  };

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      var notice = defineFLASH();
      $('.messages').append(html);
      $('.notification').append(notice);
      $('.notice').fadeOut(8000);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight })
      $('.notification').val('');
      pageRESET()
    })
    .fail(function(){
      alert("エラーが発生しました。");
      pageRESET()
    })
  })
})
