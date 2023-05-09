import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import arrowBack from "../../assets/Icons/arrowback.png";
import buttonStyling from "../../Styles/ButtonStyling";
const AddStoryPopUp = (openSetAddStory, openSetOpenPopUp) => {
  const HandleClick = () => {};
  return (
    <View>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => openSetAddStory.setAddStory(false)}
      >
        <Image source={arrowBack} style={styles.addStory} />
      </TouchableOpacity>
      <Text style={{ paddingLeft: 10 }}>Titel:</Text>
      <TextInput
        onChangeText={(text) => setSearchQuery(text)}
        style={styles.addStoryTitle}
        placeholder="Giv din historien en titel..."
        placeholderTextColor={"black"}
      />
      <Text style={{ paddingLeft: 10 }}>historie:</Text>
      <TextInput
        style={styles.addStoryDescription}
        multiline={true}
        placeholder="Skriv din historie her..."
        placeholderTextColor={"black"}
      />
      <View style={styles.approval}>
        <TouchableOpacity
          onPress={() => setOpenPopUp(true)}
          style={buttonStyling.BoxFill2}
        >
          <Text style={buttonStyling.TextFill}>Send til godkendelse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  addStory: { height: 50, width: 50, alignSelf: "center", marginBottom: 10 },
  addStoryTitle: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  addStoryDescription: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    maxWidth: "90%",
    minHeight: "40%",
    marginTop: 5,
    marginBottom: 10,
  },
  approval: { alignItems: "center", margin: 0, padding: 0 },
});

export default AddStoryPopUp;
