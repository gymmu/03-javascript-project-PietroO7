
export function aufgabe01 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
 if (currentElement === "e") {
  result.push("")
 } else if (currentElement === "E") {
  result.push("")
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
  
      // Check if the current character is a space
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


export function aufgabe07 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}


export function aufgabe08 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
 if (currentElement === "e") {
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

  if (input.length > 1){
    return null
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    ascii = currentElement.charCodeAt(0)
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
