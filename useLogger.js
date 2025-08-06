import { useEffect } from "react";
import { logAction } from "../utils/logger";

export const useLogger = (message) => {
  useEffect(() => {
    logAction(message);
    }, []);
};