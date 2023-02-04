var fcl = 0;
var _wr = function(type) {
    var orig = history[type];
    return function() {
        var rv = orig.apply(this, arguments);
        var e = new Event(type);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return rv;
    };
};
history.pushState = _wr('pushState'), history.replaceState = _wr('replaceState');

var reloadProstaDela = async function(e) {
    const linkurl = document.location;
    if (document.querySelector("#results")) {
        const response = await fetch(linkurl);
        const response_text = await response.text();
        checklogin(response_text);
        const doc = new DOMParser().parseFromString(response_text, 'text/html')
        const results = doc.querySelector('#results').innerHTML;
        document.querySelector("#results").innerHTML = results;
        document.querySelector("#pocistikriterije").classList.remove("d-none");
        const newmt = document.querySelector("#custom_meta_title").innerHTML;
        document.getElementsByTagName('meta')["title"].content = newmt;
        document.title = newmt;
        const stdel = document.querySelector("#stevilodel").innerHTML.split(":")[1].trim();
        document.querySelector("#filtercloseicon button").innerHTML = document.querySelector("#filtercloseicon button").innerHTML.split(" ")[0].trim() + " " + stdel;
        document.querySelector("#filtercloseicon2 button").innerHTML = document.querySelector("#filtercloseicon2 button").innerHTML.split(" ")[0].trim() + " " + stdel;
        if (document.querySelector(".pagerTop")) {
            document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
        }

    }
}

window.addEventListener('pushState', reloadProstaDela);
window.onpopstate = reloadProstaDela;

function checklogin(i) {
    if (!(i.indexOf("login.php") == -1)) {
        $(location).attr("href", "login.php");
    }
}

function onchng_dats(data) {
    url = window.location.pathname + "?" + $('#prostaDela, #kljbform').serialize();
    history.pushState(null, null, url);
}



