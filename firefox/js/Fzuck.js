window.onload = function() {
    var el = document.getElementById("fZuck");
    var ell = document.getElementById("unFZuck");
    var ab = document.getElementById("about");
    var foc = document.getElementById("textInput");
    var how = document.getElementById("howToUse");
    if (el) {
        el.addEventListener("click", fuckZuck, false);
    }
    if (ell) {
        ell.addEventListener("click", unFuckZuck, false);
    }
    if (ab) {
        ab.addEventListener("click", about, false);
    }
    if (foc) {
        foc.focus();
    }
    if (how) {
        how.addEventListener("click", instructions, false);
    }

}

function alphaToPhonetic(alpha) {
    //Holds the ciphered text
    var strText = '';
    let i;
    //Loops through entire string chracter by character
    for (i of alpha) {
        switch (i) {
            case 'a':
                strText += 'alpha ';
                break;
            case 'b':
                strText += 'bravo ';
                break;
            case 'c':
                strText += 'charlie ';
                break;
            case 'd':
                strText += 'delta ';
                break;
            case 'e':
                strText += 'echo ';
                break;
            case 'f':
                strText += 'foxtrot ';
                break;
            case 'g':
                strText += 'golf ';
                break;
            case 'h':
                strText += 'hotel ';
                break;
            case 'i':
                strText += 'india ';
                break;
            case 'j':
                strText += 'juliet ';
                break;
            case 'k':
                strText += 'kilo ';
                break;
            case 'l':
                strText += 'lima ';
                break;
            case 'm':
                strText += 'mike ';
                break;
            case 'n':
                strText += 'november ';
                break;
            case 'o':
                strText += 'oscar ';
                break;
            case 'p':
                strText += 'papa ';
                break;
            case 'q':
                strText += 'qubec ';
                break;
            case 'r':
                strText += 'romeo ';
                break;
            case 's':
                strText += 'sierra ';
                break;
            case 't':
                strText += 'tango ';
                break;
            case 'u':
                strText += 'unifom ';
                break;
            case 'v':
                strText += 'victor ';
                break;
            case 'w':
                strText += 'whiskey ';
                break;
            case 'x':
                strText += 'xray ';
                break;
            case 'y':
                strText += 'yanky ';
                break;
            case 'z':
                strText += 'zulu ';
                break;
            case '0':
                strText += 'zuluechoromeooscar ';
                break;
            case '1':
                strText += 'oscarnovemberecho ';
                break;
            case '2':
                strText += 'tanowhiskeyoscar ';
                break;
            case '3':
                strText += 'tangohotelromeoechoecho ';
                break;
            case '4':
                strText += 'foxtrotoscaruniformromeo ';
                break;
            case '5':
                strText += 'foxtrotindiavictorecho ';
                break;
            case '6':
                strText += 'sieraindiaexray ';
                break;
            case '7':
                strText += 'sieraechovictorechonovember ';
                break;
            case '8':
                strText += 'echoindiagolfhoteltango ';
                break;
            case '9':
                strText += 'novemberinianovemberecho ';
                break;
            case '\n':
                strText += 'novemberechowhiskeylimaindianovemberecho ';
                break;
            case '\t':
                strText += 'tangoalphabravo ';
                break;
            case ' ':
                strText += 'sierapapaalphacharlieecho ';
                break;
            case '\,':
                strText += 'charlieoscarmikemikealpha ';
                break;
            case '.':
                strText += 'papaechoromeoindiaoscardelta ';
                break;
            case '/':
                strText += 'foxtrotoscarromeowhiskeyalpharomeodeltasieralimaalphasierahotel ';
                break;
            case '<':
                strText += 'limaechosierasieratangohotelalphanovember ';
                break;
            case '>':
                strText += 'golfromeoechoalphatangoerchoromeotangohotelalphanovember ';
                break;
            case '?':
                strText += 'qubecuniformechosieratangoindiaoscarnovembermikealpharomeokilo ';
                break;
            case ';':
                strText += 'sieraechomikeindiacharlieoscarlimaoscarnovember ';
                break;
            case ':':
                strText += 'charlieoscarlimaoscarnovember ';
                break;
            case '\'':
                strText += 'sieraindianovebergolflimaechoqubecuniformoscartangoecho ';
                break;
            case 'd\"':
                strText += 'deltaoscaruniformbravolimeechoqubecuniformoscartangoecho ';
                break;
            case '[':
                strText += 'limaechofoxtrottangobravoromeoalphacharliekiloechotango ';
                break;
            case ']':
                strText += 'romeoindiagolfhoteltangobravoromeoalphacharliekiloechotango ';
                break;
            case '\\':
                strText += 'bravoalphacharliekilosieralimaalphasierahotel ';
                break;
            case '{':
                strText += 'limaechofoxtrottangobravoromeoalphacharlieecho ';
                break;
            case '}':
                strText += 'romeoindiagolfhoteltangobravoromeoalphacharlieecho ';
                break;
            case '|':
                strText += 'papaindiapapaecho ';
                break;
            case '-':
                strText += 'mikeindianovemberuniformsiera ';
                break;
            case '=':
                strText += 'echoqubecuniformalphalimasiera ';
                break;
            case '`':
                strText += 'bravoalphacharliekilotangoindiachaliekilo ';
                break;
            case '~':
                strText += 'tangoindialimadeltaalpha ';
                break;
            case '!':
                strText += 'echoxraycharlielimaalphamikealphatangoindiaoscarnovemberpapaoscarindianovembertango ';
                break;
            case '@':
                strText += 'alphatangosieraindiagolfnovember ';
                break;
            case '#':
                strText += 'papaoscaruniformnovemberdeltasieraindiagolfnovember ';
                break;
            case '$':
                strText += 'deltaoscarlimalimaalpharomeosieraindiagolfnovember ';
                break;
            case '%':
                strText += 'papaechoromeocharlieechonovembertangosieraindiagolfnovember ';
                break;
            case '^':
                strText += 'charliealpharomeoechotango ';
                break;
            case '&':
                strText += 'alphamikepapaechoromeosieranovemberdelta ';
                break;
            case '*':
                strText += 'alphasieratangoechoromeoindiasierakilo ';
                break;
            case '(':
                strText += 'limaechofoxtrotpapaalpharomeoechonovember ';
                break;
            case ')':
                strText += 'romeoindiagolfhoteltangopapaalpharomeoechonovember ';
                break;
            case '_':
                strText += 'uniformnovemberdeltaechoromeosieracharlieoscarromeoecho ';
                break;
            case '+':
                strText += 'papalimauniformsiera ';
                break;
            case 'A':
                strText += 'Alpha ';
                break;
            case 'B':
                strText += 'Bravo ';
                break;
            case 'C':
                strText += 'Charlie ';
                break;
            case 'D':
                strText += 'Delta ';
                break;
            case 'E':
                strText += 'Echo ';
                break;
            case 'F':
                strText += 'Foxtrot ';
                break;
            case 'G':
                strText += 'Golf ';
                break;
            case 'H':
                strText += 'Hotel ';
                break;
            case 'I':
                strText += 'India ';
                break;
            case 'J':
                strText += 'Juliet ';
                break;
            case 'K':
                strText += 'Kilo ';
                break;
            case 'L':
                strText += 'Lima ';
                break;
            case 'M':
                strText += 'Mike ';
                break;
            case 'N':
                strText += 'November ';
                break;
            case 'O':
                strText += 'Oscar ';
                break;
            case 'P':
                strText += 'Papa ';
                break;
            case 'Q':
                strText += 'Qubec ';
                break;
            case 'R':
                strText += 'Romeo ';
                break;
            case 'S':
                strText += 'Sierra ';
                break;
            case 'T':
                strText += 'Tango ';
                break;
            case 'U':
                strText += 'Unifom ';
                break;
            case 'V':
                strText += 'Victor ';
                break;
            case 'W':
                strText += 'Whiskey ';
                break;
            case 'X':
                strText += 'Xray ';
                break;
            case 'Y':
                strText += 'Yanky ';
                break;
            case 'Z':
                strText += 'Zulu ';
                break;
            default:
                break;
        }
    }
    return strText;
}

