"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function ProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ProviderWrapper;
