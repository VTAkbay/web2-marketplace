import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Button,
  CheckBox,
  Divider,
  Input,
  Layout,
  Text,
} from "@ui-kitten/components";
import { RootStackParamList } from "../../App";
import { useAuth } from "../../Context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";

type SignScreenProps = NativeStackScreenProps<RootStackParamList, "Sign">;

const SignScreen: React.FC<SignScreenProps> = (props) => {
  const [signType, setSignType] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const { signIn } = useAuth();

  return (
    <Layout
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eaeaf6",
      }}
    >
      <Text style={{ fontSize: 40, color: "#302d3a", marginBottom: 10 }}>
        {!signType ? "Login" : "Sign Up"}
      </Text>
      <Button
        style={
          {
            // marginBottom: 5,
          }
        }
        appearance="ghost"
        size="medium"
        status="basic"
        onPress={() => {
          setSignType(!signType);
        }}
      >
        {signType ? "Login" : "Sign Up"}
      </Button>

      {/* Divider */}
      <Layout
        style={{
          marginTop: 5,
          marginBottom: 40,
          height: 4,
          width: 100,
          backgroundColor: "#cfb097",
          borderRadius: 100,
        }}
      ></Layout>
      {/* -------------- */}

      <Layout style={{ width: "80%", backgroundColor: "transparent" }}>
        <Input
          placeholder="E-mail"
          value={emailValue}
          onChangeText={(nextValue) => setEmailValue(nextValue)}
          style={{ marginBottom: 10, borderRadius: 10 }}
        />

        {signType && (
          <Layout style={{ flex: 1, flexDirection: "row", marginBottom: 50 }}>
            <Layout
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              level="1"
            >
              <Input
                placeholder="Name"
                value={emailValue}
                onChangeText={(nextValue) => setEmailValue(nextValue)}
                style={{ borderRadius: 10 }}
              />
            </Layout>

            <Layout
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              level="2"
            >
              <Input
                placeholder="Surname"
                value={passValue}
                onChangeText={(nextValue) => setPassValue(nextValue)}
                style={{ borderRadius: 10 }}
              />
            </Layout>
          </Layout>
        )}

        <Input
          placeholder="Password"
          value={passValue}
          onChangeText={(nextValue) => setPassValue(nextValue)}
          style={{ marginBottom: 10, borderRadius: 10 }}
        />

        {signType && (
          <CheckBox
            checked={checked}
            onChange={(nextChecked) => setChecked(nextChecked)}
          >
            I have read and agree to the [Terms of Service] and [Privacy
            Policy].
          </CheckBox>
        )}

        <CheckBox
          checked={checked}
          onChange={(nextChecked) => setChecked(nextChecked)}
        >
          Keep me logged in
        </CheckBox>

        <LinearGradient
          colors={["#4c193a", "#e56141"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Button
            style={{
              width: "100%",
              backgroundColor: "transparent",
              borderRadius: 10,
            }}
            appearance="filled"
            size="small"
            onPress={() => {
              signIn();
            }}
          >
            {!signType ? "Login" : "Sign Up"}
          </Button>
        </LinearGradient>
      </Layout>
    </Layout>
  );
};

export default SignScreen;
