$(function() {
	$("#submit").click(submitCode);
});

function submitCode() {
	var code = $('#code').val();
	var params = $('#params').val();
	$.ajax({
		method: "POST",
		url: "/code",
		data: { code: code, params: params },
		dataType: "json"
	}).done(function(jsonData) {
		if(jsonData.err) {
			$('#error').val(jsonData.err);
			$('#result').val("");
		} else {
			$('#error').val("");
			$('#result').val(jsonData.out);
		}
	})
}