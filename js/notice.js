



var allAndela = {


		andelaLagos : "Andela Lagos",
		lagosStaff : { departmentName :["All","HR","Finance","Research"],
						empName : ["Obi","Income"]},
		lagosFellows : { departmentName :["All","Cycle XX","Cycle II","Cycle XI"],
						empName : ["Paz","Prince"]}


}


function Notice(msg,msg_id,group,department){

	this.msg = msg;
	this.msg_id = msg_id;
	this.group = group || allAndela.andelaLagos;
	this.department = department || allAndela.lagosFellows.departmentName[0];

}


Notice.prototype.getNotices = function() {
	return this.store =[


			new Notice(allAndela.lagosFellows.empName[0]+ " report to the Main Office now","020",allAndela.lagosFellows.departmentName[0]),
			new Notice("Everybody report to Main Office","030"),
			new Notice ("Obi report to HR","122",allAndela.lagosStaff.departmentName[1])



	]
};

function saveNotice()
{
	var b = document.getElementById("pos");
	

	if (typeof(Storage) !== "undefined") {

			localStorage.setItem("post",JSON.stringify(new Notice(b.value,"002")));
		}

	}



// $(document).ready(function(){


// 		var notices = new Notice();
// 		var arr = notices.getNotices();
// 		//document.getElementById("notice-board1").innerHTML = arr[0].msg;
// 		var cer = JSON.parse(localStorage.getItem("post")+'');
// 		console.log(cer);
// 		//document.getElementById("notice-board2").innerHTML = cer.msg;
// 		alert("Hello");

// });

