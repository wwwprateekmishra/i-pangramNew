import { useContext } from "react";
import storeContext from "../context/UserContext";

const useStore = ()=> useContext(storeContext);
export default useStore;