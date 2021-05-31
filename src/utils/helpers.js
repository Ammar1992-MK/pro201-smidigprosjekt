import {AsyncStorage} from "react-native";
/*
*
* Repair: [{customerName, phoneNumber, lamp, serialNumber, chosenPart: [] || "DISCARD"}, {}]
*
* */

export const addNewRepair = async (valueObject) => {
    try {

        let savedRepairs = await AsyncStorage.getItem('repair');
        if (!savedRepairs) {
            savedRepairs = [];
        } else {
            savedRepairs = JSON.parse(savedRepairs)
        }

        //TODO REMEMBER TO ADD LAMP
        const {customerName, phoneNumber, lamp, serialNumber, status} = valueObject; //destructure the values from the form
        if (!status) {
            //Status is not set in object, set it as 'NEW'
            valueObject.status = "NEW"
        }
        if (!customerName || !phoneNumber) {
            throw new Error("Missing vital information");
        }
        let local_id = savedRepairs.length
        while (savedRepairs.map(e => e.local_id).includes(local_id)) {
            local_id++;
        }
        savedRepairs.push({...valueObject, local_id: local_id});

        const jsonValue = JSON.stringify(savedRepairs)
        await AsyncStorage.setItem('repair', jsonValue)
    } catch (e) {
        // saving error
        console.log(e.toString());
    }
}


export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('repair')
        return jsonValue ? JSON.parse(jsonValue) : []
    } catch (e) {W
        // error reading value
        console.log(e.toString())
    }
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
