(function(global){var Language = {};

Language.pluralFormFunction = function (n) {
		if (n % 100 == 1) {
			return 'one';
		}

		if (n % 100 == 2) {
			return 'two';
		}

		if (n % 100 == 3 || n % 100 == 4) {
			return 'few';
		}

		return 'other';
	};


Language.bubble = Language.bubble || {};

Language.bubble.attention_grabber = {
	"message": "Chat attention grabber"
};


Language.chat = Language.chat || {};

Language.chat.Warning = {
	"message": "Opozorilo"
};
Language.chat.accept_call = {
	"message": "Sprejmite"
};
Language.chat.active = {
	"message": "Active"
};
Language.chat.agent_profile_image = {
	"message": "Agent profile image"
};
Language.chat.agent_ringing = {
	"message": "Dohodni klic"
};
Language.chat.all_conversations = {
	"message": "See all conversations"
};
Language.chat.call_end_details = {
	"message": "Začet ob #startedOn in je trajal #duration",
	"vars": [
		"startedOn",
		"duration"
	]
};
Language.chat.call_error_load = {
	"message": "Ne morem naložiti podrobnosti klica."
};
Language.chat.call_started_on = {
	"message": "Začet ob #startedOn",
	"vars": [
		"startedOn"
	]
};
Language.chat.chatEnded = {
	"message": "Vaš klepet je končan"
};
Language.chat.chat_icon = {
	"message": "Chat icon"
};
Language.chat.chat_qm = {
	"message": "Klepet?"
};
Language.chat.chat_text = {
	"message": "Klepet"
};
Language.chat.close_icon = {
	"message": "Close icon"
};
Language.chat.completed_call = {
	"message": "Klic končan"
};
Language.chat.conversation_ended_on = {
	"message": "Conversation ended on"
};
Language.chat.decline_call = {
	"message": "Zavrni"
};
Language.chat.defaultName = {
	"message": "Vi (spremenite ime)"
};
Language.chat.departmentIsAway = {
	"message": "Oddelek #strongStart #departmentName #strongEnd je trenutno nedostopen.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.departmentIsOffline = {
	"message": "Oddelek #strongStart #departmentName #strongEnd trenutno ni na voljo. Morda bo na vaše vprašanje odgovoril drug oddelek.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.download = {
	"message": "Prenos"
};
Language.chat.downloadFile = {
	"message": "Prenesi datoteko"
};
Language.chat.dragDropText = {
	"message": "Tukaj vrzite datoteke, ki jih želite naložiti."
};
Language.chat.emoji_error_load = {
	"message": "Emodžijev ni mogoče naložiti"
};
Language.chat.error_title = {
	"message": "Napaka"
};
Language.chat.failed = {
	"message": "Ni uspelo"
};
Language.chat.generalUploadError = {
	"message": "\"#fileName\", prosimo poskusite ponovno.",
	"vars": [
		"fileName"
	]
};
Language.chat.generalUploadErrorLabel = {
	"message": "Datoteke ni možno naložiti"
};
Language.chat.goToLatest = {
	"message": "Go to latest"
};
Language.chat.hideButton = {
	"message": "Skrij pogovor"
};
Language.chat.incoming_call_message = {
	"message": "#name vas kliče",
	"vars": [
		"name"
	]
};
Language.chat.insert_emoji = {
	"message": "Vstavi smeška"
};
Language.chat.justNow = {
	"message": "ravnokar"
};
Language.chat.limit2 = {
	"message": "Maksimalna velikost datoteke za mobilne brskalnike je 2 MB, prosimo naložite manjšo datoteko."
};
Language.chat.limit50 = {
	"message": "Maksimalna velikost datoteke je 50 MB, prosimo naložite manjšo datoteko."
};
Language.chat.message_not_delivered = {
	"message": "Sporočilo ni bilo dostavljeno, kliknite tukaj, če želite ponovno poslati."
};
Language.chat.message_too_long = {
	"message": "Sporočilo ne sme presegati 5000 znakov"
};
Language.chat.missed_agent = {
	"message": "Vaš klic je bil neuspešen"
};
Language.chat.missed_visitor = {
	"message": "Zgrešili ste klic"
};
Language.chat.missed_visitor_messagePreview = {
	"message": "Zgrešili ste klic od"
};
Language.chat.mobileName = {
	"message": "Vi"
};
Language.chat.newChat = {
	"message": "Začnite nov pogovor"
};
Language.chat.newMessages = {
	"message": "Novo sporočilo"
};
Language.chat.new_conversation = {
	"message": "Nov pogovor"
};
Language.chat.notificationTitle = {
	"message": "obvestilo"
};
Language.chat.ongoing_call = {
	"message": "Trenutni Klic"
};
Language.chat.past = {
	"message": "#time ago",
	"vars": [
		"time"
	]
};
Language.chat.pasted_image_title = {
	"message": "Prilepljena slika: #dateTime",
	"vars": [
		"dateTime"
	]
};
Language.chat.profile_prechat_text = {
	"message": "Prosim izpolni obrazec preden začneva s klepetom"
};
Language.chat.rejected_call = {
	"message": "Ta klic ste zavrnili"
};
Language.chat.remove_rate = {
	"message": "Odstranili ste vašo oceno za ta pogovor"
};
Language.chat.resend = {
	"message": "Ponovno pošlji"
};
Language.chat.retry = {
	"message": "Poskusite znova."
};
Language.chat.return_to_live_chat = {
	"message": "Return to live chat"
};
Language.chat.say_something = {
	"message": "Napisati odgovor.."
};
Language.chat.screen_share_error = {
	"message": "Deljenje zaslona ni na voljo."
};
Language.chat.send_mail = {
	"message": "Pošlji e-mail"
};
Language.chat.sent_file = {
	"message": "Sent a file"
};
Language.chat.today_time = {
	"message": "Danes, #time",
	"vars": [
		"time"
	]
};
Language.chat.tryAgain = {
	"message": "Poizkusite ponovno."
};
Language.chat.unanswered = {
	"message": "Unanswered"
};
Language.chat.uploading = {
	"message": "Nalagam..."
};
Language.chat.video_call_error = {
	"message": "Video klic ni na voljo."
};
Language.chat.visitor_ringing = {
	"message": "Kličem..."
};
Language.chat.voice_call_error = {
	"message": "Glasovni klic ni na voljo."
};
Language.chat.we_are_live = {
	"message": "Pripravljeni smo na pogovor z vami. Napišite vprašanje in pričnite klepet v živo."
};


Language.days = Language.days || {};

Language.days['0'] = {
	"message": "Nedelja"
};
Language.days['1'] = {
	"message": "Ponedeljek"
};
Language.days['2'] = {
	"message": "Torek"
};
Language.days['3'] = {
	"message": "Sreda"
};
Language.days['4'] = {
	"message": "Četrtek"
};
Language.days['5'] = {
	"message": "Petek"
};
Language.days['6'] = {
	"message": "Sobota"
};


Language.form = Language.form || {};

Language.form.CancelButton = {
	"message": "Prekliči"
};
Language.form.CloseButton = {
	"message": "Zapri"
};
Language.form.DepartmentsErrorMessage = {
	"message": "Izbira oddelka je obvezna."
};
Language.form.DepartmentsPlaceholder = {
	"message": "izberite oddelek..."
};
Language.form.EmailErrorMessage = {
	"message": "Neveljaven e-mail naslov."
};
Language.form.EmailPlaceholder = {
	"message": "E-poštni naslov"
};
Language.form.EmailTranscriptFormMessage = {
	"message": "Prosimo, izpolnite spodnji obrazec, da bomo lahko ta pogovor poslali na vaš e-poštni naslov."
};
Language.form.EmailTranscriptSuccess = {
	"message": "Sent email transcript request."
};
Language.form.EmailTranscriptTo = {
	"message": "Pošlji prepis na naslov"
};
Language.form.EndChatMessage = {
	"message": "Hvala za klepet z nami. Lahko začnete nov pogovor ali pa vnesete svoj e-naslov in poslali vam bomo prepis pogovora."
};
Language.form.EndChatMessage2 = {
	"message": "Thank you for chatting with us. Feel free to start a new chat session."
};
Language.form.EndChatTitle = {
	"message": "Ali ste prepričani, da želite končati ta klepet?"
};
Language.form.MessagePlaceholder = {
	"message": "vaše sporočilo..."
};
Language.form.NameErrorMessage = {
	"message": "Ime je obvezno."
};
Language.form.NameFormMessage = {
	"message": "Prosimo spremenite vaše ime, da vas bomo lahko naslednjič prepoznali."
};
Language.form.OfflineFormMessage = {
	"message": "Prosimo, izpolnite spodnji obrazec in kontaktirali vas bomo nazaj v najkrajšem možnem času."
};
Language.form.OfflineMessageNotSent = {
	"message": "Vaše sporočilo ni bilo dostavljeno, poskusite ponovno"
};
Language.form.OfflineMessageSent = {
	"message": "Vaše sporočilo je bilo uspešno poslano!"
};
Language.form.PhoneErrorMessage = {
	"message": "Neveljavna telefonska številka"
};
Language.form.PreChatFormMessage = {
	"message": "Prosimo, izpolnite spodnji obrazec, da začnete klepet z naslednjim razpoložljivim operaterjem."
};
Language.form.PreChatFormMessageProfile = {
	"message": "Prosim izpolnite obrazec preden začneva s klepetom."
};
Language.form.QuestionPlaceholder = {
	"message": "vaše vprašanje..."
};
Language.form.RequiredErrorMessage = {
	"message": "Podatek je obvezen!"
};
Language.form.SaveButton = {
	"message": "Shrani"
};
Language.form.SendButton = {
	"message": "Pošlji"
};
Language.form.SendMessage = {
	"message": "Pošlji sporočilo"
};
Language.form.StartChatButton = {
	"message": "Začni klepet"
};
Language.form.SubmitButton = {
	"message": "Oddaj"
};
Language.form.SubmittedFrom = {
	"message": "Vpisano od"
};
Language.form.SubmittingProcess = {
	"message": "Podrobnosti lahko najdete na naslovu: http://goo.gl/dBSbZF"
};
Language.form.TranscriptMessage = {
	"message": "Vabimo vas, da vnesete svoj e-mail naslov in poslali vam bomo prepis tega pogovora."
};
Language.form.any = {
	"message": "Karkoli"
};
Language.form.chatEnded = {
	"message": "Vaš klepet je končan"
};
Language.form.department = {
	"message": "Oddelek"
};
Language.form.email = {
	"message": "e-mail"
};
Language.form.errorSaving = {
	"message": "Ne morem shraniti. Prosimo poskusite znova"
};
Language.form.message = {
	"message": "Sporočilo"
};
Language.form.name = {
	"message": "Ime"
};
Language.form.sendAgain = {
	"message": "Ponovno Pošlji"
};
Language.form.visitButton = {
	"message": "Obiščite tawk.to"
};


Language.home = Language.home || {};

Language.home.banner_image = {
	"message": "Banner image"
};
Language.home.chat_button = {
	"message": "Novi pogovor"
};
Language.home.chat_input = {
	"message": "Vpišite tukaj in pritisnite enter.."
};
Language.home.heading_main = {
	"message": "Pozdravljeni 👋"
};
Language.home.heading_sub = {
	"message": "Potrebujete pomoč? Poiščite odgovore v našem centru za pomoč ali pričnite pogovor:"
};
Language.home.kb_search = {
	"message": "Poiščite odgovore"
};
Language.home.logo_image = {
	"message": "Slika logotipa"
};


Language.kb = Language.kb || {};

Language.kb.article_image = {
	"message": "Slika članka"
};
Language.kb.article_rating = {
	"message": "Vam je ta članek pomagal?"
};
Language.kb.article_rating_count = {
	"message": "#totalLikes od #totalVotes jim je bil všeč ta članek",
	"vars": [
		"totalLikes",
		"totalVotes"
	]
};
Language.kb.author_profile_image = {
	"message": "Fotografija avtorjevega profila"
};
Language.kb.clear_search = {
	"message": "Počistite iskanje"
};
Language.kb.downvote_rating_button = {
	"message": "Ne"
};
Language.kb.help_center = {
	"message": "Center za pomoč"
};
Language.kb.negative_rating = {
	"message": "Negativno"
};
Language.kb.positive_rating = {
	"message": "Pozitivno"
};
Language.kb.recent_searches = {
	"message": "Nedavna iskanja"
};
Language.kb.search_fail_description = {
	"message": "Prosim, poizkusite ponovno"
};
Language.kb.search_fail_title = {
	"message": "Ni iskanih zadetkov"
};
Language.kb.search_placeholder = {
	"message": "Išči odgovore"
};
Language.kb.search_results = {
	"message": "Zadetki"
};
Language.kb.show_all_results = {
	"message": "Pokaži vse zadetke (#num)",
	"vars": [
		"num"
	]
};
Language.kb.submit_search = {
	"message": "Pošljite iskanje"
};
Language.kb.upvote_rating_button = {
	"message": "Da"
};
Language.kb.view_full = {
	"message": "Poglej vse"
};


Language.menu = Language.menu || {};

Language.menu.add_chat_to_your_website = {
	"message": "Add Chat to your website"
};
Language.menu.change_name = {
	"message": "Spremenite ime"
};
Language.menu.email_transcript = {
	"message": "Prepis pogovora"
};
Language.menu.end_chat_session = {
	"message": "Zaključi pogovor"
};
Language.menu.popout_widget = {
	"message": "V lastno okno"
};
Language.menu.sound_off = {
	"message": "Zvok izključen"
};
Language.menu.sound_on = {
	"message": "Zvok vključen"
};


Language.months = Language.months || {};

Language.months['0'] = {
	"message": "Januar"
};
Language.months['1'] = {
	"message": "Februar"
};
Language.months['10'] = {
	"message": "November"
};
Language.months['11'] = {
	"message": "December"
};
Language.months['2'] = {
	"message": "Marec"
};
Language.months['3'] = {
	"message": "April"
};
Language.months['4'] = {
	"message": "Maj"
};
Language.months['5'] = {
	"message": "Junij"
};
Language.months['6'] = {
	"message": "Julij"
};
Language.months['7'] = {
	"message": "Avgust"
};
Language.months['8'] = {
	"message": "September"
};
Language.months['9'] = {
	"message": "Oktober"
};


Language.notifications = Language.notifications || {};

Language.notifications.dismiss_alert = {
	"message": "Dismiss Alert"
};
Language.notifications.maximum_file_upload_warning = {
	"message": "Žal, prenos datotek je omejen na #limitFileNumber naenkrat. Znova poskusite naložiti sledeče datoteke:",
	"vars": [
		"limitFileNumber"
	]
};
Language.notifications.maximum_size_upload_warning = {
	"message": "Žal, prenos je omejen na #limitFileSize na datoteko. Prosimo stisnite sledeče datoteke in poskusite znova.",
	"vars": [
		"limitFileSize"
	]
};
Language.notifications.reconnecting = {
	"message": "Reconnecting"
};
Language.notifications.retry = {
	"message": "Poskusite znova"
};


Language.overlay = Language.overlay || {};

Language.overlay.cookiesOff = {
	"message": "Žal se z nami ne morete povezati, ker so piškotki vašega brskalnika izklopljeni. Prosimo, da jih vklopite in osvežite stran."
};
Language.overlay.inactive = {
	"message": "Kliknite tukaj, da ponovno začnete klepet"
};
Language.overlay.maintenance = {
	"message": "Chat je v vzdrževanju"
};
Language.overlay.tawkContent = {
	"message": "Ta pripomoček poganja tawk.to - brezplačna sporočilna aplikacija, ki vam omogoča spremljanje in sodelovanje z obiskovalci na vaši spletni strani."
};


Language.rollover = Language.rollover || {};

Language.rollover.back = {
	"message": "Back"
};
Language.rollover.chatMenu = {
	"message": "Meni"
};
Language.rollover.emailTranscriptOption = {
	"message": "Prepis pogovora"
};
Language.rollover.end = {
	"message": "Zapri pogovor"
};
Language.rollover.knowledgeBase = {
	"message": "baza Znanja"
};
Language.rollover.maximize = {
	"message": "Povečaj"
};
Language.rollover.minimize = {
	"message": "Minimiraj"
};
Language.rollover.negativeRating = {
	"message": "Ocenite ta pogovor z -1"
};
Language.rollover.popOut = {
	"message": "Pop ven"
};
Language.rollover.positiveRating = {
	"message": "Ocenite ta pogovor z +1"
};
Language.rollover.rateChat = {
	"message": "Oceni ta pogovor"
};
Language.rollover.resendMessage = {
	"message": "Ponovno pošlji sporočilo"
};
Language.rollover.resize = {
	"message": "Spremeni velikost"
};
Language.rollover.screenShare = {
	"message": "Deljenje Zaslona"
};
Language.rollover.uploadFile = {
	"message": "Naloži datoteko"
};
Language.rollover.videoCall = {
	"message": "Video klic"
};
Language.rollover.voiceCall = {
	"message": "Glasovni klic"
};


Language.routes = Language.routes || {};

Language.routes.all_agents = {
	"message": "All Agents"
};
Language.routes.conversations = {
	"message": "Pogovori"
};
Language.routes.load_more = {
	"message": "Naloži več"
};


Language.status = Language.status || {};

Language.status.away = {
	"message": "Odsoten"
};
Language.status.offline = {
	"message": "Offline"
};
Language.status.online = {
	"message": "Online"
};




Language.chat = Language.chat || {};

Language.chat.hours = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num ura",
		"two": "#num uri",
		"few": "#num ur",
		"other": "#num ur"
	}
};
Language.chat.messageQueuedText = {
	"pluralVars": [
		"t"
	],
	"message": {
		"one": "Predvideni čas čakanja je #strongStart #t minuta #strongEnd",
		"two": "Predvideni čas čakanja je #strongStart #t minuti #strongEnd",
		"few": "Čakalna doba je #strongStart #t minut #strongEnd",
		"other": "Predvideni čas čakanja je #strongStart #t minute #strongEnd"
	},
	"vars": [
		"strongStart",
		"strongEnd"
	]
};
Language.chat.minutes = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num minuta",
		"two": "#num minuti",
		"few": "#num minut",
		"other": "#num minut"
	}
};
Language.chat.newMessage = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num novo sporočilo",
		"two": "#num novi sporočili",
		"few": "#num novih sporočil",
		"other": "#num nova sporočila"
	}
};
Language.chat.seconds = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num sekunda",
		"two": "#num sekundi",
		"few": "#num sekund",
		"other": "#num sekunde"
	}
};


global.$_Tawk.language = Language;})(window);