function phoneticToAlpha(phonetic) {
    //Holds the plain text
    let strText = '';
    let i;
    //Converts string to array then loops through the array
    for (i of phonetic.split(' ')) {

        switch (i) {
            case 'alpha':
                strText += 'a';
                break;
            case 'bravo':
                strText += 'b';
                break;
            case 'charlie':
                strText += 'c';
                break;
            case 'delta':
                strText += 'd';
                break;
            case 'echo':
                strText += 'e';
                break;
            case 'foxtrot':
                strText += 'f';
                break;
            case 'golf':
                strText += 'g';
                break;
            case 'hotel':
                strText += 'h';
                break;
            case 'india':
                strText += 'i';
                break;
            case 'juliet':
                strText += 'j';
                break;
            case 'kilo':
                strText += 'k';
                break;
            case 'lima':
                strText += 'l';
                break;
            case 'mike':
                strText += 'm';
                break;
            case 'november':
                strText += 'n';
                break;
            case 'oscar':
                strText += 'o';
                break;
            case 'papa':
                strText += 'p';
                break;
            case 'qubec':
                strText += 'q';
                break;
            case 'romeo':
                strText += 'r';
                break;
            case 'sierra':
                strText += 's';
                break;
            case 'tango':
                strText += 't';
                break;
            case 'unifom':
                strText += 'u';
                break;
            case 'victor':
                strText += 'v';
                break;
            case 'whiskey':
                strText += 'w';
                break;
            case 'xray':
                strText += 'x';
                break;
            case 'yanky':
                strText += 'y';
                break;
            case 'zulu':
                strText += 'z';
                break;
            case 'zuluechoromeooscar':
                strText += '0';
                break;
            case 'oscarnovemberecho':
                strText += '1';
                break;
            case 'tanowhiskeyoscar':
                strText += '2';
                break;
            case 'tangohotelromeoechoecho':
                strText += '3';
                break;
            case 'foxtrotoscaruniformromeo':
                strText += '4';
                break;
            case 'foxtrotindiavictorecho':
                strText += '5';
                break;
            case 'sieraindiaexray':
                strText += '6';
                break;
            case 'sieraechovictorechonovember':
                strText += '7';
                break;
            case 'echoindiagolfhoteltango':
                strText += '8';
                break;
            case 'novemberinianovemberecho':
                strText += '9';
                break;
            case 'novemberechowhiskeylimaindianovemberecho':
                strText += '\n';
                break;
            case 'tangoalphabravo':
                strText += '\t';
                break;
            case 'sierapapaalphacharlieecho':
                strText += ' ';
                break;
            case 'charlieoscarmikemikealpha':
                strText += '\,';
                break;
            case 'papaechoromeoindiaoscardelta':
                strText += '.';
                break;
            case 'foxtrotoscarromeowhiskeyalpharomeodeltasieralimaalphasierahotel':
                strText += '/';
                break;
            case 'limaechosierasieratangohotelalphanovember':
                strText += '<';
                break;
            case 'golfromeoechoalphatangoerchoromeotangohotelalphanovember':
                strText += '>';
                break;
            case 'qubecuniformechosieratangoindiaoscarnovembermikealpharomeokilo':
                strText += '?';
                break;
            case 'sieraechomikeindiacharlieoscarlimaoscarnovember':
                strText += ';'

                break;
                break;
            case 'charlieoscarlimaoscarnovember':
                strText += ':';
                break;
            case 'sieraindianovebergolflimaechoqubecuniformoscartangoecho':
                strText += '\'';
                break;
            case 'deltaoscaruniformbravolimeechoqubecuniformoscartangoecho':
                strText += '\"';
                break;
            case 'limaechofoxtrottangobravoromeoalphacharliekiloechotango':
                strText += '[';
                break;
            case 'romeoindiagolfhoteltangobravoromeoalphacharliekiloechotango':
                strText += ']';
                break;
            case 'bravoalphacharliekilosieralimaalphasierahotel':
                strText += '\\';
                break;
            case 'limaechofoxtrottangobravoromeoalphacharlieecho':
                strText += '{';
                break;
            case 'romeoindiagolfhoteltangobravoromeoalphacharlieecho':
                strText += '}';
                break;
            case 'papaindiapapaecho':
                strText += '|';
                break;
            case 'mikeindianovemberuniformsiera':
                strText += '-';
                break;
            case 'echoqubecuniformalphalimasiera':
                strText += '=';
                break;
            case 'bravoalphacharliekilotangoindiachaliekilo':
                strText += '`';
                break;
            case 'tangoindialimadeltaalpha':
                strText += '~';
                break;
            case 'echoxraycharlielimaalphamikealphatangoindiaoscarnovemberpapaoscarindianovembertango':
                strText += '!';
                break;
            case 'alphatangosieraindiagolfnovember':
                strText += '@';
                break;
            case 'papaoscaruniformnovemberdeltasieraindiagolfnovember':
                strText += '#';
                break;
            case 'deltaoscarlimalimaalpharomeosieraindiagolfnovember':
                strText += '$';
                break;
            case 'papaechoromeocharlieechonovembertangosieraindiagolfnovember':
                strText += '%';
                break;
            case 'charliealpharomeoechotango':
                strText += '^';
                break;
            case 'alphamikepapaechoromeosieranovemberdelta':
                strText += '&';
                break;
            case 'alphasieratangoechoromeoindiasierakilo':
                strText += '*';
                break;
            case 'limaechofoxtrotpapaalpharomeoechonovember':
                strText += '(';
                break;
            case 'romeoindiagolfhoteltangopapaalpharomeoechonovember':
                strText += ')';
                break;
            case 'uniformnovemberdeltaechoromeosieracharlieoscarromeoecho':
                strText += '_';
                break;
            case 'papalimauniformsiera':
                strText += '+';
                break;
            case 'Alpha':
                strText += 'A';
                break;
            case 'Bravo':
                strText += 'B';
                break;
            case 'Charlie':
                strText += 'C';
                break;
            case 'Delta':
                strText += 'D';
                break;
            case 'Echo':
                strText += 'E';
                break;
            case 'Foxtrot':
                strText += 'F';
                break;
            case 'Golf':
                strText += 'G';
                break;
            case 'Hotel':
                strText += 'H';
                break;
            case 'India':
                strText += 'I';
                break;
            case 'Juliet':
                strText += 'J';
                break;
            case 'Kilo':
                strText += 'K';
                break;
            case 'Lima':
                strText += 'L';
                break;
            case 'Mike':
                strText += 'M';
                break;
            case 'November':
                strText += 'N';
                break;
            case 'Oscar':
                strText += 'O';
                break;
            case 'Papa':
                strText += 'P';
                break;
            case 'Qubec':
                strText += 'Q';
                break;
            case 'Romeo':
                strText += 'R';
                break;
            case 'Sierra':
                strText += 'S';
                break;
            case 'Tango':
                strText += 'T';
                break;
            case 'Unifom':
                strText += 'U';
                break;
            case 'Victor':
                strText += 'V';
                break;
            case 'Whiskey':
                strText += 'W';
                break;
            case 'Xray':
                strText += 'X';
                break;
            case 'Yanky':
                strText += 'Y';
                break;
            case 'Zulu':
                strText += 'Z';
                break;
            default:
                break;
        }
    }
    return strText;
}

