import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import arrowBack from "../../assets/Icons/arrowback.png";
import buttonStyling from "../../Styles/ButtonStyling";
import openStoryStyling from "../../Styles/openStoryStyling";
import Warning from "./warning";
const AddStoryPopUp = ({
  openSetAddStory,
  openSetOpenPopUp,
  addTitleText,
  addCommentText,
  addTitleValue,
  addCommentValue,
  setStoryID,
  item,
}) => {
  const [openWarning, setOpenWarning] = useState(false);
  const [emptyTitle, setEmptyTitle] = useState(false);
  const [emptyComment, setEmptyComment] = useState(false);

  const SelectPopUp = () => {
    if (addCommentValue == undefined && addTitleValue == undefined) {
      setOpenWarning(true);
      setEmptyComment(true);
      setEmptyTitle(true);
    } else if (addTitleValue == undefined) {
      setOpenWarning(true);
      setEmptyTitle(true);
      setEmptyComment(false);
    } else if (addCommentValue == undefined) {
      setOpenWarning(true);
      setEmptyComment(true);
      setEmptyTitle(false);
    } else if (addCommentValue == "" && addTitleValue == "") {
      setOpenWarning(true);
      setEmptyComment(true);
      setEmptyTitle(true);
    } else if (addTitleValue == "") {
      setOpenWarning(true);
      setEmptyTitle(true);
      setEmptyComment(false);
    } else if (addCommentValue == "") {
      setOpenWarning(true);
      setEmptyComment(true);
      setEmptyTitle(false);
    } else {
      openSetOpenPopUp(true);
      setEmptyComment(false);
      setEmptyTitle(false);
      setStoryID(item.id);
    }
  };
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
        style={openStoryStyling.addStoryTitle}
        placeholder="Giv din historien en titel..."
        placeholderTextColor={"black"}
        value={addTitleValue}
        onChangeText={(text) => addTitleText(text)}
      />
      <Text style={{ paddingLeft: 10 }}>historie:</Text>
      <TextInput
        style={openStoryStyling.addStoryDescription}
        multiline={true}
        maxLength={1000}
        placeholder="Skriv din historie her..."
        placeholderTextColor={"black"}
        value={addCommentValue}
        onChangeText={(text) => addCommentText(text)}
      />
      <View style={openStoryStyling.approval}>
        <TouchableOpacity
          onPress={() => {
            SelectPopUp();
          }}
          style={buttonStyling.BoxFill2}
        >
          <Text style={buttonStyling.TextFill}>Send til godkendelse</Text>
        </TouchableOpacity>
        {openWarning && (
          <Modal visible={true} animationType="fade" transparent={true}>
            <View style={openStoryStyling.popUpContainer}>
              <Warning
                warningStatus={setOpenWarning}
                isTitleEmpty={emptyTitle}
                isCommentEmpty={emptyComment}
              />
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
};
export default AddStoryPopUp;
