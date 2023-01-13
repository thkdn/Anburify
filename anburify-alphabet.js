function convert() {
  var latinText = document.getElementById("latin-text").value;
  var cyrillicText = "";
  
  for (var i = 0; i < latinText.length; i++) {
    switch (latinText[i].toLowerCase()) {
      case ' ':
        cyrillicText += ' ';
        break;
      case 'a':
        cyrillicText += '𐍐';
        break;
      case 'b':
        cyrillicText += '𐍑';
        break;
      case 'g':
        cyrillicText += '𐍒';
        break;
      case 'q':
        cyrillicText += '𐍒';
        break;
      case 'd':
        cyrillicText += '𐍓';
        break;
      case 'e':
        cyrillicText += '𐍔';
        break;
      case 'ž':
        cyrillicText += '𐍕';
        break;
      case 'z':
        cyrillicText += '𐍗';
        break;
      case 'i':
        cyrillicText += '𐍙';
        break;
      case 'j':
        cyrillicText += '𐍵';
        break;
      case 'k':
        cyrillicText += '𐍚';
        break;
      case 'l':
        cyrillicText += '𐍛';
        break;
      case 'm':
        cyrillicText += '𐍜';
        break;
      case 'n':
        cyrillicText += '𐍝';
        break;
      case 'p':
        cyrillicText += '𐍟';
        break;
      case 'r':
        cyrillicText += '𐍠';
        break;
      case 's':
        cyrillicText += '𐍡';
        break;
      case 't':
        cyrillicText += '𐍢';
        break;
      case 'u':
        cyrillicText += '𐍣';
        break;
      case 'w':
        cyrillicText += '𐍣';
        break;
      case 'c':
        cyrillicText += '𐍤';
        break;
      case 'š':
        cyrillicText += '𐍥';
        break;
      case 'ö':
        cyrillicText += '𐍪';
        break;
      case 'o':
        cyrillicText += '𐍩';
        break;
      case 'f':
        cyrillicText += '𐍫';
        break;
      case 'h':
        cyrillicText += '𐍬';
        break;
      case 'v':
        cyrillicText += '𐍮';
        break;
      case 'õ':
        cyrillicText += '𐍯';
        break;
      case 'ü':
        cyrillicText += '𐍳';
        break;
      case 'y':
        cyrillicText += '𐍴';
        break;
      case 'ä':
        cyrillicText += '𐍱';
        break;
      case 'x':
        cyrillicText += '𐍚𐍡';
        break;

      // add more cases for other latin letters here
    }
  }
  
  document.getElementById("cyrillic-text").innerHTML = cyrillicText;
}