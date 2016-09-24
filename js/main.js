(function () {
    'use strict';	// this function is strict... prevents use of undeclared variables
    /*globals $:false */		//	prevent jshint from declaring $ as undefined

    $('body').scrollspy({ target: '.navbar' });

    function navListener() {
        $('.nav.navbar-nav.nav-inline').on('click','li',function(e) {
            $('li').removeClass("active");         //  remove 'active' class from all links
            $(this).addClass("active");            //  restore 'active' class to link clicked
        });
    }     //  end of navListener function

    function modalListener() {
        $('.screens').on('click','img',function(e) {
            $("#projModal").empty();                //  remove any previous HTML from prior modal
            var i = e.target.id;                    //  id matches "modal-x" where x = numeric index number
            i = parseInt((i.split("-")[1]),10);     //  parse the index out from the class
            var modalParms = modalParams[i];        //  use the index to pull the modal Parameters from json.js
            //  build modal format
            var modalHTML = '<!-- The Modal -->';
            modalHTML += '<div id="modal-popup">';
            modalHTML += '<button class="close">&times;</button>';
            modalHTML += '<div id="modal-header" class="tablet"><h2>'+modalParms.projId+'<small> (A '+modalParms.projType+')</small></h2></div>';
            modalHTML += '<div id="modal-img"><img class="modal-content" src="'+modalParms.projImg+'" alt="'+modalParms.projId+'"></div>';
            modalHTML += '<div id="modal-links" class="modal-content">';
            if ( modalParms.projURL === "" ) {
                modalHTML += '<p><strong>Project URL:</strong> Is Empty</p>';
            } else {
                modalHTML += '<p><strong>Project URL:</strong> <a href="'+modalParms.projURL+'">'+modalParms.projURL+'</a></p>';
            }
            if ( modalParms.projCP === "" ) {
                modalHTML += '<p><strong>Project Codepen.io Link:</strong> Is Empty</p>';
            } else {
                modalHTML += '<p><strong>Project Codepen.io Link:</strong> <a href="'+modalParms.projCP+'">'+modalParms.projCP+'</a></p>';
            }
            if ( modalParms.projGH === "" ) {
                modalHTML += '<p><strong>Project Github Link:</strong> Is Empty</p>';
            } else {
                modalHTML += '<p><strong>Project Github Link:</strong> <a href="'+modalParms.projGH+'">'+modalParms.projGH+'</a></p>';
            }
            modalHTML += '<p><strong>Project Role:</strong> '+modalParms.projRole+'</p>';
            modalHTML += '</div>';
            modalHTML += '<div id="modal-desc" class="modal-content"><p><strong>Description:</strong></p>'+modalParms.projDesc+'</div>';
            modalHTML += '</div>';
            $("#projModal").append(modalHTML);
            $("#projModal").show();

            //  close modal window

            $(".close").on('click',function() {
                $("#projModal").hide();
            });

        });
    }     //  end of modalListener function



    navListener();
    modalListener();

}());
