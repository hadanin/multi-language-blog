import { createContext } from "react";
import { Spanish } from "../components/Language";

let defaultValue = Spanish;
let LanguageContext = createContext(defaultValue);
export default LanguageContext;
