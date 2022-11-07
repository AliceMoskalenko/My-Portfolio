export  const payloadDataToStorage = (storageName,value) =>{
    let storageArr = JSON.parse(localStorage.getItem(storageName) || "[]");
    storageArr.push(value)
    localStorage.setItem(storageName, JSON.stringify(storageArr));
}

export const clearStorage = (storageName) => {
    let storageArr = JSON.parse(localStorage.getItem(storageName) || "[]");
    storageArr = []
    localStorage.setItem(storageName, JSON.stringify(storageArr));

}

export const deletPayloadedElementsFromStorage = (storageName, value) => {
   let storageArr = JSON.parse(localStorage.getItem(storageName) || "[]");
   let indexOfElement = storageArr.indexOf(value)

    if (storageArr.includes(value) && indexOfElement > -1 ){
        storageArr.splice(indexOfElement, 1)
        localStorage.setItem(storageName, JSON.stringify(storageArr));
    }
}

