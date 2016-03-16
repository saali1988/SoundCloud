function displayTracks(tracks, startPoint){
	var body = document.getElementById("bodyContent");
	
	for(var i = startPoint; i < (i+10); i++){
		$(body).append(createTrackInfo(tracks[i]));
	}	
};

function createTrackInfo(trackInfo){
	var track_div = document.createElement("div");
	track_div.className = "track_div";
	
	var hiddenTrackInfoDiv = displayLicenseInfo(trackInfo.id);
	
	track_div.id = trackInfo.id;
	
	$(track_div).hover(function(){
		 SC.get("/tracks/"+trackInfo.id).then(function (info) {
			$("#label_license_value_" + trackInfo.id).html(info.license);
			$("#label_num_comments_value_" + trackInfo.id).html(info.comment_count);
			$("#label_user_playback_value_" + trackInfo.id).html(info.playback_count);
			$("#hiddenInfo_" + trackInfo.id).show();
		});
	}, function(){
		$("#hiddenInfo_" + trackInfo.id).hide();
	});
		
	var track_label = document.createElement("label");
	track_label.className = "track_label";
	track_label.innerHTML = trackInfo.title;
	
	var track_img = document.createElement("img");
	track_img.className = "track_img";
	track_img.src = (trackInfo.artwork_url != null ? trackInfo.artwork_url : trackInfo.user.avatar_url);
	
	track_div.appendChild(track_img);
	track_div.appendChild(track_label);
	track_div.appendChild(hiddenTrackInfoDiv);
	return track_div;
};

function displayLicenseInfo(id){
	var container = document.createElement("div");
	container.id = "hiddenInfo_" + id;
	container.className = "displayHiddenInfo";
	
	var tbodyDisplay = document.createElement("tbody");
	
	var tr_licenseTitle = document.createElement("tr");
	var tr_numComments = document.createElement("tr");
	var tr_userPlayBack = document.createElement("tr");
	
	var td_licenseTitle = document.createElement("td");
	var td_licenseTitleValue = document.createElement("td");
	var td_numComments = document.createElement("td");
	var td_numCommentsValue = document.createElement("td");
	var td_userPlayback = document.createElement("td");
	var td_userPlaybackValue = document.createElement("td");
	
	var label_license_title = document.createElement("label");
	label_license_title.innerHTML = "License: ";
	var label_num_comments = document.createElement("label");
	label_num_comments.innerHTML = "Number of comments: ";
	var label_user_playback = document.createElement("label");	
	label_user_playback.innerHTML = "Playback count: ";
	
	var label_license_value = document.createElement("label");
	label_license_value.id = "label_license_value_"+id;
	var label_num_comments_value = document.createElement("label");
	label_num_comments_value.id = "label_num_comments_value_"+id;
	var label_user_playback_value = document.createElement("label");
	label_user_playback_value.id = "label_user_playback_value_"+id;
	
	td_licenseTitleValue.appendChild(label_license_value);
	td_numCommentsValue.appendChild(label_num_comments_value);
	td_userPlaybackValue.appendChild(label_user_playback_value);
	
	td_licenseTitle.appendChild(label_license_title);
	td_numComments.appendChild(label_num_comments);
	td_userPlayback.appendChild(label_user_playback);
	
	tr_licenseTitle.appendChild(td_licenseTitle);
	tr_licenseTitle.appendChild(td_licenseTitleValue);
	tr_numComments.appendChild(td_numComments);
	tr_numComments.appendChild(td_numCommentsValue);
	tr_userPlayBack.appendChild(td_userPlayback);
	tr_userPlayBack.appendChild(td_userPlaybackValue);
	
	tbodyDisplay.appendChild(tr_licenseTitle);
	tbodyDisplay.appendChild(tr_numComments);
	tbodyDisplay.appendChild(tr_userPlayBack);
	container.appendChild(tbodyDisplay);
	return container;
};