function copyToClipboard(toCopy) {
    //Create a dummy element
    const el = document.createElement('textarea');
    //Set the value of the dummy element
    el.value = toCopy;
    document.body.appendChild(el);
    //Selects the contents of the dummy element
    el.select();
    //Copy selection to the clipboard
    document.execCommand('copy');
    //Removes dummy element
    document.body.removeChild(el);

    return toCopy;
}


function about() {
    var msg = "Fzuck version 0.1! \nScripts by Duke (c) 2019";
    msg += "\nBy pass being zucked by phonetically spelling everything.\n";
    msg += "Image credit: By Anthony Quintano from Honolulu, HI, United States\n";
    msg += " - Mark Zuckerberg F8 2018 Keynote, CC BY 2.0,\n";
    msg += "https://commons.wikimedia.org/w/index.php?curid=79154080";
    alert(msg);
}

function fuckZuck() {
    var copyText = document.getElementById("textInput");

    var result = alphaToPhonetic(copyText.value);

    copyText.value = copyToClipboard(result);
}

function instructions() {
    var instruction = "How to use:\n";
    instruction += "Copy and Paste URL or other text in the text box.\n";
    instruction += "Then click F#@! Zuck. Every character will then be spelled \n";
    instruction += "phonetically including punctuation, new lines, spaces, etc.\n";
    instruction += "This will automatically be placed into your computer's clipboard.\n";
    instruction += "From there you can paste the entire text in a FB post or comment.\n";
    instruction += "\n To return the ciphered text to normal text copy and past the \n";
    instruction += "ciphered text in the text box and click un-F@#! Zuck. Enjoy!\n";
    instruction += "\n Disclaimer: Not responsible for damages or misuse of this tool\n";
    instruction += "Use at your own risk. This product does not contain any malicious code.\n";
    instruction += "However, the cipher implemented is not secure and can easily be cracked.\n";
    instruction += "While it can be used to get around FB censorship use of this tool may \n";
    instruction += "get you banned by FB especially if you use it for abusive purposes.\n";
    instruction += "\n If this cipher has been Zucked please report it immediately! "
    instruction += "Please report any bugs or send feature requests to scriptsbyduke@gmail.com";
    alert(instruction);
}

function unFuckZuck() {
    var copyText = document.getElementById("textInput");

    var result = phoneticToAlpha(copyText.value);

    copyText.value = copyToClipboard(result);
}