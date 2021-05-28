import {AsyncStorage} from "react-native";
/*
*
* Repair: [{customerName, phoneNumber, lamp, serialNumber, solution: [] || "DISCARD"}, {}]
*
* */

export const addNewRepair = async (valueObject) => {
    try {

        let savedRepairs = await AsyncStorage.getItem('repair');
        if(!savedRepairs) {
            savedRepairs = [];
        } else {
            savedRepairs = JSON.parse(savedRepairs)
        }

        //TODO REMEMBER TO ADD LAMP
        const {customerName, phoneNumber, lamp, serialNumber} = valueObject; //destructure the values from the form
        if(!customerName || !phoneNumber){
            throw new Error("Missing vital information");
        }
        let local_id = savedRepairs.length
        while(savedRepairs.map(e => e.local_id).includes(local_id)){
            local_id ++;
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
    } catch(e) {
        // error reading value
        console.log(e.toString())
    }
}