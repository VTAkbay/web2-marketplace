import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Divider, Input, Layout, Text } from "@ui-kitten/components";
import { RootStackParamList } from "../../App";

type SignScreenProps = NativeStackScreenProps<RootStackParamList, "Sign">;

const SignScreen: React.FC<SignScreenProps> = (props) => {
  const [value, setValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");

  return (
    <Layout
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eaeaf6",
      }}
    >
      <Text style={{ fontSize: 30, color: "#302d3a" }}>Login Or Sign Up</Text>
      <Button
        style={{
          // marginBottom: 5,
        }}
        appearance="ghost"
        size="small"
        status="basic"
        // onPress={() => props.navigation.push("Home")}
      >
        Sign Up
      </Button>

      <Layout
        style={{
          marginTop: 5,
          marginBottom: 40,
          height: 4,
          width: 100,
          backgroundColor: "#c8b496",
          borderRadius: 100,
        }}
      ></Layout>

      <Layout style={{ width: "80%", backgroundColor: "transparent" }}>
        <Input
          placeholder="E-mail"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="Password"
          value={passValue}
          onChangeText={(nextValue) => setPassValue(nextValue)}
        />

        <Button
          style={{
            marginTop: 20,
            backgroundColor: "#b44f46",
          }}
          appearance="filled"
          size="small"
          // onPress={() => props.navigation.push("Home")}
        >
          Login
        </Button>
      </Layout>
    </Layout>
  );
};

export default SignScreen;
