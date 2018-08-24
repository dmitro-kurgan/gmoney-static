import '../components/scss/style.scss';

import '../components/js/bootstrap.min';

// ------------DROPDOWN------------

$(function() {
	var arr = ['Give', 'Get'];

	arr.forEach(function(item) {
  		$('#cur' + item).click(function(e) {
			e.preventDefault();
			$('#bank' + item).toggleClass('opened');
		});
		$('#cur' + item + ' , #bank' + item).click(function(e) {
			e.preventDefault();
			$(this).toggleClass('opened');
			$('#dropdown' + item).toggleClass('opened');
		});
	});
});

$('.closeDropdown').click(function(e) {
	e.preventDefault();
	$('#dropdownGet, #dropdownGive').removeClass('opened');
});

// ------------INPUT CREDIT CARD--------------

$(function() {
    $('#id').keyup(function(e) {
    	for(var i = 0; i < 19; i++) {
    		$('#num' + [i]).text($(this).val()[i]);
    	}
    });

    //var input = document.getElementById('id');
	//var result = document.getElementById('num');

	//input.onkeyup =  input.oncopy = input.onpaste = input.oncut = (function() {
	     //for(var i = 0; i < 19; i++) {
	   
	        //return function() {
	    		//result[i].innerHTML = this.value([i]);
	    	//}
	    //}
	//})();
    $('.span-num').bind("DOMSubtreeModified",function(){
    	if($('.span-num').text().length > 0) {
	    	$(this).addClass('inserted');
	    }
    });
});

// -----------MOBILE-------------

function changeMobile() {
    if(matchMedia) {
        var screen = window.matchMedia('(max-width: 768px)');
        screen.addListener(changes);
        changes(screen);
    }
    function changes(screen) {
        if(screen.matches) {
            $('#dropdownGive').appendTo('.exchange');
            $('#dropdownGet').appendTo('.exchange');
            $('#headerWechat').appendTo('#headerMenu');
            $('#headerMenuAccount').appendTo('#headerMenu');
            $(document).mouseup(function(e) {
				var block = $("#dropdownGet, #dropdownGive");
				if(!block.is(e.target) && block.has(e.target).length === 0) {
					block.removeClass('opened');
				}
			});
        }
        else {
            $('#dropdownGive').appendTo('#fg1');
            $('#dropdownGet').appendTo('#fg2');
            $('#headerWechat').appendTo('.header__content');
            $('.header__account').appendTo('.header__content');
            $(document).mouseup(function(e) {
				var $target = $(e.target);
				var block = $("#dropdownGet, #dropdownGive");
				var btn = $("#curGive, #bankGive, #curGet, #bankGet");
			    if ($target.closest(".exchange__form").length == 0) {
			        block.removeClass("opened");
			        btn.removeClass("opened");
			    }
			});
        }
    };
};
changeMobile();

// ---------------SHOW MENU-------------------
function ShowMenu() {
    $('#headerHamburger').click(function() {
        $('#headerMenu').addClass('opened');
    });
    $('#headerMenuClose').click(function() {
		$('#headerMenu').removeClass('opened');
    });
}
ShowMenu();

// ---------INPUT MASK-------------

import '../components/js/jquery.maskx';

jQuery.fn.maskx.user_defined = function(v){
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d{3})(\d)/, "$1/$2");
	v = v.replace(/(\d+)(\d{2})$/, "$1-$2");
	return v;
};
	jQuery(document).ready(function(){
	jQuery('.cartoes').maskx({maskx: 'cc'});//pela class

	jQuery('#input_dinheiro').maskx({maskx: 'money'});//pelo id

	jQuery('input[name="dinheiro"]').maskx({maskx: 'money'});//pelo name
	jQuery('input[name="cep"]').maskx({maskx: 'cep'});
	jQuery('input[name="other"]').maskx({maskx: 'user_defined'});


	jQuery('input[name="telefone"]').maskx({maskx: 'phone'});
});


import '../components/js/jquery.scrollbar.min';

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});