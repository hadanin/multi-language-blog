import { createContext } from "react";
import { persian } from "../components/Language";

let defaultValue = persian;
let LanguageContext = createContext(defaultValue);
export default LanguageContext;
