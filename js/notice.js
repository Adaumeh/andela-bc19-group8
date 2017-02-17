



var allAndela = {


		andelaLagos : "Andela Lagos",
		lagosStaff : { departmentName :["All","HR","Finance","Research"],
						empName : ["Obi","Income"]},
		lagosFellows : { departmentName :["All","Cycle XX","Cycle II","Cycle XI"],
						empName : ["Paz","Prince"]}


}


function Notice(msg,title,msg_id,group,department){

	this.msg = msg;
	this.msg_id = msg_id;
	this.title = title;
	this.group = group || allAndela.andelaLagos;
	this.department = department || allAndela.lagosFellows.departmentName[0];

}


Notice.prototype.getNotices = function() {
	return this.store =[


			new Notice(allAndela.lagosFellows.empName[0]+ " report to the Main Office now","Special Announcement","020",allAndela.lagosFellows.departmentName[0]),
			new Notice("Everybody report to Main Office","General Announcement","030"),
			new Notice ("Obi report to HR","Attention","122",allAndela.lagosStaff.departmentName[1])



	]
};

function checkFields(choice){

	if (document.getElementById("pos").value === ""||document.getElementById("title").value ==="") {

		alert("Please fill out all the feilds");


	}

	else
	{

		saveNotice();
	}

	



}

function saveNotice()
{
	var msg = document.getElementById("pos");
	var title = document.getElementById("title");
	var grp = document.getElementById("group1");

	if (typeof(Storage) !== "undefined") {

			localStorage.setItem("post",JSON.stringify(new Notice(msg.value,title.value,"002",grp.value)));
			alert("Posted successfully");

			document.getElementById("pos").value ="";
			document.getElementById("title").value ="";
			

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

