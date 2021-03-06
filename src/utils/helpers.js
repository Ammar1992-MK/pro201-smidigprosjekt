import {AsyncStorage} from "react-native";
import db from "../firebase/firebaseDb";
/*
*
* Repair: [{customerName, phoneNumber, lamp, serialNumber, chosenPart: [] || "DISCARD"}, {}]
*
* */

export const addNewRepair = async (valueObject) => {
    try {
        console.log(valueObject)
        // Deletes the element if it already exists
        await deleteRepair(valueObject)
        let savedRepairs = await AsyncStorage.getItem('repair');
        if (!savedRepairs) {
            savedRepairs = [];
        } else {
            savedRepairs = JSON.parse(savedRepairs)
        }

        const {status} = valueObject; //destructure the values from the form
        if (!status) {
            //Status is not set in object, set it as 'NEW'
            valueObject.status = "NEW"
        }
        let key = savedRepairs.length
        while (savedRepairs.map(e => parseInt(e.key)).includes(key)) {
            key++;
        }
        savedRepairs.push({...valueObject, key: key.toString(), date: new Date().toLocaleDateString()});

        const jsonValue = JSON.stringify(savedRepairs)
        await AsyncStorage.setItem('repair', jsonValue)
    } catch (e) {
        // saving error
        console.log(e.toString());
    }
}

export const deleteRepair = async (valueObj) => {
    let current_repairs = await AsyncStorage.getItem('repair');
    if(!current_repairs){
        current_repairs = [];
    } else {
    current_repairs = JSON.parse(current_repairs);
    }
    const {customerName, phoneNumber, serialNumber} = valueObj;
    current_repairs.forEach(el => {
        if(customerName === el.customerName && phoneNumber === el.phoneNumber && serialNumber === el.serialNumber){
            current_repairs.splice(current_repairs.indexOf(el), 1)
        }
    })
    await AsyncStorage.setItem('repair', JSON.stringify(current_repairs))
}

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('repair')
        return jsonValue ? JSON.parse(jsonValue) : []
    } catch (e) {
        // error reading value
        console.log(e.toString())
    }
}

export const emptyDb = async () => {
    //Removes repairs that are marked DONE
    const repairsNow = await getData();
    const only_done = repairsNow.filter((el)=>{return el.status !== "DONE"})
    await AsyncStorage.setItem('repair', JSON.stringify(only_done))
}

export const changeRepair = async (valueObject, localId) => {
    //Changes only the property provided in the valueobject on the local repair with ID 'localId'
    let current_data = getData();
    for (let el of current_data) {
        if (el.local_id === localId) {
            for (let newProperty in valueObject) {
                if (valueObject.hasOwnProperty(newProperty)) {
                    el[newProperty] = valueObject[newProperty]
                }
            }
            const dataJson = JSON.stringify(current_data)
            await AsyncStorage.setItem('repair', dataJson)
            return true;
        }
    }
    return false;
}

export const uploadRepairs = async () => {
    //Uploads the local repairs to the DB, then deletes.
    const ref = db.firestore()
    let batch = ref.batch()
    const local_repairs = await getData();
    local_repairs.forEach((el) => {
        if(el.status === "DONE"){
            const id = ref.collection('repairs').doc()
            batch.set(id, el);
        }
    })
    await batch.commit();
    await emptyDb()
}
