$(document).ready(function () {
	alert('welcome to new concept');
	loadContent();
});

function loadContent() {

	$().SPServices({
		operation : "GetListItems", //Method name
		async : false,
		//webURL : webUrl,//pass webUrl dynamically
		listName : "Regions", // List Name
		//CAMLQueryOptions : "",
		//CAMLViewFields : "<ViewFields><FieldRef Name='Title' /></ViewFields>",
		CAMLQuery : "",
		//CAMLRowLimit : 1,
		completefunc : function (xData, Status) {

			alert(xData.responseText);

			if (xData.status == 200) {
			debugger;
				var myJson = $(xData.responseXML).SPFilterNode("z:row").SPXmlToJson({
						mapping : {
							ows_ID : {
								mappedName : "ID",
								objectType : "Counter"
							},
							ows_Title : {
								mappedName : "Title",
								objectType : "Text"
							}
						}, // name, mappedName, objectType
						includeAllAttrs : true
					});
				alert(myJson);
			} else {
				alert(xData.status);
			}
		}
	});
}