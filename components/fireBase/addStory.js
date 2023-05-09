import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import arrowBack from "../../assets/Icons/arrowback.png";
import buttonStyling from "../../Styles/ButtonStyling";
import openStoryStyling from "../../Styles/openStoryStyling";
const AddStoryPopUp = ({ openSetAddStory, openSetOpenPopUp }) => {
  return (
    <View style={openStoryStyling.addStoryContainer}>
      <TouchableOpacity
        style={openStoryStyling.arrow}
        onPress={() => openSetAddStory(false)}
      >
        <Image source={arrowBack} style={openStoryStyling.arrow} />
      </TouchableOpacity>
      <Text style={{ paddingLeft: 10 }}>Titel:</Text>
      <TextInput
        onChangeText={(text) => setSearchQuery(text)}
        style={openStoryStyling.addStoryTitle}
        placeholder="Giv din historien en titel..."
        placeholderTextColor={"black"}
      />
      <Text style={{ paddingLeft: 10 }}>historie:</Text>
      <TextInput
        style={openStoryStyling.addStoryDescription}
        multiline={true}
        placeholder="Skriv din historie her..."
        placeholderTextColor={"black"}
      />
      <View style={openStoryStyling.approval}>
        <TouchableOpacity
          onPress={() => openSetOpenPopUp(true)}
          style={buttonStyling.BoxFill2}
        >
          <Text style={buttonStyling.TextFill}>Send til godkendelse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddStoryPopUp;
