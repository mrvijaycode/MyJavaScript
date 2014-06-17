$(document).ready(function () {
	//alert('welcome to new concept file');

	$.ajax({
		success : function () {
			loadContent();
		}
	});
});

function loadContent() {
	var myJson = [];
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

			//alert(xData.responseText);

			if (xData.status == 200) {
				//debugger;
				myJson = $(xData.responseXML).SPFilterNode("z:row").SPXmlToJson({
						mapping : {}, // name, mappedName, objectType
						includeAllAttrs : true
					});
				//alert(myJson);
			} else {
				alert(xData.status);
			}
		}
	});

	//debugger;

	var listItemInfo = '<table>';

	for (var i = 0; i < myJson.length; i++) {
		listItemInfo += "<tr>";
		listItemInfo += "<td>" + myJson[i].Title + "</td>";
		listItemInfo += "</tr>";
	}

	listItemInfo += "</table>";

	$('#divHtml').html(listItemInfo);
}