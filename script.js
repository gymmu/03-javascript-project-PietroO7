
export function aufgabe01 (args) {
  const input = args
  const result = []

 for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
    //Wenn das aktuelle Zeichen "e" ist, hängt an die Liste an
 if (currentElement === "e") {
  result.push("")
  //Wenn das aktuelle Zeichen ein "E" ist, hänge nichts an die Liste an
 } else if (currentElement === "E") {
  result.push("")
  //Das aktuelle Zeichen ist weder ein "e" noch ein "E", hängt also das aktuelle Zeichen an
 } else {
  result.push(currentElement)
 }
}
  return result.join("")
}

 
 export function aufgabe02(args) {
    const input = args
    const result = []
   for (let i = 0; i < input.length; i++) {
     const currentElement = input[i]
 
 
     // Wandle das aktuelle Element in einen Grossbuchstaben um
        const capitalizedElement = currentElement.toUpperCase()
     
    //Hänge den Grossbuchstaben an das Resultat an...
        result.push(capitalizedElement)
     
  }
  return result.join("")
  }
  

  export function aufgabe03(args) {
    const input = args
    const result = []
    let count = 0
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  //Soll nur ein 'e' enthalten
  if (currentElement === 'e'){
    count = count + 1
  }
  // Soll grosses 'E' zählen
  else if (currentElement === 'E'){
    count = count + 1
  }
    }
    return count
  }


  export function aufgabe04(args) {
    const input = args;
    let count = 0;
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i];
      // überprüfe ob das aktuelle Elemnt ein leerzeichen ist
      if (currentElement === ' ') {
        count = count + 1;
      }
    }
  
    return count;
  }


  export function aufgabe05(args) {
    const input = args
      const result = []
    let capitalLetters = 0
    
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     //Sollte einen Grossbuchstaben erkennen
    const asciiCode = currentElement.charCodeAt(0);
    if(
      (asciiCode >= 65 && asciiCode <= 90 )
    ) {
      return true
    }
  }
  return false
}


export function aufgabe06 (args) {
    const input = args
      const result = []
    let capitalLetters = 0
     
     
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     //sollte ein SOnderzeichen erkennen mithilfe vom AsciiCode
    const asciiCode = currentElement.charCodeAt(0);
    if(
(asciiCode <= 31 || asciiCode >= 33 && asciiCode <= 64
  || asciiCode >= 91 && asciiCode <= 96 || asciiCode >= 123 )
    ) {
      return true
    } 
  }
  return false
}


export function aufgabe07(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //sollte ein "und" erkennen
    if (currentElement==="u")
      if (input[i+1]=== "n")
      if (input[i+2]=== "d") {
        return true
    }
     //sollte ein "Und" erkennen
    if (currentElement==="U")
      if (input[i+1]=== "n")
      if (input[i+2]=== "d") {
        return true
    }
  }
  return false
 
  }


export function aufgabe08 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
    //prüfe ob das aktuelle Element ein "e" ist
 if (currentElement === "e") {
  //wenn es eins dann ersetzte es mit einer "3"
  result.push("3")
 }
else {
  result.push(currentElement)
 }
}
  return result.join("")
}

export function aufgabe09 (args) {
  const input = args
  let len = 0
  for (let i = 0; i < input.length; i++) {
    len++
  }
//prüfe ob das aktuelle Elemnt 6 zeichen lang ist
  if (len === 6) {
    return true
  } else {
    return false
  }
}


export function aufgabe10(args) {
  const input = args;

  if (input.length !== 7) return false;
  if (input[0] !== "#") return false;

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i];
    const ascii = currentElement.charCodeAt(0);

    if (48 <= ascii && ascii <= 57) {
    
    } else if (65 <= ascii && ascii <= 70) {
      
    } else {
    
      return false;
    }
  }
  return true;
}


  export function aufgabe11 (args) {
  const input = args
  const result = []
  let ascii = -1
//wenn das aktuelle Elemnt kleiner als 1 ist antworte null
  if (input.length > 1){
    return null
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //finde den ascii code der aktuellen Elemntes
    ascii = currentElement.charCodeAt(0)
    //gib den herausgefundenen Ascii zurück
    return ascii
  }
  return null
}


export function aufgabe12(args) {
  const input = args;
  const result = []
  let pos = -1;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    pos = pos + 2;

    if (currentElement === "e") {
      return i
    }
  }
  return -1;
}


export function aufgabe13(args) {
  const input = args;
  let positionOfLastE = -1;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];

    if (currentElement === "e") {
      positionOfLastE = i;
    }
  }

  return positionOfLastE;
}


export function aufgabe14(args) {
  const input = args;
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];

    if (currentElement === "e") {
      count = count + 1;

      if (count === 3) {
        return i;
      }
    }
  }
  return -1;
}


export function aufgabe15(args) {
  const input = args;
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];

    // Schleife soll anhalten sobald wenn ein Leerzeichen auftritt
    if (currentChar === ' ') {
      break;
    }

    result.push(currentChar);
  }
  return result.join('');
}


export function aufgabe16 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}


export function aufgabe17(args) {
  const input = args;
  const result = input.split(',')
 
  
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
      }
    }
  }
 
  return result.join(',')
}


export function aufgabe18 (args) {
  const input = args
  const result = []

  return result.join("")
}


export function aufgabe19(args) {
  const input = args;
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    
    // Füge jedes Zeichen zweimal hinzu
    result.push(currentChar, currentChar);
  }

  return result.join('');
}


export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}


export function aufgabe21 (args) {
  const input = args
  const result = []
  
  return result.join("")
}
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
}


export function aufgabe22 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}


export function aufgabe23 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}


export function aufgabe24(args) {
  const input = args;
  const result = [];

  // Überprüfe, ob die Eingabe mindestens ein Zeichen hat
  if (input.length > 0) {
    // Vertausche das erste und das letzte Zeichen
    const firstChar = input[0];
    const lastChar = input[input.length - 1];

    result.push(lastChar);

    // Füge die restlichen Zeichen (ohne das letzte) hinzu
    for (let i = 1; i < input.length - 1; i++) {
      result.push(input[i]);
    }

    result.push(firstChar);
  }

  return result.join('');
}


export function aufgabe25 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}


export function aufgabe26 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}

export function aufgabe27(args) {
  const input = args;
  const result = [];

  if (input.length === 0) return false;

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];

    // Überprüfe, ob das ASCII-Zeichen eine Zahl ist (zwischen 48 und 57)
    const asciiCode = currentChar.charCodeAt(0);
    if (asciiCode < 48 || asciiCode > 57) {
      return false
    }
  }

  return true
}


export function aufgabe28 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}