$(function() {


    let allowScroll = false;
    let jobparam = "jobDetail";
    let kosarica = false;

    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has(jobparam)) allowScroll = true;
        if (searchParams.has('isci')) allowScroll = true;
        if (searchParams.has(jobparam)) allowScroll = false;
        if (searchParams.has('kosarica')) kosarica = true;
    }

    if (jQuery("#mobileonly").is(':visible'))
        if (jQuery(".pagerTop").length || jQuery("#results").length) {
            if (jQuery(".scrollTop").length && allowScroll) {
                $('html, body').animate({ scrollTop: ($(".scrollTop").offset().top - 200) }, 1000);
            }
        }
        //prosta dela page click
    $(document).on("click", ".page-link", function(e) {
        e.preventDefault();
        $("#prostaDelaPager").val($(this).attr("data-page"));
        $("#isci").val(1);
        if (kosarica) kosaricaLink = 'kosarica=1&';
        else kosaricaLink = '';
        url = window.location.pathname + "?scrolltop=1&" + kosaricaLink + $('#prostaDela, #kljbform').serialize();
        history.pushState(null, null, url);
    });
    //v2 sortiranja
    $(document).on("click", ".prostaDelaSortOptions span", function(e) {
        e.preventDefault();
        if ($("#sort").val() == $(this).attr("data-id")) $("#sort").val(0);
        else $("#sort").val($(this).attr("data-id"));
        $("#isci").val(1);
        $("#page").val(1);
        url = window.location.pathname + "?scrolltop=1&" + $('#prostaDela, #kljbform').serialize();
        history.pushState(null, null, url);
    });
    //prosta dela onchange perpage,sort
    $(document).on("change", "#prostaDela select", function() {
        $("#isci").val(1);
        $("#perpage").val(1);
        $("#prostaDelaPager").val(1);
        if (kosarica) kosaricaLink = 'kosarica=1&';
        else kosaricaLink = '';
        url = window.location.pathname + "?" + kosaricaLink + $('#prostaDela, #kljbform').serialize();
        history.pushState(null, null, url);
    });
    $(document).on("change", "#hourlyrate", function() {
        $("#isci").val(1);
        url = window.location.pathname + "?" + $('#prostaDela, #kljbform').serialize();

        history.pushState(null, null, url);
    });
    //sumbit za klik na prikaži
    $(document).on("click", "#prostaDelaPrikazi", function() {
        $("#isci").val(1);
        $("#prostaDela").submit();
    });
    $(document).on("click", "#prostaDela :checkbox", function(e) {
        if ($(this).attr('id') == "type-6") $(location).attr('href', 'moje_delo.php');
        else {
            var p1, p2, p3 = "";

            if ($(this)[0].checked) {
                var label = $(this).parent().find('label');
                if (label) {
                    var p3 = label[0].innerText;

                    var parg = $(this).closest('.custom-control').parent().closest('.custom-control').find('label')[0];
                    if (parg) {
                        p2 = parg.innerText;
                    }


                    var part = $(this).parent().closest('.form-group').parent().parent().closest('.collapse').parent().find('label')[0];
                    if (!part) {
                        part = $(this).closest('.form-group').closest('.collapse').parent().find('label')[0];
                    }
                    if (part) {
                        p1 = part.innerText;
                    }

                    var msg = p1;
                    if (p2) msg += " - " + p2;
                    if (p3) msg += " - " + p3;
                    //console.log(msg);
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ 'event': 'ClickOnFilter', 'Filtriranje del': msg });
                }
            }



            url = window.location.pathname + "?" + $('#prostaDela, #kljbform').serialize();
            history.pushState(null, null, url);
        }
    });


    $(document).on("click", "#filter-checkbox-a,#filter-checkbox-b,#filter-checkbox-c", function(e) {
        if (document.location.pathname.indexOf('prijav')) {
            let url = window.location.pathname;
            if (this.checked) url += "?leto=" + this.value;
            window.location = url;
        } else {
            $(location).attr("href", "?leto=" + $(this).val());
        }
    });


    $(document).on("click", "#prostaDela button[data-target]", function() {
        art = $(this).closest('article').data('jobid');
        $('#artref').val(art);

    });

    $(document).on("submit", "#kljbform", function(e) {
        e.preventDefault();
        url = window.location.pathname + "?" + $('#prostaDela, #kljbform').serialize();
        history.pushState(null, null, url);
    });

    $(document).on("click", "#izpisi_zasluzke", function() {
        $("#pdf").val("1");
        $("#zasluzkiform").attr("target", "_blank");
        $("#zasluzkiform").submit();
        $("#pdf").val("0");
        $("#zasluzkiform").attr("target", "_blank");
    });

    $(document).on("change", "#filter-date-from-to", function() {
        if ($(this).hasClass('active') === false) {
            if ($(this).val() != "") $("#zasluzkiform").submit();
        }
    });

    $(document).on("change", "#kako", function() {
        elem = $(this);
        if ($(elem).val() == "4") {
            $("#kakodrugo").removeClass('d-none').show();
        } else {
            $("#kakodrugo").hide();
        }
    });

    $(document).on("change", "#kam", function() {
        elem = $(this);
        if ($(elem).val() == "zac") {
            $("#kamzacasni").removeClass('d-none').show();
            $("#kamdrugam").hide();
        } else if ($(elem).val() == "drugam") {
            $("#kamdrugam").removeClass('d-none').show();
            $("#kamzacasni").hide();
        } else {
            $("#kamdrugam").hide();
            $("#kamzacasni").hide();
        }
    });


    $(document).on("click", ".btn-close", function() {
        elem = $(this).closest('.notification');
        elem.fadeOut(500);
    });

    $(document).on("click", "[data-moje-delo-edit]", function(e) {
        $("#mojedeloeditid").val($(this).data("moje-delo-edit"));
        $("#mojedeloedit").submit();
    });

    $(document).on("click", ".form-steps .multi-switch", function() {
        if ($("#btnodjava").val() == 1) $("#confirmArhive").fadeOut();
        else $("#confirmArhive").hide().removeClass('d-none').fadeIn(500);
    });

    $(document).on("click", "#confirmArhiveWant", function() {
        $("#confirmArhive").fadeOut(function(e) {
            $(".form-steps .multi-switch").find('.switch-content').removeClass('disable').addClass('active');
            $("#btnodjava").val(1);
        });
    });

    function dropdownclose(e) {
        if (e.target.parentNode.classList.contains('is-open')) {
            par = e.target.closest(".row");
            par.click();
        }
    }

    if (document.querySelector('select[multiple]')) document.addEventListener("showDropdown", function(e) {

        elem = e.target.parentElement.parentElement;
        elem.removeEventListener("click", dropdownclose);
        setTimeout(function() { elem.addEventListener("click", dropdownclose); }, 300);
        /*chea=document.querySelectorAll(".choices");
        chea.forEach(function(che){
        	che.addEventListener("click",dropdownclose);
        });		*/
        var drd = elem.querySelector("div.choices__list--dropdown");
        var list = drd.querySelector("div.choices__item").getAttribute('data-value');
        if (list.indexOf("jobs__") == 0 || list.indexOf("basic__") == 0) {
            setTimeout(function() {
                drd.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 400);
        }


    }, false);

    /*if (document.querySelector('select[multiple]')) {
    	chea=document.querySelectorAll(".choices");
    	chea.forEach(function(che){
    		console.log(che.id);
    		if (che.classList.contains('dummy')==false) {
    			che.addEventListener("showDropdown", function(e){
    				che.classList.add("dummy");
    				console.log("adding listener to",che)
    				che.addEventListener("click",dropdownclose);
    				var drd=list=che.querySelector("div.choices__list--dropdown");
    				var list=drd.querySelector("div.choices__item").getAttribute('data-value');
    				if (list.indexOf("jobs__")==0 || list.indexOf("basic__")==0) {
    					setTimeout(function() {
    						drd.scrollIntoView({behavior:"smooth",block:"center"});
    					},400);
    				}
    			})
    		}
    	});
    }*/
    $(document).on("click", "button[link-data*=moje-prijave]", function(e) {
        e.preventDefault();
        let url = $(this).attr("link-data");
        if (url.indexOf("archive=") > 0) {
            $.get(url);
            $(this).parent().parent().fadeOut();
        }
    });

    $(document).on("click", "button[link-data*=dodajvkosarico]", function(e) {
        e.preventDefault();
        let url = $(this).attr("link-data");
        if (url.indexOf("did=") > 0) {
            $.ajax(url);

            stevec = $("#stevecizbor").attr("count-data");
            stevec--;
            if (stevec < 0) stevec = 0;
            $("#stevecizbor").attr("count-data", stevec);
            $("#stevecizborm").attr("count-data", stevec);
            if (stevec > 0) $("#stevecizbor").html(stevec);
            else $("#stevecizbor").html("");
            if (stevec > 0) $("#stevecizborm").html(stevec);
            else $("#stevecizborm").html("");
            if (stevec > 0) $("#briefcase").removeClass('d-none');
            else $("#briefcase").addClass('d-none');
            if (stevec > 0) $("#briefcasem").removeClass('d-none');
            else $("#briefcasem").addClass('d-none');


            $(this).find("span").html("Dodaj v izbor del");
            href = $(this).find("use").attr("xlink:href");
            href = href + "-outlined";
            $(this).find("use").attr("xlink:href", href);
            url = url.replace("?did", "?id");
            $(this).attr("link-data", url);
        } else {
            $.ajax(url);
            stevec = $("#stevecizbor").attr("count-data");
            stevec++;
            $("#stevecizbor").attr("count-data", stevec);
            $("#stevecizborm").attr("count-data", stevec);
            $("#stevecizbor").html(stevec);
            $("#stevecizborm").html(stevec);
            $("#briefcase").removeClass('d-none');
            $("#briefcasem").removeClass('d-none');


            $(this).find("span").html("Odstrani iz izbora");
            href = $(this).find("use").attr("xlink:href");
            href = href.replace("-outlined", "");
            $(this).find("use").attr("xlink:href", href);
            url = url.replace("?id", "?did");
            $(this).attr("link-data", url);
        }

        sessionStorage.setItem('check_for_bag', "1");

    });

    //on page back check for number in briefcase reload
    $(window).bind("pageshow", function(event) {
        if (sessionStorage.getItem("check_for_bag") == "1") {
            rnd = Math.random();
            let checkurl = "/studenti/dodajvkosarico?check=1&rnd=" + rnd;
            $.get(checkurl, function(data) {
                result = JSON.parse(data);
                stevec = result.num;
                stevec1 = $("#stevecizbor").attr("count-data");
                if (stevec1 != stevec) {
                    $("#stevecizbor").attr("count-data", stevec);
                    $("#stevecizborm").attr("count-data", stevec);
                    $("#stevecizbor").html(stevec);
                    $("#stevecizborm").html(stevec);
                    if (stevec > 0) {
                        $("#briefcase").removeClass('d-none');
                        $("#briefcasem").removeClass('d-none');
                    } else if (stevec == 0) {
                        $("#briefcase").addClass('d-none');
                        $("#briefcasem").addClass('d-none');
                    }
                }
            });
            //to work for multiple back click
            //sessionStorage.setItem('check_for_bag', "0");
        }
        if (window.location.pathname == '/studenti/prijava-na-delo') {
            let seliz = document.querySelector("#input-field-izkusnje") ? document.querySelector("#input-field-izkusnje").checked : false;
            let sel1 = document.querySelector("#input-field-attachemnt1") ? document.querySelector("#input-field-attachemnt1").checked : false;
            let sel2 = document.querySelector("#input-field-attachemnt2") ? document.querySelector("#input-field-attachemnt2").checked : false;
            let sel3 = document.querySelector("#input-field-attachemnt3") ? document.querySelector("#input-field-attachemnt3").checked : false;
            $("#datoteke").load("/studenti/prijava-na-delo?datoteke=1&seliz=" + seliz + "&sel1=" + sel1 + "&sel2=" + sel2 + "&sel3=" + sel3 + " #datoteke", function(response) {
                //checklogin(response);
                //$(document.body).css({ 'cursor': 'default' });
                //$("#datoteke").children().children().last().find("label").click()
            });

        }
    });




    $(document).on("click", "#nastavitveform #text-field-bank", function(e) {
        e.preventDefault();
        $("#banktext").hide();
        $("#bankinput").show();
        $("#input-field-bank").focus();
    });

    $("#input-field-bank").focusout(function() {
        if ($(this).val() == "") {
            $("#banktext").show();
            $("#bankinput").hide();
        }
    });

    $(document).on("click", "#nastavitveform #gdprset", function(e) {
        e.preventDefault();
        if ($("#gdpr_1").val() == "" || $("#gdpr_2").val() == "" || $("#gdpr_4").val() == "") {
            $("#alertmsg").html("Izberi vse 3 možnosti");
            $("#alertbox").show();
        } else {
            $("#alertbox").hide();
            $("#nastavitveform").submit();
        }
    });

    if ($(".nav-scrollable .menu--submenu").length) {
        if ($(".nav-scrollable .menu--submenu").is(':visible')) {
            sm = $(".nav-scrollable .menu--submenu");
            am = sm.find(".active");
            if (am.length) $('.nav-scrollable .menu--submenu').animate({ scrollLeft: (am.offset().left - 50) }, 100);
        }
    }

    $(document).on("click", "#nastavitveform .multi-switch", function(e) {
        sw = $(this).find('input').attr("id");
        swval = $("#" + sw).val();
        warndiv = $(this).parent().parent().next('div').next('div .notification-danger');
        notifydiv = $(this).parent().parent().next('div .alert-success');
        warndiv.removeClass('d-none').hide();
        notifydiv.removeClass('d-none').hide();
        $("#addShrani").removeClass('d-none').hide();
        if (swval == 0) {
            warndiv.fadeIn(1000);
            $("#addShrani").fadeIn(1000);
        } else {
            notifydiv.fadeIn(1000);
            $.post("/studenti/nastavitve?osebni", $('#nastavitveform').serializeArray(), function(response) {});
        }

    });

    if ($('#input-field-extra-knowledge').length) {
        var maxLength = 250;
        var length = $('#input-field-extra-knowledge').val().length;
        var length = maxLength - length;
        $('#chars').text(length);
        $('#input-field-extra-knowledge').prop('maxlength', maxLength);
        $('#input-field-extra-knowledge').keyup(function() {
            var length = $(this).val().length;
            var length = maxLength - length;
            $('#chars').text(length);
        });
    }


    //FAQ URL generate
    $(document).on("click", ".handorgel__header:not(.poslovalnice,.searchresult)", function(e) {
        url = window.location.pathname;
        if (url.substr(-1, 1) != "/") url = url + "/";
        paths = url.split("/");
        paths = paths.slice(0, 4);
        if ($(this).data("faqpodjetja")) paths = paths.slice(0, 3);
        url = paths.join("/");
        if ($(this).data("faqpodjetja") && url.slice(-1) == "/") url = url.slice(0, -1);
        if ($(this).next()[0].style.height != "0px")
            url = url + '/' + $(this).data("slug");
        url = url + '/';
        history.pushState(null, null, url);
    });

    if (jQuery(".handorgel__header:not(.poslovalnice,.searchresult)")) {
        if (jQuery(".scrollToTop").length && 1) {
            if (document.querySelector('.scrollToTop')) {
                setTimeout(() => {
                    document.querySelector('.scrollToTop').querySelector('button').click();
                }, 300);
            }
            //$('html, body').animate({ scrollTop: ($(".scrollToTop").offset().top - 200) }, 1000);
        }
    }



    $(document).on("click", ".close, #close", function(e) {
        $(".trigger-user-close").click();

    });

    $(document).on("submit", ".search-area--form", function(e) {
        e.preventDefault();
        url = $(this).attr('action');
        sp = $(this).find('input').val();
        //console.log(encodeURIComponent(sp));
        //console.log(url + encodeURIComponent(sp));
        window.location = url + encodeURIComponent(sp);
    });




    $(document).on("click", "[data-toggle='collapse']", function(e) {
        var that = $(this);
        id = that.attr("data-target").split('-').pop();
        //$("#jobDetail-" + id).css("opacity", 0);
        url = "/studenti/reveal.php?podrobnosti=1&id=" + id;
        if (id > 0) {
            if (that.find("span").html() == "Več informacij") {
                $.get(url, function(data) {
                    /*result = JSON.parse(data);
                    if (result.result == -2) {
                        $("#jobDetail-" + id).html(result.desc);
                        var url = window.location.href;
                        if (url.indexOf('?') > -1) {
                            url += '&relogin=1'
                        } else {
                            url += '?relogin=1'
                        }
                        window.location.href = url;
                    } else if (!result.result && 1) {
                        $("#jobDetail-" + id).html(result.desc);
                    }
                    $("#jobDetail-" + id).css("opacity", 1);*/
                });
            } else {}
        }
        if (that.find("span").html() == "Več informacij" || that.html() == "Več") {
            if (that.find("span").html() == "Več informacij") {
                that.find(".ticon").css("transform", "rotate(180deg)");
                that.find("span").html("Manj informacij");
            }
            if (that.html() == "Več") that.html("Manj");
            sel = that.parent('div');
            if (that.data("target").indexOf("#nakazilo") == 0) {
                sel = that.parent('div').parent('div');
                if (jQuery("#mobileonly").is(':visible')) $('html, body').animate({ scrollTop: (sel.offset().top - 50) }, 500);
                else $('html, body').animate({ scrollTop: (sel.offset().top - 120) }, 500);
            } else {
                if (jQuery("#mobileonly").is(':visible')) $('html, body').animate({ scrollTop: (sel.offset().top - 125) }, 500);
                else $('html, body').animate({ scrollTop: (sel.closest('article').offset().top - 80) }, 500);
            }
        } else {
            if (that.find("span").html() == "Manj informacij") {
                that.find("span").html("Več informacij");
                that.find(".ticon").css("transform", "");
            }
            if (that.html() == "Manj") that.html("Več");
        }

    });

    if ('URLSearchParams' in window) {

        if (searchParams.has(jobparam) || typeof(jobparam_alt) !== 'undefined') {
            if (typeof(jobparam_alt) !== 'undefined') job = jobparam_alt;
            else job = searchParams.get(jobparam);
            sel = $("button[data-target='#jobDetail-" + job + "']");
            if (sel.length == 0) {
                sel = $("article[data-jobid='" + job + "']");
                if (jQuery("#mobileonly").is(':visible')) $('html, body').animate({ scrollTop: (sel.offset().top - 125) }, 1000);
                else $('html, body').animate({ scrollTop: (sel.closest('article').offset().top - 125) }, 1000);

            } else {
                $(sel.click());
            }
        }

    }

    if (document.querySelector('select[multiple]')) document.addEventListener("change", jobschange, false);

    function jobschange(e) {
        let val = [];
        if (e.cancelable === true) val = e.detail.value.split("__");
        else if (e.cancelable === false) val = e.srcElement.value.split("__");
        if (val[0] == "jobs" || val[0] == "jobsm") {
            //dodatne kompetence
            jobsid = "#" + val[0] + "_" + val[2] + "_";
            basic = val[1];
            var jobs = [];
            $.each($(jobsid), function() {
                jobs.push($(this).val());
            });
            jobs = String(jobs).split(",");
            aj = "";
            for (i = 1; i <= jobs.length; i++) {
                tj = jobs[i - 1];
                tj = tj.split("##");
                tj = tj[4];
                if (tj) {
                    tj = tj.split("__");
                    tj = tj[0];
                } else {
                    tj = "";
                }
                aj += tj + "##";
            }
            url = "/studenti/moje_izkusnje_shrani.php?jobs=1&rowdata=" + escape(basic) + "&kompdata=" + escape(aj);
            $.get(url);
        }
        if (val[0] == "basic" || val[0] == "basicm") {
            //console.log("basic - ",val);
            jobsid = "#jobs_" + val[2] + "_";
            jobsidm = "#jobsm_" + val[2] + "_";
            basicid = "#basic_" + val[2] + "_";
            url = "/studenti/moje_izkusnje_shrani.php?basic=1&rowdata=" + escape(val[1]);
            //console.log(url);
            $.get(url, function(data) {
                $("#container").load("/studenti/moje-izkusnje #container", function(response) {
                    Core.init();
                });
            });
        }

    };

    $(document).on("click", "#filtershowicon", function(e) {
        e.preventDefault();
        $('.prefilterdiv').removeClass('d-none').removeClass('d-md-block');
        $('.filterdiv').removeClass('d-none').removeClass('d-md-block');
    });
    $(document).on("click", "#filtercloseicon", function(e) {
        e.preventDefault();
        $('.filterdiv').addClass('d-none').addClass('d-md-block');
        $('.prefilterdiv').addClass('d-none');
    });
    $(document).on("click", ".trigger-search", function(e) {
        $(this).hide();
        $('.search-area--form').removeClass('d-none');
    });
    $(document).on("click", ".trigger-search-close", function(e) {
        $('.trigger-search').show();
        $('.search-area--form').addClass('d-none');
    });
    $(document).on("click", "#filtercloseicon2", function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#prostaDela').offset().top
        }, 500);
    });


    url = window.location.pathname;
    if (url.substr(-1, 1) != "/") url = url + "/";
    paths = url.split("/");
    paths = paths.slice(0, 4);
    paths.forEach(function(element) {
        if (element == "search" || element.search("pomembne") || element.search("important")) $('.trigger-search').click();
    });




    $(document).on("click", "button[link-data*=reveal]", function(e) {
        e.preventDefault();
        ob = $(this);
        console.log(ob);
        url = ob.attr("link-data");
        $.get(url, function(data) {
            if (!(url.indexOf("type=E") == -1)) {
                ob.addClass("min-content");
            }
            //ob.attr("link-data", "");
            result = JSON.parse(data);
            if (result.result == -2) {
                var urlroute = window.location.href;
                if (urlroute.indexOf('?') > -1) {
                    urlroute += '&relogin=1'
                } else {
                    urlroute += '?relogin=1'
                }
                window.location.href = urlroute;
            } else if (!result.result && 1) {
                ob.parent().siblings().not(":nth-child(0n+2)").not(":nth-child(0n+1)").removeClass("d-flex").addClass("d-none")
                ob.parent().removeClass("font-weight-bold").html(result.desc);
            } else if (result.result) {
                ob.html(result.desc);
            }
            //ob.html(result.desc);
        });
    });

    $(document).on("click", "a[link-data*=reveal]", function(e) {
        e.preventDefault();
        ob = $(this);
        url = ob.attr("link-data");
        id = ob.attr("id");
        $.get(url, function(data) {
            ob.attr("link-data", "");
            document.querySelector("#" + id).click();
        });
    });

    $(document).on("click", "#sendsignlink", function(e) {
        var that = $(this);
        cid_em = that.data("sign");
        url = "/studenti/sign/?resend=1&cid_em=" + cid_em;
        $.get(url, function(data) {

        });
        that.addClass('d-none');
        that.next('div').removeClass('d-none');

    });


    var btn;
    if ($("#epotrdiloform #uploadBtn").length) {
        btn = $("#epotrdiloform #uploadBtn");
        uploader = new ss.SimpleUpload({
            button: btn,
            url: '/studenti/uploader.php',
            name: 'uploadfile',
            maxSize: '10000',
            allowedExtensions: ['jpg', 'jpeg', 'png', 'pdf'],
            hoverClass: '',
            focusClass: '',
            multipart: true,
            responseType: 'json',
            startXHR: function() {
                $(document.body).css({ 'cursor': 'wait' });
            },
            onSubmit: function() {},
            onComplete: function(filename, response) {
                //$('#counter').val(response.counter);
                //btn.innerHTML = 'Naloži nov dokument';
                if (response.counter < 3) {
                    uploader.enable();
                    $('#uploadBtn').css('cursor', 'pointer');
                    //$('#uploadBtn').css('background', '#7dba00');
                } else {
                    //btn.innerHTML = 'Naložil si 3 dokumente';
                    uploader.disable();
                    $('#uploadBtn').hide();
                    //$('#uploadBtn').css('background', '#cecece');
                }
                if (!response) {
                    //msgBox.innerHTML = 'Dokumenta ni bilo mogoče naložiti.';
                    //btn.innerHTML = 'Naloži nov dokument';
                    return;
                }

                if (response.success === true) {
                    //picBox.innerHTML = response.images;
                    $("#datoteke").load("/studenti/epotrdilo #datoteke", function(response) {
                        checklogin(response);
                        //aktiviraj_chosen();
                        //$(window).trigger('resize');
                        $(document.body).css({ 'cursor': 'default' });
                    });

                } else {
                    if (response.msg) {
                        //msgBox.innerHTML = escapeTags( response.msg );
                    } else {
                        //msgBox.innerHTML = 'Pri nalaganju dokumenta je prišlo do napake.';
                    }
                }
            },
            onError: function(filename, errorType, status, statusText, response, uploadBtn1) {}
        });
    };

    var btn;
    if ($("#prijavaform #uploadBtn").length) {
        btn = $("#prijavaform #uploadBtn");
        uploader = new ss.SimpleUpload({
            button: btn,
            url: '/studenti/uploader.php?noconv=1',
            name: 'uploadfile',
            maxSize: '100000',
            allowedExtensions: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx'],
            hoverClass: '',
            focusClass: '',
            multipart: true,
            responseType: 'json',
            startXHR: function() {
                $(document.body).css({ 'cursor': 'wait' });
                $('#uploaderror').hide();
            },
            onSubmit: function() {},
            onComplete: function(filename, response) {
                //$('#counter').val(response.counter);
                //btn.innerHTML = 'Naloži nov dokument';
                if (response.counter < 3) {
                    uploader.enable();
                    $('#uploadBtn').css('cursor', 'pointer');
                    //$('#uploadBtn').css('background', '#7dba00');
                } else {
                    //btn.innerHTML = 'Naložil si 3 dokumente';
                    uploader.disable();
                    $('#uploadBtn').hide();
                    //$('#uploadBtn').css('background', '#cecece');
                }
                if (!response) {
                    //msgBox.innerHTML = 'Dokumenta ni bilo mogoče naložiti.';
                    //btn.innerHTML = 'Naloži nov dokument';
                    return;
                }
                if (response.success === true) {
                    //picBox.innerHTML = response.images;

                    let seliz = document.querySelector("#input-field-izkusnje") ? document.querySelector("#input-field-izkusnje").checked : false;
                    let sel1 = document.querySelector("#input-field-attachemnt1") ? document.querySelector("#input-field-attachemnt1").checked : false;
                    let sel2 = document.querySelector("#input-field-attachemnt2") ? document.querySelector("#input-field-attachemnt2").checked : false;
                    let sel3 = document.querySelector("#input-field-attachemnt3") ? document.querySelector("#input-field-attachemnt3").checked : false;

                    //$("#datoteke").load("/studenti/prijava-na-delo?datoteke=1 #datoteke", function(response) {
                    $("#datoteke").load("/studenti/prijava-na-delo?datoteke=1&seliz=" + seliz + "&sel1=" + sel1 + "&sel2=" + sel2 + "&sel3=" + sel3 + " #datoteke", function(response) {
                        checklogin(response);
                        //aktiviraj_chosen();
                        //$(window).trigger('resize');
                        $(document.body).css({ 'cursor': 'default' });
                        //$("#datoteke").prev().removeClass('d-none');
                        $("#datoteke").children().children().last().find("label").click()
                    });

                } else {
                    $("#datoteke").load("/studenti/prijava-na-delo?datoteke=1 #datoteke", function(response) {
                        checklogin(response);
                        $(document.body).css({ 'cursor': 'default' });
                        uploader.enable();
                        $('#uploadBtn').show();
                        $("#datoteke").prev().removeClass('d-none');
                    });
                    if (response.msg) {
                        $('#uploaderror').html(response.msg).removeClass('d-none').hide();
                        $('#uploaderror').fadeIn("", function() {
                            setTimeout(function() {
                                $('#uploaderror').fadeOut();
                            }, 3000);
                        });
                    } else {
                        $('#uploaderror').html('Prišlo je do napake').removeClass('d-none').hide().fadeIn();
                    }
                }
            },
            onError: function(filename, errorType, status, statusText, response, uploadBtn1) {
                console.log(filename, errorType, status, statusText, response);
            },
            onExtError: function(filename, extension) {
                $('#uploaderror').html('Priložiš lahko samo datoteke s končnico .doc,.docx,.pdf, .jpg, .png').removeClass('d-none').hide().fadeIn();
            }
        });
    };

    var btn;
    if ($("#messageForm #uploadBtn").length) {
        btn = $("#messageForm #uploadBtn");
        uploader = new ss.SimpleUpload({
            button: btn,
            url: '/studenti/uploader.php?noconv=1&newMessageFile=1',
            name: 'uploadfile',
            maxSize: '20000',
            allowedExtensions: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx'],
            hoverClass: '',
            focusClass: '',
            multipart: true,
            responseType: 'json',
            startXHR: function() {
                $(document.body).css({ 'cursor': 'wait' });
                $('#uploaderror').hide();
            },
            onSubmit: function() {},
            onComplete: function(filename, response) {
                //$('#counter').val(response.counter);
                //btn.innerHTML = 'Naloži nov dokument';
                if (response.counter < 3) {
                    uploader.enable();
                    $('#uploadBtn').css('cursor', 'pointer');
                    //$('#uploadBtn').css('background', '#7dba00');
                } else {
                    //btn.innerHTML = 'Naložil si 3 dokumente';
                    uploader.disable();
                    $('#uploadBtn').hide();
                    //$('#uploadBtn').css('background', '#cecece');
                }
                if (!response) {
                    //msgBox.innerHTML = 'Dokumenta ni bilo mogoče naložiti.';
                    //btn.innerHTML = 'Naloži nov dokument';
                    return;
                }

                var loadurl = window.location.href + "&datoteke=1 #datoteke";
                if (response.success === true) {
                    //picBox.innerHTML = response.images;
                    $("#datoteke").load(loadurl, function(response) {
                        checklogin(response);
                        //aktiviraj_chosen();
                        //$(window).trigger('resize');
                        $(document.body).css({ 'cursor': 'default' });
                        $("#datoteke").prev().removeClass('d-none');
                    });

                } else {
                    $("#datoteke").load(loadurl, function(response) {
                        checklogin(response);
                        $(document.body).css({ 'cursor': 'default' });
                        uploader.enable();
                        $('#uploadBtn').show();
                        $("#datoteke").prev().removeClass('d-none');
                    });
                    if (response.msg) {
                        $('#uploaderror').html(response.msg).removeClass('d-none').hide();
                        $('#uploaderror').fadeIn("", function() {
                            setTimeout(function() {
                                $('#uploaderror').fadeOut();
                            }, 3000);
                        });
                    } else {
                        $('#uploaderror').html('Prišlo je do napake').removeClass('d-none').hide().fadeIn();
                    }
                }
            },
            onError: function(filename, errorType, status, statusText, response, uploadBtn1) {}
        });
    };



    $(document).on("click", "#epotrdiloform button[link-data*=delete]", function(e) {
        e.preventDefault();
        url = $(this).attr("link-data");
        $(document.body).css({ 'cursor': 'wait' });
        $(this).css({ 'cursor': 'wait' });
        $.ajax({
            url: url,
            context: $(this)
        }).done(function() {
            $("#datoteke").load("/studenti/epotrdilo #datoteke", function(response) {
                checklogin(response);
                //aktiviraj_chosen();
                $(window).trigger('resize');
                $(document.body).css({ 'cursor': 'default' });
                $(this).css({ 'cursor': 'default' });
                uploader.enable();
                $('#uploadBtn').show();
            });
        });
    });

    $(document).on("click", "#epotrdiloform #posljiBtn", function(e) {
        e.preventDefault();
        $("#napaka").hide();
        $("#napaka").removeClass('d-none');
        var mindoc = 1;
        var manjka = "";
        var manjkadoc = "Priloži potrdilo o vpisu za tekoče šolsko leto ALI kopijo dijaške ali študentske izkaznice z nalepko za tekoče šolsko/študijsko leto";


        var counter = 0;
        $("#datoteke").find("li").each(function() {
            counter++;
        });
        if (counter < mindoc) manjka = manjka + manjkadoc;

        if (manjka != "") {
            $("#napaka").html(manjka);
            $("#napaka").fadeIn();
        } else {
            $("#poslji").val("1");
            $("#epotrdiloform").submit();
        }
        return false;
    });


    $(document).on("click", "#prijavaform button[link-data*=delete]", function(e) {
        e.preventDefault();
        url = $(this).attr("link-data");
        $(document.body).css({ 'cursor': 'wait' });
        $(this).css({ 'cursor': 'wait' });
        $.ajax({
            url: url,
            context: $(this)
        }).done(function() {

            let seliz = document.querySelector("#input-field-izkusnje") ? document.querySelector("#input-field-izkusnje").checked : false;
            let sel1 = document.querySelector("#input-field-attachemnt1") ? document.querySelector("#input-field-attachemnt1").checked : false;
            let sel2 = document.querySelector("#input-field-attachemnt2") ? document.querySelector("#input-field-attachemnt2").checked : false;
            let sel3 = document.querySelector("#input-field-attachemnt3") ? document.querySelector("#input-field-attachemnt3").checked : false;
            reindex = url.split("delete=")[1];

            $("#datoteke").load("/studenti/prijava-na-delo?datoteke=1&seliz=" + seliz + "&sel1=" + sel1 + "&sel2=" + sel2 + "&sel3=" + sel3 + "&reindex=" + reindex + " #datoteke", function(response) {
                checklogin(response);
                //aktiviraj_chosen();
                $(window).trigger('resize');
                $(document.body).css({ 'cursor': 'default' });
                $(this).css({ 'cursor': 'default' });
                uploader.enable();
                $('#uploadBtn').show();
                var counter = 0;
                $("#datoteke").find("div").each(function() {
                    counter++;
                });


                //if (counter == 0) $("#datoteke").prev().addClass('d-none');

            });
        });
    });

    $(document).on("click", "#messageForm button[link-data*=delete]", function(e) {
        e.preventDefault();
        url = $(this).attr("link-data");
        $(document.body).css({ 'cursor': 'wait' });
        $(this).css({ 'cursor': 'wait' });
        $.ajax({
            url: url,
            context: $(this)
        }).done(function() {
            var loadurl = window.location.href + "&datoteke=1 #datoteke";
            $("#datoteke").load(loadurl, function(response) {
                checklogin(response);
                //aktiviraj_chosen();
                $(window).trigger('resize');
                $(document.body).css({ 'cursor': 'default' });
                $(this).css({ 'cursor': 'default' });
                uploader.enable();
                $('#uploadBtn').show();
                var counter = 0;
                $("#datoteke").find("li").each(function() {
                    counter++;
                });
                if (counter == 0) $("#datoteke").prev().addClass('d-none');

            });
        });
    });

    $(document).on("click", "#prijavaform #posljiBtn", function(e) {
        e.preventDefault();
        if (e.detail > 1) return;
        $("#napaka").hide();
        $("#napaka").removeClass('d-none');
        var manjka = "";

        if (manjka != "") {
            $("#napaka").html(manjka);
            $("#napaka").fadeIn();
        } else {
            $("#poslji").val("1");
            $("#prijavaform").submit();
        }
        return false;
    });





    $(document).on("click", ".collapse-for-filter", function(e) {
        svg = $(this).parent('div').find('a').first();
        svgicon = svg.html();
        if (svgicon.search("plus") > 0) svgicon = svgicon.replace("plus", "minus");
        else svgicon = svgicon.replace("minus", "plus");
        setTimeout(function() { svg.html(svgicon) }, 400);
    });

    $(document).on("click", ".arrows-napotnice,.arrow-right", function(e) {
        e.preventDefault();
        el = $('.table');
        //console.log(el);
        leftPos = el.offset().left;
        //leftPos=el.scrollLeft();
        //console.log(leftPos);
        leftPos = leftPos - 20;
        //el.animate( { scrollTop: leftPos}, 300);
        el.offset(100, 200);
    });

    //postani član
    $("#postaniclan input:tabbable").first().focus();
    $(document).on("focus", "#postaniclan input", function(e) {
        $(this).closest('.form-group').find('.alert').fadeOut();
        //$(this).parent('div').parent('div').find('.alert').fadeOut();
    });
    $(document).on("click", "#postaniclan .choices", function(e) {
        $(this).closest('.form-group').find('.alert').fadeOut();
    });
    $(document).on("click", "#postaniclan .multi-switch", function(e) {
        swn = e.target.nextSibling.id;
        if (swn == "input-field-obv") {
            swc = $("#input-field-obv").val();
            if ($("#input-field-obv").val() == 0) {
                $(this).closest('.form-group').next('div').addClass('d-none');
            } else {
                $(this).closest('.form-group').next('div').removeClass('d-none');
            }
        }
        if (swn == "input-field-citizenship") {
            if ($('#input-field-citizenship').val() == 'on') {
                $(".foreign").hide();
                $(".non-foreign").show();
            } else {
                $(".foreign").removeClass('d-none').show();
                $(".non-foreign").hide();
                //trr se prikazuje samo če je prej že izbral državo
                if ($("#input-field-country").val() != "" && $("#input-field-country").val().indexOf("Country") == -1) $('#wraptrr').removeClass('d-none');
                else $('#wraptrr').addClass('d-none');
            }
        }

    });
    $(document).on('DOMSubtreeModified', '.switch-content', function(e) {
        $(this).closest('.form-group').find('.alert').fadeOut();
        swn = e.target.nextSibling.id;
        if (swn == "input-field-obv") {
            swc = $("#input-field-obv").val();
            if ($("#input-field-obv").val() == 0) {
                $(this).closest('.form-group').next('div').removeClass('d-none');
            }
        }
        if (swn == "input-field-citizenship") {
            if ($('#input-field-citizenship').val() == 'off') {
                $(".foreign").hide();
                $(".non-foreign").show();
            } else {
                $(".foreign").removeClass('d-none').show();
                $(".non-foreign").hide();
                //trr se prikazuje samo če je prej že izbral državo
                if ($("#input-field-country").val() != "" && $("#input-field-country").val().indexOf("Country") == -1) $('#wraptrr').removeClass('d-none');
                else $('#wraptrr').addClass('d-none');
            }
        }

    });

    $(document).on("change", "#postaniclan input", function(e) {
        if (e.target.type == "checkbox") {
            if (e.target.checked) {
                $(".foreign").hide();
                $(".non-foreign").show();
            } else {
                $(".foreign").removeClass('d-none').show();
                $(".non-foreign").hide();
                //trr se prikazuje samo če je prej že izbral državo
                if ($("#input-field-country").val() != "" && $("#input-field-country").val().indexOf("Country") == -1) $('#wraptrr').removeClass('d-none');
                else $('#wraptrr').addClass('d-none');
            }
        } else if (e.target.type == "radio") {
            $(this).parent().parent().parent().find('.alert').fadeOut();
        } else postaniClan(1, $(this));
    });

    elem = document.querySelector('#input-field-country');
    if (elem) elem.addEventListener('choice', function(event) {
        wrtrr = document.querySelector('#wraptrr');
        val = event.detail.choice.value;
        if (val != "" && val.indexOf("Country") == -1) {
            wrtrr.classList.remove('d-none');
        } else {
            wrtrr.classList.add('d-none');
        }

    });



    $(document).on("click", "#input-field-obv", function(e) {
        e.preventDefault();
        //console.log("obv=",e.target)
    });
    $(document).on("click", "#postaniclan button", function(e) {
        var focused = $(':focus');
        e.preventDefault();
        postaniClan(2, focused);
    });
    $(document).on("keyup", "#postaniclan #input-field-phone", function(e) {
        gsm_modify($(this), e);
    });
    $(document).on("keyup", "#postaniclan #input-field-phoneadult", function(e) {
        gsm_modify($(this), e);
    });
    $(document).on("keyup", "#pozabljenogeslo #input-field-phone", function(e) {
        gsm_modify($(this), e);
    });
    $(document).on("click", "#lostpass-destination-email,#lostpass-destination-gsm", function(e) {
        $("#input-lostpass-destination-email").addClass('d-none');
        $("#input-lostpass-destination-gsm").addClass('d-none');
        $("#input-" + $(this).attr("id")).removeClass('d-none');
        $("#kam").val($(this).val());
    });

    $(document).on("click", "#datumzpot", function(e) {
        e.preventDefault();

        let datum_ok = false;
        let anketa_ok = false;
        $("input[name*='anketa_']").each(function() {
            if (this.checked) anketa_ok = true;
            console.log(this.type);
            console.log(this.checked);
            console.log(this.value.length);
            console.log("anketa=", anketa_ok);
            if (this.type == "text" && this.value.length > 3) anketa_ok = true;
            console.log("anketa=", anketa_ok);
        });

        if ($("#input-field-zaposlitve").val() == "") {
            datum_ok = false;
            $(".alert-danger.alert-datum").removeClass('d-none');
        } else {
            datum_ok = true;
            $(".alert-danger.alert-datum").addClass('d-none');
        }

        if (anketa_ok === false) {
            $(".alert-danger.alert-anketa").removeClass('d-none');
        } else {
            $(".alert-danger.alert-anketa").addClass('d-none');
        }

        if (datum_ok && anketa_ok && 1) {
            $('#nevem').val('');
            $("#zaposlitev").submit();
        }

    });

    $(document).on("click", "#datumznv", function(e) {
        e.preventDefault();
        $('#nevem').val('1');
        $("#zaposlitev").submit();
    });


    function postaniClan(chkv, elem) {
        $('#onChng').val(chkv);
        if (window.location.search === "") url = window.location + '?';
        else url = window.location + '&';
        url += $('#postaniclan').serialize();
        $.ajax({
            url: url,
            context: $(this)
        }).done(function(response) {
            resp = JSON.parse(response);
            resp.forEach(function(element) {
                jQuery.each(element, function(key, value) {
                    //for (const [key, value] of Object.entries(element)) {
                    sel = "#input-field-" + key;
                    var notRequestedFields = ['emso', 'vat', 'bank'];
                    if (notRequestedFields.includes(key)) {
                        $(sel).val('');
                    }
                    $(sel).closest('.form-group').removeClass('d-none');
                    $(sel).closest('.form-group').find('.alert').removeClass('d-none').show().html(value);
                    sel = $('#postaniclan .alert:visible');
                });
            });
            sel = elem.closest('.form-group').find('.alert:visible');

            if (sel.length == 0 && chkv == 2) {
                sel = $('#postaniclan .alert:visible');
                if (sel.length) $('html, body').animate({ scrollTop: (sel.first().offset().top - 200) }, 300);
            }

            if (chkv == 2 && resp.length == 0) {
                $('#onChng').val(3);
                $('#postaniclan').submit();
            }
        });
    }

    function gsm_modify(element, e) {
        var temp = "";
        var vrednost = "";
        vrednost = element.val();
        prevl = element.data("prevlength");
        vrednost = vrednost.replace(/[^0-9]/g, "");
        newl = vrednost.length;
        element.data("prevlength", newl);
        if (newl > prevl) {
            if (vrednost.length >= 6) element.val(vrednost.substr(0, 3) + "-" + vrednost.substr(3, 3) + "-" + vrednost.substr(6, 3));
            else if (vrednost.length >= 3) element.val(vrednost.substr(0, 3) + "-" + vrednost.substr(3, 3));
            else element.val(vrednost);
        } else {
            vrednost = element.val();
            vrednost = vrednost.replace(/[^0-9,\-]/g, "");
            element.val(vrednost);
        }
    }



    elem = document.querySelector('#delo');
    if (elem) elem.addEventListener('choice', function(event) {
        val = event.detail.choice.value;

        if (Array.isArray(ch3)) {
            ch3.forEach(function(item) {
                if (item._baseId == "choices--strokovno_delo") mych_strd = item;
            });
        }

        if (val.substring(0, 3) == "STR") {
            url = "/studenti/potrebujem-napotnico?querystrd=" + val.substring(3);
            $.get(url, function(data) {
                result = JSON.parse(data);
                mych_strd.setChoices(result, 'sifra_delo', 'naziv_delo', true);
                if (typeof mych_cp !== 'undefined') {
                    if (mych_cp.disablestr === false) $('#strd').removeClass("d-none").fadeIn();
                }
            });
        } else {
            mych_strd.setChoices([{ value: '', label: '', selected: true }], 'value', 'label', true);
            $('#strd').fadeOut();
        }
    })

    elem = document.querySelector('#input-field-company');
    if (elem) elem.addEventListener('choice', function(event) {
        val = event.detail.choice.value;

        if (val.substring(0, 1) == "E") {
            $('#enapotnica').removeClass('d-none');
            $('#napotkam').addClass('d-none');
            $('#kamreq').val(0);
        } else {
            $('#enapotnica').addClass('d-none');
            $('#napotkam').removeClass('d-none');
            $('#kamreq').val(1);
        }

        if (val.substring(val.length - 3, val.length) == "!!!") {
            $('#compwarning').removeClass('d-none');
        } else {
            $('#compwarning').addClass('d-none');
        }


        if (val.substring(val.length - 2, val.length) == "MK" || val == "0000000") {
            $('#podjetje_kontakti').removeClass('d-none');
            $('#enapotnica').removeClass('d-none');
            $('#napotkam').addClass('d-none');
            $('#kamreq').val(0);
        } else {
            $('#podjetje_kontakti').addClass('d-none');
        }

        if (Array.isArray(ch3)) {
            ch3.forEach(function(item) {
                if (item._baseId == "choices--kam") mych_kam = item;
                if (item._baseId == "choices--podjetje_enote") mych_enote = item;
                if (item._baseId == "choices--strokovno_delo") mych_strd = item;
            });
        } else {
            if (ch3._baseId == "choices--kam") mych_kam = ch3;
        }
        if (Array.isArray(ch2)) {
            ch2.forEach(function(item) {
                if (item._baseId == "choices--kam") mych_kam = item;
                if (item._baseId == "choices--podjetje_enote") mych_enote = item;
                if (item._baseId == "choices--strokovno_delo") mych_strd = item;
            });
        } else {
            if (ch2._baseId == "choices--kam") mych_enote = ch2;
            if (ch2._baseId == "choices--strokovno_delo") mych_strd = ch2;
        }

        if (val.substring(0, 1) == "D") {
            mych_kam.config.choices.forEach(function(choice, index) {
                if (choice.value != "dom" && choice.value != "zac") choice.disabled = true;
                if (choice.value == "dom") choice.selected = true;
            });
            mych_kam.setChoices(mych_kam.config.choices, 'value', 'label', true);
        } else if (val.substring(0, 1) == "Z") {
            mych_kam.config.choices.forEach(function(choice, index) {
                if (choice.value != "dom" && choice.value != "zac") choice.disabled = true;
                if (choice.value == "zac") choice.selected = true;
            });
            mych_kam.setChoices(mych_kam.config.choices, 'value', 'label', true);
        } else {
            mych_kam.config.choices.forEach(function(choice, index) {
                choice.disabled = false;
            })
            mych_kam.setChoices(mych_kam.config.choices, 'value', 'label', true);
        }

        $('#input-field-company-enote-help').addClass("d-none");
        $('#input-field-company-person-help').addClass("d-none");
        $('#podjetje_enote_wrapper').addClass("d-none");

        mych_cp = event.detail.choice.customProperties;
        if (mych_cp) {
            if (mych_cp.enote.length > 0) {
                plhol_elem = $('#podjetje_enote_wrapper > div > div > div.choices__inner > div > div');
                var besedilo_ph = ""
                if (mych_cp.type == "OS") {
                    besedilo_ph = "Izberi kontaktno osebo. Če je ne najdeš, jo vpiši spodaj med opombe.";
                    $('#input-field-company-person-help').removeClass("d-none");
                } else {
                    besedilo_ph = "Podjetje ima več poslovnih enot. Izberi pravo.";
                    mych_enote.setChoiceByValue('');
                    mych_enote.config.searchResultLimit = 20;
                    $('#input-field-company-enote-help').removeClass("d-none");
                }
                $("#podjetje_enote").attr("placeholder", besedilo_ph);
                $("#podjetje_enote").attr("data-placeholder", besedilo_ph);
                mych_enote.setChoices(mych_cp.enote, 'value', 'label', true);
                $('#podjetje_enote_wrapper').removeClass("d-none");
                $("#enotatype").val(mych_cp.type);
                plhol_elem.html(besedilo_ph);
                mych_enote._prevState.items[0].label = besedilo_ph;
            } else {
                mych_enote.setValue([{ value: 'x', label: 'x' }, ]);
                $("#enotatype").val("");
            }
            if (mych_cp.disablestr) {
                //mych_strd.setChoices([{ value: '', label: '', selected: true }],'value','label',true);
                if (mych_strd) mych_strd.setChoiceByValue('');
                $('#strd').fadeOut();
            } else if (mych_strd.choiceList.element.children.length > 1) {
                $('#strd').removeClass("d-none").fadeIn();
            }
        }


    });

    if (typeof(ch2) !== 'undefined') {
        if (Array.isArray(ch2)) {
            ch2.forEach(function(item) {
                if (item._baseId == "choices--delo" || item._baseId == "choices--input-field-highschool-education") {
                    mych = item;
                    mych.config.renderChoiceLimit = 1;
                    mych.config.searchResultLimit = 50;
                    mych.clearInput();
                }
            });
        } else {
            item = ch2;
            if (item._baseId == "choices--delo" || item._baseId == "choices--input-field-highschool-education") {
                mych = item;
                mych.config.renderChoiceLimit = 1;
                mych.config.searchResultLimit = 50;
                mych.clearInput();
            }
        }
    }

    const elem_focus = document.querySelector('[data-focus=true]');
    if (elem_focus) {
        elem_focus.scrollIntoView({ behavior: "smooth", block: "center" })
        elem_focus.focus({ preventScroll: false });
        elem_focus.click();
    }

    $(document).on("click", ".nav-action.second a, .menu-notifications a", function(e) {
        //console.log(e);
        e.preventDefault();
        var hr = e.target.href;
        link = e.target.getAttribute('href');
        title = e.target.innerHTML;
        if (e.target.title != "") title = e.target.title;
        obvestilo = '{"title":"' + title + '", "link":"' + link + '"}';
        $.post("/studenti/removealert", obvestilo, function(response) {
            window.location = hr;
        });
    });

    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(document).on("click", ".link-back", function(e) {
        window.history.back();
    });

    $(document).on("click", ".clicklogin", function(e) {
        e.preventDefault();
        $('#loginbtn').click();
    });

    if ($(".notification-danger").length) {
        $('html, body').animate({ scrollTop: ($(".notification-danger").offset().top - 150) }, 300);
    }

    if (window.location.pathname.search("/studenti/potrebujem-napotnico") !== -1) {
        const elem = document.querySelector('#input-field-company');
        let addStep = "?step=";
        if (elem) addStep = addStep + "1";
        else addStep = addStep + "2";
        if (window.location.search == "" || window.location.search != addStep) {
            url = window.location.pathname + addStep;
            history.pushState(null, null, url);
        }
    }
    if (window.location.pathname.search("/studenti/postani-clan") !== -1) {
        const elem = document.querySelector('#input-field-email');
        let addStep = "?gastep=";
        let fbevsend = false;
        if (elem) addStep = addStep + "1";
        else {
            addStep = addStep + "2";
            fbevsend = true;
        }
        if (window.location.search == "" || window.location.search != addStep) {
            url = window.location.pathname + addStep;
            history.pushState(null, null, url);
            if (fbevsend) {
                if (typeof fbq != 'undefined') {
                    fbq('track', 'CompleteRegistration');
                }
            }
        }
    }
    if (window.location.pathname.search("/studenti/moje-delo") !== -1) {
        const elem = document.querySelector('#step');
        let addStep = "?gastep=";
        if (elem) addStep = addStep + elem.value;
        else addStep = addStep + "5";
        if (window.location.search == "" || window.location.search != addStep) {
            url = window.location.pathname + addStep;
            history.pushState(null, null, url);
        }
    }
    if (window.location.pathname.search("/studenti/pozabljeno-geslo") !== -1) {
        const elem = document.querySelector('#step');
        let addStep = "?gastep=";
        if (elem) addStep = addStep + elem.value;
        else addStep = addStep + "5";
        if (window.location.search == "" || window.location.search != addStep) {
            url = window.location.pathname + addStep;
            history.pushState(null, null, url);
        }
    }
    if (window.location.pathname.search("/studenti/predviden-datum-zaposlitve") !== -1) {
        const elem = document.querySelector('#nevem');
        const elem1a = document.querySelector('#notlogedin');
        let addStep = "?gastep=";
        let fbevsend = false;
        if (elem || elem1a) addStep = addStep + "1";
        else {
            addStep = addStep + "2";
            fbevsend = true;
        }
        if (window.location.search == "" || window.location.search != addStep) {
            url = window.location.pathname + addStep;
            history.pushState(null, null, url);
            if (fbevsend) {
                if (typeof fbq != 'undefined') {
                    fbq('trackCustom', 'DatumZaposlitve');
                }
            }
        }
    }

    $(document).on("click", ".ticon[data-sort]", function() {
        $("#sort").val($(this).attr("data-sort"));
        $("#urnepostavke").submit();
    });
    $(document).on("click", ".ticon[data-sort], .sortWrap", function() {
        if ($(this).attr("data-sort")) $("#sort").val($(this).attr("data-sort"));
        else $("#sort").val($(this).find('svg').first().attr("data-sort"));
        $("#urnepostavke").submit();
    });

    /*$(document).on("click", ".btn-filter1", function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".btn-filter2").removeClass("active");
        if ($(this).hasClass("active")) {
            $("div[data-sporocila]").hide();
            $("div[data-stevilosporocil='0']").show();
        } else {
            $("div[data-sporocila]").show();
        }
    });
    $(document).on("click", ".btn-filter2", function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".btn-filter1").removeClass("active");
        if ($(this).hasClass("active")) {
            $("div[data-sporocila]").hide();
            $("div[data-sporocila='1']").show();
        } else {
            $("div[data-sporocila]").show();
        }
    });*/
    $(document).on("change", "#filterprijave", function(e) {
        //console.log(e)
        //console.log(this.value);
        const filtervalue = this.value
        if (filtervalue == 0) {
            $("div[data-sporocila]").show();
        } else if (filtervalue == 1) {
            $("div[data-sporocila]").hide();
            $("div[data-stevilosporocil='0']").show();
        } else if (filtervalue == 2) {
            $("div[data-sporocila]").hide();
            $("div[data-stevilosporocil]").filter(function() {
                return ($(this).attr('data-stevilosporocil') > 0);
            }).show();
        } else if (filtervalue == 3) {
            $("div[data-sporocila]").hide();
            $("div[data-sporocila='1']").show();
        }
    });

    $(document).on("click", "#messageSend", function(e) {
        e.preventDefault();
        msg = $("#sporocilo").val();
        if (msg.length < 2) {
            $("#error").html("Vpiši sporočilo");
            $("#error").removeClass("d-none");
            setTimeout(() => {
                $("#error").fadeOut();
            }, 5000);
        } else {
            msg = msg.replace(/\r\n/g, "<br />");
            msg = msg.replace(/\n/g, "<br />");
            url = window.location.href + "&newMsg=1&" + $('#messageForm').serialize();
            $.post(url, function(data) {
                response = JSON.parse(data);
                if (response.result) {
                    dne = response.dne;
                    kdaj = response.kdaj;
                    datoteke = response.datoteke;
                    //console.log("datoteke=", datoteke)
                    newMsg = $("#messageTemplate").html();
                    newMsg = newMsg.replace("_sporocilo_", msg);
                    newMsg = newMsg.replace("_dne_", dne);
                    newMsg = newMsg.replace("_kdaj_", kdaj);
                    newMsg = newMsg.replace("_datoteke_", datoteke);
                    $("#sporocilo").val("");
                    $("#datoteke").empty();
                    $("#messageTemplate").before(newMsg);
                    $('#messageClose').click();
                }
            });
        }
    });

    $(document).on("click", "a[data-to-archive*=archive]", function(e) {
        e.preventDefault();
        ob = $(this);
        url = ob.attr("data-to-archive");
        $("#odstraniPrijavoModallink").attr("data-archive", url);

    });
    $(document).on("click", "a[data-archive*=archive]", function(e) {
        e.preventDefault();
        ob = $(this);
        url = ob.attr("data-archive");
        $.post(url, function(data) {
            response = JSON.parse(data);
            if (response.result) {
                window.location = window.location.pathname;
            }
        });
    });


    $(document).on("change", "#input-field-birth_year, #input-field-birth_month, #input-field-birth_day", function(e) {
        const year = $("#input-field-birth_year").val();
        const month = $("#input-field-birth_month").val();
        let day = $("#input-field-birth_day").val();
        if (year > 1900 && month >= 1 && month <= 12) {
            //populate available days
            daysInMonth = new Date(year, month, 0).getDate();
            let selvalue = false;
            if (day > daysInMonth) {
                selvalue = true;
                day = 0;
            }
            availabledays = [{ value: '', label: 'Dan', selected: selvalue }];
            for (i = 1; i <= daysInMonth; i++) {
                availabledays.push({ value: i, label: i });
            }
            if (Array.isArray(ch3)) {
                ch3.forEach(function(item) {
                    if (item._baseId == "choices--input-field-birth_day") {
                        mych_birth_day = item;
                        mych_birth_day.setChoices(availabledays, 'value', 'label', true);
                    }
                });
            }
            if (day >= 1 && day <= 31) {
                var date2 = new Date(year, month - 1, day);
                //omogoči vnos trr-ja za >26let
                var date1 = new Date();
                date1.setFullYear(date1.getFullYear() - 26);
                date1.setHours(0);
                date1.setMinutes(0)
                date1.setSeconds(0);
                var diff = date1 - date2;
                if ((diff > 0 & $('#input-field-citizenship').val() == 'on') || ($('#input-field-citizenship').val() == 'off')) {
                    $('#wraptrr').removeClass('d-none');
                } else {
                    $('#wraptrr').addClass('d-none');
                }

                //15-18 let mobilni kontakt staršev
                var date15 = new Date();
                date15.setFullYear(date15.getFullYear() - 15);
                date15.setHours(0);
                date15.setMinutes(0)
                date15.setSeconds(0);
                var diff_15 = date15 - date2;

                var date18 = new Date();
                date18.setFullYear(date18.getFullYear() - 18);
                date18.setHours(0);
                date18.setMinutes(0)
                date18.setSeconds(0);
                var diff_18 = date18 - date2;

                if (diff_15 > 0 & diff_18 < 0) {
                    $('#input-field-phoneadult').closest('.form-group').removeClass('d-none');
                    $('#input-field-vat-help').removeClass('d-none');
                    $('#input-field-emso-help').removeClass('d-none');
                } else {
                    $('#input-field-phoneadult').closest('.form-group').addClass('d-none');
                    $('#input-field-vat-help').addClass('d-none');
                    $('#input-field-emso-help').addClass('d-none');
                }

                //trigger input change event postaniclan()
                $("#input-field-birth").val(day + "." + month + "." + year);
                postaniClan(1, $("#input-field-birth"));
            } else {
                $("#input-field-birth").val('');
            }

        } else {
            $("#input-field-birth").val('');
        }
    });


});

