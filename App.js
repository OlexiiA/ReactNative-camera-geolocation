import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";




export default function App() {
  const routing = useRoute({});

  return (
    // <RegistrationScreen/>
    // <LoginScreen/>
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

     