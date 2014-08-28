var root;
$(document).ready(function(){

	root = {
		ap: {
			name: "Awesome Points",
			amount: 0,
			increment: 0,
			clicker: 1
		}
	}

	//QUOTES
	var quotes = ['"fucking MS paint should be capable of dragging those worthless things to a crawl."',
	'"fuck this game"',
	'"its like this is the main spot for pretend chinese developers and 12 year olds who followd a couple of tutorials."',
	'"this is one of the most terrible looking things ive ever seen. get off the internet please."',
	'"the fuck is this?"',
	'"most are reused pieces of half assed copy/paste script kiddie nonsense, with a donate button to beg for your hard earned money while they sit on their ass copying other peoples work."',
	'"you are incompetent to an extreme"',
	'"im not like most people here who just suck the dick right off anyone who posts anything"',
	'"your copy/pasted code is a laughable joke."',
	'"its still far from being worth mine or anyone elses time"',
	'"i dont see it ever becoming anything worth playing"',
	'"i honestly wish i could block you as a user here, so i never had to waste my time reading your posts again"',
	'"only in time zones that in all technicality, reddit is not. as a .com, this is america."',
	'"youre doing the same scammy bullshit"',
	'"i HATE this. fucking despise it so much"',
	'"is this even a game?"',
	'"stop showing that youre clearly a pre pubescent child, and walk away"',
	'"you wasted my time by posting this as a GAME"',
	'"i am clearly correct"',
	'"you are clearly a bunch of idiots who dont understand what a game is."',
	'" fucking half ass it and then lie to make himself not look like a lazy fuck who couldnt be bothered to test his code for basic functionality."',
	'"you just have some random crap thrown together and are hoping people will give you ideas, and test your shitty code for you"',
	'"i believe talking shit is exactly what that level of giving a fuck on your end, deserves nothing but to be put down."',
	'"fuck these dick riding idiots"',
	'"the entire shitty game obviously thrown together by someone who has no idea what they are doing"',
	'"most of the "devs" here are little script kiddies who are viewing a few tutorials and expecting to get paid for their bare bones basic work."',
	'"well this clearly isnt you developing anything."'];
	var sounds = ["Bam!","Boom!","Biff!","Slap!","Whack!"];
    randquo = quotes[Math.floor( Math.random() * quotes.length )];

	//UPDATE AMOUNTS
	function updateAmounts(){
		$('#cpuArea').append("</br>Awesome Points " + root.ap.amount);
		if(root.ap.amount == 100){
			$("#userArea").append("<br/> You have become so awesome that you exploded.");
		}
	};
	$('#inputText').on('keyup', function(e) {
	    var code = (e.keyCode ? e.keyCode : e.which);
	    //COMMENT COMMAND
	    if (code == 13 && $('#inputText').val().toUpperCase()=='COMMENT') {
	    	root.ap.amount++;
	    	randquo = quotes[Math.floor( Math.random() * quotes.length )];
	    	$("#userArea").append("<br/>" + randquo);
		    $("#inputText").val('');
		    updateAmounts();
	    };
	    //PUNCH COMMAND
	    if (code == 13 && $('#inputText').val().toUpperCase()=='PUNCH') {
	    	randso = sounds[Math.floor( Math.random() * sounds.length )];
	    	$("#userArea").append("<br/>" + randso);
		    $("#inputText").val('');
	    };
	    //ABOUT COMMAND
	    if (code == 13 && $('#inputText').val().toUpperCase()=='ABOUT') {
	    	$("#userArea").append("<br/> This 'game' was made by TheWalrusEffect upon suggestion for a game to make in less than a week. Final coding time: 5 hours.");
		    $("#inputText").val('');
	    };
	    //HELP COMMAND
	    if (code == 13 && $('#inputText').val().toUpperCase()=='HELP') {
	    	$("#userArea").append("<br/>*comment - Post a comment to /r/incremental_games<br/>Uhhh. That's actually it. This game is super early beta alpha extraordinaire. (Will probably never be updated)");
	    	$("#inputText").val('');
	    };
	});
});