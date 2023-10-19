import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { Layout, Text, Button } from "@ui-kitten/components";
import { useAuth } from "../../Context/AuthContext";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { signOut } = useAuth();

  return (
    <Layout style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => signOut()}>Sign out</Button>
    </Layout>
  );
};

export default HomeScreen;
