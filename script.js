
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



  export function aufgabe04 (args) {
    const input = args
    const result = []
    let count = 0

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
    
    //Sollen alle Leerzeichen zählen
    if (currentElement === ' '){
    count = count + 1
    }
    

  }
    return count
  }
  export function aufgabe05(args) {
    const input = args
      const result = []
    let capitalLetters = 0
     
     
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     
    //prüft ob es einen Grossbuchstaben gibt
    if (currentElement=== ".") {}
    else if (currentElement===" "){}
     
    //wenn ein Element gleich ist, dann rechnet es plus 1.
    else if (currentElement === currentElement.toUpperCase())
    {capitalLetters++}
    }
     
    if (capitalLetters > 0) {
      return true
    } else {
       return false
    }
     
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

export function aufgabe12 (args) {
  const input = args
  const result = []

 let pos = -1
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    pos = pos + 1
    if (currentElement === "e") {
      return i
    }
  }

  return -1
}


export function aufgabe13 (args) {
  const input = args
  const result = []

let positionOfLastE = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "e") {
      positionOfLastE = i
    }
  }

  return -1
}
