$(function() {
  $('#site-modal').on('show.bs.modal', function(event) {
    $(this)
      .find('.modal-content img')
      .attr('src', $(event.relatedTarget).data('highres'));
  });
}); // Make sure Document loaded
