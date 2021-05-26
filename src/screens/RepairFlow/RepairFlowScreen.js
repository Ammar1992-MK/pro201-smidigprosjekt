import React, { useState } from "react";
import CreateNewRepair from "./CreateNewRepair";
import SetRepairAction from "./SetRepairAction";
import CompleteRepair from "./CompleteRepair";
/*
Steg:
    1. Inndata fra bruker -> Kunde, telefonnr, lampe (serienr eller klikke på bilde)
    2.


States:
    - Hvor i prossesenn man er
        - Dette burde være bestemt av knappetrykk, men også om neste state har tilgjelige data så det skal funke
            eg: hvis ikke det er satt noe kundeinfo burde man ikke kunne komme seg videre, uansett om knappen funker


Persistent data:
Lamps: [{ Alle de forskjellige lampene de kan reparere
    name: String - Hva lampen heter
    img: String path - Bildet som skal vises
}]
Components: [{ alle forskjellige komponentene som kan reparere en lampe (usortert)
    name: String - hva komponenten heter
    img: String Path - bildet som skal vises
}]

serial_no: String - kan være blank eller typ 'xxx - xxx - xxx'

selected_lamp: en lamp fra array

customer: {
    name: String,
    phone: String,
}

chosen_action: liste med komponenter eller string 'DISCARD'.
*/

const RepairFlowScreen = ({ selected_lamp, cust }) => {
  const [step, setStep] = useState();
  const [selected_lamp, setSelected_lamp] = useState(selected_lamp);
  const [customer, setCustomer] = useState(cust);
  const [chosen_action, setChosen_action] = useState();

  //TODO Hente ut lampe og komponent data fra localstorage

  if (step === "create") {
    return (
      <CreateNewRepair
        setCustomer={setCustomer}
        setSelectedLamp={setSelected_lamp}
      />
    );
  } else if (step === "set_action" && selected_lamp !== null) {
    return (
      <SetRepairAction
        customer={customer}
        selected_lamp={selected_lamp}
        setChosenAction={setChosen_action}
      />
    );
  } else if (step === "complete_repair" && chosen_action !== null) {
    return (
      <CompleteRepair
        customer={customer}
        selected_lamp={selected_lamp}
        chosen_action={chosen_action}
      />
    );
  }
};
