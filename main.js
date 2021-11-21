import { readdir } from 'fs/promises'
import { watch } from 'fs';

// definition variables
const downloadDic = 'C:/Users/DAVID/Downloads'

const patternJSON = /.json/

const returnedExtension = '.txt'

// definition function
const isJSON = (fileName)=>{
	return patternJSON.test(fileName)
}

const getJSONArray = (files)=>{
	return files.filter(fileName=>isJSON(fileName))
}

const getFilesJSON = async()=>{
	const files = await readdir('C:/Users/DAVID/Downloads')
	return getJSONArray(files)
}

const existFile = (filesJSON, fileName)=>{
	const filtered = filesJSON.filter(e=>e===fileName)
	return filtered.length === 1
}

// main code
const filesJSON = await getFilesJSON()

console.log(filesJSON)

watch(downloadDic, (eventType, fileName) => {
	const fileNameIsJSON = isJSON(fileName)
	if(fileNameIsJSON){	
		const exist = existFile(filesJSON, fileName)
		//console.log(exist)
		if(!exist) {
			filesJSON.push(fileName)
			//create and open file with just emails
			//console.log('exist')
		}
	}
});

//exist should be existOne




// CREATING TXT
const creatingTxt = (fileName)=>{
	return fileName.replace(patternJSON, returnedExtension)
}