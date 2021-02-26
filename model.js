const fs = require('fs');

class Model {

  readFile(fileName, getQuastionsCallBack) {

    fs.readFile(`./${fileName}`, 'utf8', (errFromFile, fileData) => {
      try {
        if (errFromFile) {
          throw Error(`Sry, it ${errFromFile}`)
        } else {
          let arrayOfObjectsQaA = this.makeObj(fileData);
          getQuastionsCallBack(arrayOfObjectsQaA);
        }
      } catch (e) {
        console.log(e);
      }

    })

    return `Let's play ${fileName.replace(/\.\w+/g, '')}\n`
  }

  makeObj(fileData) {
    let dataObject = {};
    fileData = fileData.split(/\n/);
    for (let i = 2; i < fileData.length; i += 2) {
      fileData.splice(i, 1)
    }
    for (let n = 0; n < fileData.length; n += 2) {
      dataObject[fileData[n]] = fileData[n + 1]
    }
    let arrOfStringsQaA = Object.entries(dataObject);
    let arrOfObjectsQaA = arrOfStringsQaA.map((el) => {
      let newObjectQaA = { [el[0]]: el[1] }
      return newObjectQaA
    })
    return arrOfObjectsQaA

  }
}

module.exports = Model;