if (typeof $.cookieCuttr !== 'undefined') {
    $.cookieCuttr({
        cookieAcceptPageButtonText: "Sprejmi piškotke",
        cookieDeclinePageButtonText: "Zavrzi piškotke",
        cookieMStatusPageButtonText: "Zapomni si mojo odločite",
        cookieAcceptButton: false,
        cookieAcceptButtonText: "V redu",
        cookiePolicyLink: '/cookie-policy',
        cookieDomain: "studentski-servis.com",
        cookieMessage: '<div class= "gdprcookie" style="" ><h1>🍪 Piškotek?</h1><p>Na našem spletnem mestu uporabljamo piškotke za zagotavljanje najboljše uporabniške izkušnje. Z nadaljnjim brskanjem po spletnem mestu se strinjate z njihovo uporabo, njihovo nastavitev pa lahko spremenite preko spodnje povezave. <a href="/piskotki">Več o piškotkih</a></p><div class="gdprcookie-types"><h2>Uporabljamo sledeče piškotke:</h2><ul><li><div class="custom-control custom-checkbox"><input type="checkbox" id="gdpr-cookietype-0" class="custom-control-input" name="gdpr[]" value="essential" checked="checked" disabled><label for="gdpr-cookietype-0" class="custom-control-label">Nujno potrebni</label></div></li><li><div class="custom-control custom-checkbox"><input type="checkbox" id="gdpr-cookietype-1" class="custom-control-input" name="gdpr[]" value="analytics" checked="checked"><label for="gdpr-cookietype-1" class="custom-control-label">Analitika</label></div></li></ul></div><div class="gdprcookie-buttons"><a type="button" role="button" href="#accept" id="cookiebtn" class="btn btn-primary cc-cookie-accept">V redu</a></div></div>'
    });
}

