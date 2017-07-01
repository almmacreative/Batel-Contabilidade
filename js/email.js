function validar() {
  $('*').removeClass('error');
  $('.alert-info').hide();
	var erro = 0;

	$(".required").each(function(){
		if($(this).val() == '')
		{
			$(this).addClass('error');
      $("#validation_" + $(this).attr("id")).show();
			erro++;
		}
	});

	if(erro == 0)
	{
		return true;
	}
	else
	{
		alert('Favor preencher os campos !');

		return false;
	}
}
