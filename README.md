### Mounting project on emulator

 * Om du ikke allerede har Node.js kan du laste ned det [her](https://nodejs.org/en/download/)

 * Start android emulator(om du ikke har emulator, følg stegene i 'Setting up android emulator')

 * Naviger til prosjektmappen i din IDE og skriv inn:    `npm install -g expo-cli`
 * Etter du har installert expo-cli, kjør følgende kommando:    `npm install ` for å laste ned nødvendige dependencies.

      ![image](https://user-images.githubusercontent.com/56083146/121357529-2b7b9800-c932-11eb-897b-d127316b67cd.png)

* Når instllasjonen er ferdig, vil følgende kommandoer starte appen :
  1. `expo start --android` vil starte android emulator.
    2. `expo start --ios` vil starte IOS simulator.


Eventuelt: `expo start --web` vil kjøre appen og vise developer tools i nettleseren. i developer tools, kan du klikke på `run on IOS` eller _`run on ANDROID`_ for å starte appen. For å starte appen på en fysisk mobil, last ned appen Expo og scann QR-kode som vises på venstre siden av skjermen i developer tools.

### Setting up android emulator

   Vi brukte bare Android emulator på Windows under hele prosjektet. Men vi har funnet en link til en guide for MAC hvis det er nødvendig.
       [Link](https://rlogicaltech.medium.com/how-to-install-react-native-on-mac-step-by-step-guide-1ac822aedd4f)



* Last ned android studio [her](https://developer.android.com/)

* Start android studio, klikk *Configure* og velg *AVD Manager*

![android stuido](https://user-images.githubusercontent.com/56083146/121360766-00467800-c935-11eb-811d-137b98068e3d.png)

* Klikk *+ Create Virtual Device* og velg *Nexus 9*

![nexus9](https://user-images.githubusercontent.com/56083146/121362563-77c8d700-c936-11eb-9a65-02badb6a5ea8.png)

* Velg *Q* som system image

![Q](https://user-images.githubusercontent.com/56083146/121362907-c37b8080-c936-11eb-8e8e-7d4b5168a5e2.png)

* Velg landscape som orientering og trykk finish

![landscape](https://user-images.githubusercontent.com/56083146/121363300-1fdea000-c937-11eb-9bea-7dd765912bce.png)

* Start så opp emulatoren med den grønne play knappen

![emulator](https://user-images.githubusercontent.com/56083146/121364462-19045d00-c938-11eb-9c30-51539cbec78e.png)






 