$(document).on("change", "#gdpr-cookietype-1", function(e) {
    //alert(this.checked);
    if (this.checked) $('#cookiebtn').prop('href', '#accept');
    else $('#cookiebtn').prop('href', '#decline');
});

$(window).on('ajaxErrorMessage', function(event, message) {
    event.preventDefault();
    $("#error2").hide(100);
    document.querySelector("#error").scrollIntoView({ behavior: "smooth", block: "start" });
    $("#error").html(message).removeClass("d-none").hide().show(1000, function() {
        //$(this).delay(3000).hide(1000) 
    });
})

$('#userSigninPassword').keydown(function() {
    $("#error").addClass('d-none');
});
$('#userSigninLogin').keydown(function() {
    $("#error").addClass('d-none');
});

var labels = document.getElementsByTagName('label');
Array.prototype.forEach.call(labels, function(elem) {
    elem.innerHTML = elem.innerHTML.replace(/ \/ /, '<br />');
    if (elem.innerHTML.indexOf('---') > 0) {
        elem.innerHTML = elem.innerHTML.replace(/---/, '<br /><span style="font-weight: 300;">') + "</span>";
        elem.nextSibling.placeholder = "";
        elem.classList.add('fl-label');
        wrapper = '<div class="fl-wrap fl-wrap-textarea fl-is-active">' + elem.parentElement.innerHTML + '</div>';
        elem.parentElement.innerHTML = wrapper;
    }
});
var textAreas = document.getElementsByTagName('textarea');
Array.prototype.forEach.call(textAreas, function(elem) {
    elem.placeholder = elem.placeholder.replace(/---/g, '\n');
});


elem = document.querySelector('#croflag');
if (elem) elem.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    window.location = this.getAttribute("data-link");
});

const searchInput = document.querySelector('#searchprijave');
if (searchInput) searchInput.addEventListener("keyup", e => {
    const searchvalue = searchInput.value;
    document.querySelectorAll("div.row[data-sporocila]").forEach(row => {
        row.classList.add('searchHide');
        row.querySelectorAll("div").forEach(div => {
            var searching = div.textContent.toLowerCase()
            searchresult = searching.search(searchvalue.toLowerCase())
            if (searchresult >= 0) row.classList.remove('searchHide');
        })
    })
})