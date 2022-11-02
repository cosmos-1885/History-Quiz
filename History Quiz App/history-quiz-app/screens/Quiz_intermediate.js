import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Modal, Animated, Image, Button} from 'react-native'
import { COLORS, SIZES } from '../constants';
import data from '../data/QuizData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Quiz_intermediate = () => {

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if(selectedOption==correct_option) {
      // Set Score
      setScore(score + 1);
      // Show Next Button
      setShowNextButton(true);
    }
    else {
      setShowScoreModal(true);
    }
  }

  const handleNext = () => {
    // if (currentQuestionIndex == allQuestions.length - 1)
    // if (currentOptionSelected != correctOption){
    //   // Last Question
    //   // Show Score Model
    //   setShowScoreModal(true);
    // }else
    if (currentQuestionIndex != allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(currentQuestionIndex);
    setScore(score);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);

    Animated.timing(progress, {
      toValue:0,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }

  const renderHeader = () => {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image style={{width: 20, height: 20}} source={require('../assets/Quiz/back-btn.png')} />
          <Text style={{fontSize: 20, fontWeight: '400', color: COLORS.secondary, marginLeft: 100, marginRight: 50}}>조선 전기</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image style={{width: 20, height: 18}} source={require('../assets/Quiz/heart.png')}/>
            <Text style={{fontSize: 25, fontWeight: '400', color: COLORS.secondary, marginLeft: 3, marginRight: 10}}>10</Text>
            <Image style={{width: 20, height: 20}} source={require('../assets/Quiz/plus.png')} />
          </View>
        </View>

        {/* Question Counter */}
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent: 'center',
          marginTop: 20, marginBottom: 20
        }}>
            <Text style={{color: COLORS.secondary, fontSize: 25, fontWeight: '400', marginRight: 2}}>문제 {currentQuestionIndex + 1}</Text>
        </View>
      </View>

    )
  }

  const renderQuestion = () => {
    if (currentOptionSelected == null) {
      return (
        <View style={{
          marginVertical: 20
        }}>

          {/* Question */}
          <View style={{
            width: '100%',
            height: 200,
            backgroundColor: COLORS.secondary,
            borderRadius: 12,
            alignItems: 'center', justifyContent: 'center'
          }}>
            <Text style={{color:COLORS.white, fontSize: 20, fontWeight: '400'}}>{allQuestions[currentQuestionIndex]?.question}</Text>
          </View>
        </View>
      )
    }
    else {
      if (currentOptionSelected == correctOption) {
        return (
          <View style={{
            marginVertical: 20
          }}>

            {/* Question */}
            <View style={{
              width: '100%',
              height: 200,
              backgroundColor: COLORS.secondary,
              borderRadius: 12,
              alignItems: 'center', justifyContent: 'center'
            }}>
              <Text style={{color:COLORS.white, fontSize: 18, fontWeight: '400'}}>{allQuestions[currentQuestionIndex]?.description}</Text>
            </View>
          </View>
        )
      }
      else {
        return (
          <View style={{
            marginVertical: 20
          }}>

            {/* Question */}
            <View style={{
              width: '100%',
              height: 200,
              backgroundColor: COLORS.secondary,
              borderRadius: 12,
              alignItems: 'center', 
              // justifyContent: 'center'
            }}>
              <Text style={{color:COLORS.white, fontSize: 40, fontWeight: '400', marginTop: 30}}>오               답</Text>
              <Image style={{width: 60, height: 120}} source={require('../assets/Quiz/king_sejong_error.png')} />
            </View>
          </View>
        )
      }
    }
  }

  const renderOptions = () => {
    return (
      <View>
      {
        allQuestions[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
          onPress={() => validateAnswer(option)}
          disabled={isOptionsDisabled}
          key={option}
          style={{
            borderWidth: 2,
            borderColor: option==correctOption?
            COLORS.success:
            option==currentOptionSelected?
            COLORS.error:
            COLORS.secondary,
            backgroundColor: option==correctOption?
            COLORS.success :
            option==currentOptionSelected?
            COLORS.error :
            COLORS.primary,
            height: 50, borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10}}>
            <Text style={{
              fontSize: 20,
              fontWeight: '400',
              color: option==correctOption?
              COLORS.white:
              option==currentOptionSelected?
              COLORS.white:
              COLORS.secondary}}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {
              option == correctOption? (
                <View style={{
                  width: 30, height: 30, borderRadius: 30/2,
                  backgroundColor: COLORS.white,
                  justifyContent: 'center', alignItems: 'center'
                }}>
                  <MaterialCommunityIcons name="check" style={{color: COLORS.success, fontSize: 20}} />
                </View>
              ): option == currentOptionSelected ? (
                <View style={{
                  width: 30, height: 30, borderRadius: 30/2,
                  backgroundColor: COLORS.white,
                  justifyContent: 'center', alignItems: 'center'
                }}>
                  <MaterialCommunityIcons name="close" style={{color: COLORS.error, fontSize: 20}} />
                </View>
              ) : null
            }
          </TouchableOpacity>
        ))
      }
      </View>
    )
  }

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
        onPress={handleNext}
        style={{marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5}}>
          <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
        </TouchableOpacity>
      )
    }else{
      return null;
    }
  }

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%']
  })
  const renderProgressBar = () => {
    return (
      <View style={{
        width: '100%',
        height: 20,
        borderRadius: 20,
        backgroundColor: '#00000020',
      }}>
        <Animated.View style={[{
          height: 20,
          borderRadius: 20,
          backgroundColor: COLORS.accent
        },{
          width: progressAnim
        }]}>
        </Animated.View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: COLORS.background,
        position: 'relative'
      }}>

      {/* Header */}
      {renderHeader()}

      {/* ProgressBar */}
      {renderProgressBar()}

      {/* Question */}
      {renderQuestion()}

      {/* Options */}
      {renderOptions()}

      {/* Next Button */}
      {renderNextButton()}

      {/* Score Modal */}
      <Modal
      animationType="slide"
      transparent={true}
      visible={showScoreModal}>
        <View style={{
          flex: 1,
          backgroundColor: COLORS.black,
          opacity: 0.8,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{
            backgroundColor: COLORS.white,
            opacity: 1,
            width: '90%',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center'
          }}>
            { /*<Text
            style={{fontSize: 30, fontWeight: 'bold'}}>{ score > (allQuestions.length / 2) ? 'Congratulations!' : 'Oops!' }</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginVertical: 20
            }}>
              <Text style={{fontSize: 30, color: score > (allQuestions.length / 2) ? COLORS.success : COLORS.error}}>{score}</Text>
              <Text style={{fontSize: 20, color: COLORS.black}}>/ { allQuestions.length }</Text>
            </View> */ }
            {/* Retry Quiz button*/}
            <TouchableOpacity
            onPress={restartQuiz}
            style={{
              backgroundColor: COLORS.accent,
              padding: 20, width: '100%', borderRadius: 20
            }}>
              <Text style={{textAlign: 'center', color: COLORS.white, fontSize: 20}}>Retry Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    </SafeAreaView>
  )
}

export default Quiz_intermediate;