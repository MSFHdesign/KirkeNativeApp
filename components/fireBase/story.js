import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import logo512 from "../../assets/logo512.png";
import addPlus from "../../assets/Icons/addPlus.png";
import arrowBack from "../../assets/Icons/arrowback.png";
import Constants from "expo-constants";
import buttonStyling from "../../Styles/ButtonStyling";
import openStoryStyling from "../../Styles/openStoryStyling";
import AddStoryPopUp from "./addStory";
import FirstPopUp from "./ShowStoryPopUp";
import SecondPopUp from "./confirmationPopUp";

const Story = (props) => {
  const { item, onClose } = props;
  const [showStory, setShowStory] = useState(false);
  const [addStory, setAddStory] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [title, setTitle] = useState();
  const [comment, setComment] = useState();
  const [storyID, setStoryID] = useState();
  return (
    <>
      <View style={openStoryStyling.container}>
        <Pressable
          onPress={() => setShowStory(true)}
          style={buttonStyling.BoxNofill}
        >
          <Text style={buttonStyling.TextNofill}>Læs</Text>
        </Pressable>
      </View>
      {showStory && (
        <Modal visible={true} animationType="slide" transparent={true}>
          <ImageBackground
            source={require("../../assets/bg2.png")}
            style={{
              flex: 1,
              marginTop: Constants.statusBarHeight + 80,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
            }}
          >
            <View style={openStoryStyling.storyContainer}>
              <TouchableOpacity
                style={openStoryStyling.arrow}
                onPress={() => setShowStory(false)}
              >
                <Image source={arrowBack} style={openStoryStyling.arrow} />
              </TouchableOpacity>
              <ScrollView style={openStoryStyling.ScrollViewcontainer}>
                <Text style={openStoryStyling.name}>
                  {item.firstName} {item.lastName}
                </Text>
                <Text style={openStoryStyling.dates}>
                  <Text style={openStoryStyling.born}>
                    <Text style={openStoryStyling.starSymbol}>☆ </Text>
                    {item.born} -
                  </Text>

                  <Text style={openStoryStyling.dead}>
                    <Text style={openStoryStyling.crossSymbol}> ✞ </Text>
                    {item.death}
                  </Text>
                </Text>
                <Text style={openStoryStyling.graveId}>
                  gravnr: {item.graveId}
                </Text>

                {item.imageUrl ? (
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={openStoryStyling.image}
                  />
                ) : (
                  <Image source={logo512} style={openStoryStyling.image} />
                )}

                {item.sections &&
                  item.sections.map((section, index) => (
                    <View key={index} style={openStoryStyling.test}>
                      <Text style={openStoryStyling.sectionTitle}>
                        {section.title}
                      </Text>
                      <Text style={openStoryStyling.sectionDescription}>
                        {section.description}
                      </Text>
                    </View>
                  ))}
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginVertical: 20,
                  }}
                >
                  <Text style={openStoryStyling.commentSectionText}>
                    Historier fra andre brugere
                  </Text>
                </View>
                <View style={openStoryStyling.commentSection}>
                  {item.comments &&
                    item.comments.map((comments, index) => (
                      <View key={index} style={openStoryStyling.comment}>
                        <Text style={openStoryStyling.commentTitle}>
                          {comments.title}
                        </Text>
                        <Text style={openStoryStyling.commentDescription}>
                          {comments.comment}
                        </Text>
                      </View>
                    ))}
                </View>
              </ScrollView>
              <Pressable onPress={() => setAddStory(true)}>
                <Image
                  source={addPlus}
                  style={openStoryStyling.addStoryButton}
                />
              </Pressable>
              {addStory && (
                <Modal visible={true} animationType="slide" transparent={true}>
                  <View style={openStoryStyling.addStory}>
                    <AddStoryPopUp
                      openSetAddStory={setAddStory}
                      openSetOpenPopUp={setOpenPopUp}
                      addTitleText={setTitle}
                      addTitleValue={title}
                      addCommentValue={comment}
                      addCommentText={setComment}
                      setStoryID={setStoryID}
                      item={item}
                    />
                    {openPopUp && (
                      <Modal
                        visible={true}
                        animationType="fade"
                        transparent={true}
                      >
                        <View style={openStoryStyling.popUpContainer}>
                          <FirstPopUp
                            openSetOpenPopUp={setOpenPopUp}
                            openConfirmPopUp={setConfirmationPopUp}
                            addTitleValue={title}
                            addCommentValue={comment}
                            setStoryID={storyID}
                            addTitleText={setTitle}
                            addCommentText={setComment}
                          />
                          {confirmationPopUp && (
                            <Modal
                              visible={true}
                              animationType="fade"
                              transparent={true}
                            >
                              <View style={openStoryStyling.popUpContainer}>
                                <SecondPopUp
                                  openSetAddStory={setAddStory}
                                  openSetOpenPopUp={setOpenPopUp}
                                  openConfirmPopUp={setConfirmationPopUp}
                                  openStoryPopUp={setShowStory}
                                />
                              </View>
                            </Modal>
                          )}
                        </View>
                      </Modal>
                    )}
                  </View>
                </Modal>
              )}
            </View>
          </ImageBackground>
        </Modal>
      )}
    </>
  );
};

export default Story;
