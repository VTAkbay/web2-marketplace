import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { Layout, Text, Button } from "@ui-kitten/components";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <Layout style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => props.navigation.push("Sign")}>Go to Sign</Button>
    </Layout>
  );
};

export default HomeScreen;
