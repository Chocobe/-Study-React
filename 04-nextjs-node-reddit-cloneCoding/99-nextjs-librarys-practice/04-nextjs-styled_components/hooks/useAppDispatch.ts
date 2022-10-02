import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

const useAppDisptch: () => AppDispatch = useDispatch;
export default useAppDisptch;