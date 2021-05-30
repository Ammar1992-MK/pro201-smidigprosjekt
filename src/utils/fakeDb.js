

const get_absolute_path = (path) => {

}

export const spareParts = [
    {
        id: 1,
        image: require('../../assets/product-images/battery.png'),
    },
    {
        id: 2,
        image: require('../../assets/product-images/circuit_card.png')
    },
    {
        id: 3,
        image: require('../../assets/product-images/cogs.png')
    },
    {
        id: 4,
        image: require('../../assets/product-images/light_bulb.png')
    }
]


export const lamps = [
    {
        name: "Smart Plus",
        image: require("../../assets/product-images/smart-plus-1.png")
    },
    {
        name: "Sunbell Smart",
        image: require("../../assets/product-images/sunbell-smart-1.png")
    },
    {
        name: "Sun Turtle",
        image: require("../../assets/product-images/sunturtle.png")
    }
]

export const get_spare_part_by_id = (id) => {
    for(let el of spareParts){
        if(el.id === id){
            return el
        }
    }
}