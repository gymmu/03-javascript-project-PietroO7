  
 export function aufgabe01 (args) {
  const input = args
  const result = []
// Der Code durchläuft jedes Element
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
    count = count + 1}
// Soll grosses 'E' zählen
 else if (currentElement === 'E')
  {count = count + 1 }
  }
 return count
  }



 export function aufgabe04(args) {
   const input = args;
   let count = 0;
  
 for (let i = 0; i < input.length; i++) {
   const currentElement = input[i];
// überprüfe ob das aktuelle Elemnt ein leerzeichen ist
 if (currentElement === ' ') 
   {count = count + 1; }
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
 if((asciiCode >= 65 && asciiCode <= 90 )) 
 {
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
 if((asciiCode <= 31 || asciiCode >= 33 && asciiCode <= 64
  || asciiCode >= 91 && asciiCode <= 96 || asciiCode >= 123 )) 
  {
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
 if (input[i+2]=== "d") 
  {
 return true
  }
//sollte ein "Und" erkennen
 if (currentElement==="U")
 if (input[i+1]=== "n")
 if (input[i+2]=== "d") 
  {
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
 else { result.push(currentElement) }
}
 return result.join("")
}



 export function aufgabe09 (args) {
  const input = args
  let len = 0
 for (let i = 0; i < input.length; i++) 
 { len++ }
//prüfe ob das aktuelle Elemnt 6 zeichen lang ist
 if (len === 6) 
 { return true } 
 else {
 return false
 }
 }



 export function aufgabe10(args) {
  const input = args
//überprüfe ob die Eingabe nicht genau 7 Zeichen lang ist, Ja=False
 if (input.length !== 7) return false
 //überprüfe ob das erste Zeichen kein # ist Ja=False
 if (input[0] !== "#") return false

 for (let i = 1; i < input.length; i++) {
  const currentElement = input[i]
// Die ASCII-Wert des aktuellen Elements wird ermittelt
  const ascii = currentElement.charCodeAt(0)
//mach nichts es ist eine Zahl
 if (48 <= ascii && ascii <= 57) {
//mach nichts ist A-F
  } else if (65 <= ascii && ascii <= 70) {
  } else {
    return false
  }
  }
  return true
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
  const input = args
  const result = []

 for (let i = 0; i < input.length; i++) {
 const currentElement = input[i]
//schaue ob das aktuelle Element ein "e" ist
 if (currentElement === "e") {
 return i
 }
 }
 return -1
 }




 export function aufgabe13(args) {
  const input = args
  let positionOfLastE = -1;
// Durchlaufe jeden Buchstaben im Text.
 for (let i = 0; i < input.length; i++) {
// Aktuelles Zeichen im Text.
  const currentElement = input[i]
// Überprüfe, ob das aktuelle Zeichen ein "e" ist.
 if (currentElement === "e") {
// ändere die Position des letzten "e" auf die aktuelle Position.
    positionOfLastE = i
 }
 }
// Gib die Position des letzten "e" zurück
 return positionOfLastE
 }



export function aufgabe14(args) {
 const input = args
 let count = 0

for (let i = 0; i < input.length; i++) {
 const currentElement = input[i]
if (currentElement === "e") {
// Erhöhe den Zähler für "e".
   count = count + 1
// Überprüfe, ob es das dritte "e" ist.
if (count === 3) {
// Gib die Position des dritten "e" zurück.
return i
 }
 }
 }
// Falls es kein drittes "e" gibt, gib -1 zurück.
return -1
 }



 export function aufgabe15(args) {
  const input = args
  const result = []

 for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]

// Schleife soll anhalten sobald wenn ein Leerzeichen auftritt
 if (currentElement === ' ') {
 break
 }
result.push(currentElement)
 }
 return result.join('')
 }

 

//Diesen Code habe ich versucht mit Chatgpt zu machen, hat nicht geklapt :( .
 export function aufgabe16(args) {
  const input = args
  const result = input.split('$')
  for (let i = 0; i < input.length; i++) {
    result.push(input[i])
    if (input[i] === "$") {
      if (input.length - 1 === i) {
        return [result.join]
      } else {
        return [result.join]
      }
    }
  }
  return [result.join(""), false]
}



export function aufgabe17(args) {
  const input = args
  const result = input.split(',')
 
  // Bubble Sort zum Sortieren der Elemente der Liste
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        // Tauscht die Elemente aus, wenn sie in der falschen Reihenfolge sind
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
      }
    }
  }
  return result.join(',')
}



export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
    
// Füge jedes Zeichen zweimal hinzu
  result.push(currentElement, currentElement)
}
 return result.join('')
}


//Ist fast wie Aufgabe 7
export function aufgabe20 (args) {
  const input = args
  const result = []


  for(let i =0; i < input.length; i++) {
    const currentElement = input[i] 

    if (currentElement === ".") {
      if (input[i+1] === " ")  {
        return true
      }

    }
  
}
  return false
}



export function aufgabe24(args) {
  const input = args
  const result = []

// Überprüfe, ob die Eingabe mindestens ein Zeichen hat
  if (input.length > 0) {    
// Vertausche das erste und das letzte Zeichen
  const firstElement = input[0]
  const lastElement = input[input.length - 1]

 result.push(lastElement)

// Füge die restlichen Zeichen (ohne das letzte) hinzu
for (let i = 1; i < input.length - 1; i++) {
    result.push(input[i])
  }
    result.push(firstElement)
  }
return result.join('')
}



 export function aufgabe27(args) {
  const input = args
  const result = []

 if (input.length === 0) return false

 for (let i = 0; i < input.length; i++) {
   const currentElement = input[i]

// Überprüfe, ob das ASCII-Zeichen eine Zahl ist (zwischen 48 und 57)
    const asciiCode = currentElement.charCodeAt(0);
 if (asciiCode < 48 || asciiCode > 57) {
 return false
  }
  }
 return true
  }



  export function bubbleSort(inputText) {
    const text = inputText;
    const zeichenListe = text.split(""); // Teile den Text auf, um die Elemente effektiv zu tauschen
    
    for (let i = 0; i < zeichenListe.length - 1; i++) { // Durchlaufe den Eingabetext
      const aktuellesZeichen = zeichenListe[i]; // Aktuelles Zeichen im Eingabetext
      const naechstesZeichen = zeichenListe[i + 1]; // Nächstes Zeichen im Eingabetext
      if (aktuellesZeichen.charCodeAt(0) > naechstesZeichen.charCodeAt(0)) {
        // Da die Reihenfolge nicht korrekt ist, müssen die Elemente getauscht werden
        const tmp = zeichenListe[i + 1];
        zeichenListe[i + 1] = zeichenListe[i]; // Tausche die Elemente im Eingabetext
        zeichenListe[i] = tmp;
        i = -1; // Beginne von vorne
      }
    }
    const sortiertesErgebnis = zeichenListe.join(""); // Füge den sortierten Eingabetext wieder zusammen
    console.log(sortiertesErgebnis);
   
    return sortiertesErgebnis; // Gib den sortierten Text zurück
}
