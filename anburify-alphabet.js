function convert() {
  var latinText = document.getElementById("latin-text").value;
  var language = document.querySelector('input[name="language"]:checked').value;
  var cyrillicText = "";
  
  for (var i = 0; i < latinText.length; i++) {
    switch (latinText[i].toLowerCase()) {
      case ' ':
        cyrillicText += ' ';
        break;
      case 'a':
        cyrillicText += '๐';
        break;
      case 'b':
        cyrillicText += '๐';
        break;
      case 'g':
        cyrillicText += '๐';
        break;
      case 'q':
        cyrillicText += '๐';
        break;
      case 'd':
        cyrillicText += '๐';
        break;
      case 'e':
        cyrillicText += '๐';
        break;
      case 'ลพ':
        cyrillicText += '๐';
        break;
      case 'z':
        cyrillicText += '๐';
        break;
      case 'i':
        cyrillicText += '๐';
        break;
      case 'j':
        cyrillicText += '๐ต';
        break;
      case 'k':
        cyrillicText += '๐';
        break;
      case 'l':
        cyrillicText += '๐';
        break;
      case 'm':
        cyrillicText += '๐';
        break;
      case 'n':
        cyrillicText += '๐';
        break;
      case 'p':
        cyrillicText += '๐';
        break;
      case 'r':
        cyrillicText += '๐ ';
        break;
      case 's':
        cyrillicText += '๐ก';
        break;
      case 't':
        cyrillicText += '๐ข';
        break;
      case 'u':
        cyrillicText += '๐ฃ';
        break;
      case 'w':
        if (language == "estonian") {
          cyrillicText += '๐ฎ';
        }
        else if (language == "finnish") {
          cyrillicText += '๐ฎ';
        }
        else if (language == "english") {
          cyrillicText += '๐ฃ';
        }
        break;
      case 'c':
        cyrillicText += '๐ค';
        break;
      case 'ลก':
        cyrillicText += '๐ฅ';
        break;
      case 'รถ':
        cyrillicText += '๐ช';
        break;
      case 'o':
        cyrillicText += '๐ฉ';
        break;
      case 'f':
        cyrillicText += '๐ซ';
        break;
      case 'h':
        cyrillicText += '๐ฌ';
        break;
      case 'v':
        cyrillicText += '๐ฎ';
        break;
      case 'รต':
        cyrillicText += '๐ฏ';
        break;
      case 'รผ':
        cyrillicText += '๐ณ';
        break;
      case 'y':
        cyrillicText += '๐ด';
        break;
      case 'รค':
        cyrillicText += '๐ฑ';
        break;
      case 'x':
        cyrillicText += '๐๐ก';
        break;

      // add more cases for other latin letters here
    }
  }
  
  document.getElementById("cyrillic-text").innerHTML = cyrillicText;
}