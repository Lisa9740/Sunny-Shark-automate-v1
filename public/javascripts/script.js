//recupère les données dans le modal pour l'édition
$(function(){
	$('#editModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var marque = button.data('marque');
		var modele = button.data('modele');
		var secteur = button.data('secteur');
		var lieu = button.data('lieu');
		var bassin = button.data('bassin');
		var numeroserie = button.data('numeroserie');
		var configuration = button.data('configuration');
        var id = button.data('id');

		var modal = $(this);

		modal.find('#marque').val(marque);
		modal.find('#modele').val(modele);
		modal.find('#secteur').val(secteur);
		modal.find('#lieu').val(lieu);
		modal.find('#bassin').val(bassin);
		modal.find('#numeroserie').val(numeroserie);
		modal.find('#configuration').val(configuration);
		modal.find('#idAutomate').val(id);
		
		console.log(id)
	})



});