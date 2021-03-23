function newItem() {
  // Adding a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();

  if (inputValue.length < 1) {
    alert('You must write something!');
  } else {
    li.append(inputValue);
    $('#list').append(li);
    $('#input').val('');
  }

  // Crossing an item out:
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  // Adding a delete button 'X'
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append('X');
  li.append(crossOutButton);

  // Adding CLASS DELETE (DISPLAY: NONE) from the css:
  crossOutButton.on('click', function() {
    li.addClass('delete');
  });

  // Reordering the items:
  $('#list').sortable();
}
