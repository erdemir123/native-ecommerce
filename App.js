import { NativeBaseProvider } from "native-base";

import StackNav from "./src/Navigations/StackNav";

export default function App() {
  return (
    <NativeBaseProvider>
      <StackNav />
    </NativeBaseProvider>
  );
}
