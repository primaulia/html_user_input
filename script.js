$(document).ready(function () {
  var $form = $('form')
  // var $links = $('a')

  // $links.on('click', function (e) {
  //   e.preventDefault()
  // })

  $form.on('submit', function (e) {
    e.preventDefault()
    var data = $(this).serializeArray()

    var inputStr = data.reduce(function (accu, next) {
      accu += ', ' + next.value
      return accu
    }, '')

    $('h1').text(inputStr)
  })
})
