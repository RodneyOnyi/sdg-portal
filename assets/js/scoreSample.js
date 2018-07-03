var response = [{
      "rank":"9",
      "content":"Alon",
      "UID":"5"
     },
     {
       "rank":"6",
       "content":"Tala",
       "UID":"6"
    },{
       "rank":"6",
       "content":"Yes",
       "UID":"6"
    }];

$(function() {
    $.each(response, function(i, item) {
        $('<tr>').append(
            $('<td>').text(item.rank),
            $('<td>').text(item.content),
            $('<td>').text(item.UID)
        ).appendTo('#records_table');
        // $('#records_table').append($tr);
        //console.log($tr.wrap('<p>').html());
    });
});