//recupère les données dans le modal pour l'édition
$(function(){
	$('#editModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var marque = button.data('marque');
		var modele = button.data('modele');
		var numeroserie = button.data('numeroserie');
		var configuration = button.data('configuration');
        var id = button.data('id');

		var modal = $(this);

		modal.find('#marque').val(marque);
		modal.find('#modele').val(modele);
		modal.find('#numeroserie').val(numeroserie);
		modal.find('#configuration').val(configuration);
		modal.find('#idAutomate').val(id);
		
		console.log(id)
	})

	$('#editBassinModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var nom = button.data('nom');
		var taille= button.data('taille');
        var id = button.data('id');

		var modal = $(this);

		modal.find('#nomBassin').val(nom);
		modal.find('#taille').val(taille);
		modal.find('#idBassin').val(id);
		
		console.log(id)
	})

	$('#editSiteModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var nom = button.data('nom');
		var ville= button.data('ville');
        var adresse = button.data('adresse');
		var numero_client = button.data('numero_client');
		var site_id = button.data('site_id');
		var id = button.data('id');
		

		var modal = $(this);

		modal.find('#nom').val(nom);
		modal.find('#ville').val(ville);
		modal.find('#adresse').val(adresse);
		modal.find('#numero_client').val(numero_client);
		modal.find('#site_id').val(site_id);
		modal.find('#idSite').val(id)
		console.log(id)
	})


	$.get('/automate/selectBassin', function (bassin) {
		$('#selectBassin').append(bassin);
	
			})	


	$.get('/bassin/selectSite', function (bassin) {
		$('#selectSite1').append(bassin);
	
			})
	
			$.get('/bassin/selectSite', function (bassin) {
				$('#selectSite2').append(bassin);
			
					})	

});