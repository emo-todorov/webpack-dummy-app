import { addNaturePic } from "./add-image";
import Button from "./components/button/Button";
import { printGreeting } from "./hallo-world";

printGreeting();

document.body.appendChild(addNaturePic());

document.body.appendChild(Button());