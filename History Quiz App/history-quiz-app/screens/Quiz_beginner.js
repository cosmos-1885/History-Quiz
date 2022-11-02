import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Modal, Animated, Image, Button} from 'react-native'
import { COLORS, SIZES } from '../constants';
import data from '../data/QuizData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Quiz_beginner = () => {

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
      setCorrectOption(null)
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
      toValue: currentQuestionIndex,
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
          justifyContent: 'center',
          marginTop: 15
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
          marginTop: 30, marginBottom: 20
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
          marginVertical: 20,
          alignItems: 'center', justifyContent: 'center'
        }}>

          {/* Question */}
          <View style={{
            width: 280,
            height: 180,
            backgroundColor: COLORS.secondary,
            borderRadius: 12,
            alignItems: 'center', justifyContent: 'center'
          }}>
            <Text style={{color:COLORS.white, fontSize: 15, fontWeight: '400'}}>{allQuestions[currentQuestionIndex]?.question}</Text>
          </View>
        </View>
      )
    }
    else {
      if (currentOptionSelected == correctOption) {
        return (
          <View style={{
            marginVertical: 20,
            alignItems: 'center', justifyContent: 'center'
          }}>

            {/* Question */}
            <View style={{
              width: 280,
              height: 180,
              backgroundColor: COLORS.secondary,
              borderRadius: 12,
              alignItems: 'center', justifyContent: 'center',
            }}>
              <Text style={{color:COLORS.white, fontSize: 15, fontWeight: '400'}}>{allQuestions[currentQuestionIndex]?.description}</Text>
            </View>
          </View>
        )
      }
      else {
        return (
          <View style={{
            marginVertical: 20,
            alignItems: 'center', justifyContent: 'center'
          }}>

            {/* Question */}
            <View style={{
              width: 280,
              height: 180,
              backgroundColor: COLORS.secondary,
              borderRadius: 12,
              alignItems: 'center', 
              // justifyContent: 'center'
            }}>
              <Text style={{color:COLORS.white, fontSize: 35, fontWeight: '400', marginTop: 20}}>오            답</Text>
              <Image style={{width: '22%', height: 80}} source={require('../assets/Quiz/king_sejong_error.png')} />
            </View>
          </View>
        )
      }
    }
  }

  const renderOptions = () => {
    return (
      <View style={{
        alignItems: 'center', justifyContent: 'center'
      }}>
        <View>
        {
          allQuestions[currentQuestionIndex]?.options.map(option => (
            <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 2,
              borderColor: option==currentOptionSelected?
              (option==correctOption?
              COLORS.success:
              COLORS.error):
              COLORS.secondary,
              backgroundColor: option==currentOptionSelected?
              (option==correctOption?
              COLORS.success:
              COLORS.error):
              COLORS.primary,
              width: 280, height: 40,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center', justifyContent: 'center',
              paddingHorizontal: 20,
              marginVertical: 8,}}>
              <Text style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '400',
                color: option==correctOption?
                COLORS.white:
                option==currentOptionSelected?
                COLORS.white:
                COLORS.secondary}}>{option}</Text>

              {/* Show Check Or Cross Icon based on correct answer*/}
              {/*{ 
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
              }*/}
            </TouchableOpacity>
          ))
        }
        </View>
      </View>
    )
  }

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
        onPress={handleNext}
        style={{marginTop: 20, marginLeft: 25, width: 280, height: 50, backgroundColor: COLORS.secondary, padding: 10, borderRadius: 5}}>
          <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>다음 문제</Text>
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
      <View sytle={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{
          width: 280,
          height: 20,
          borderRadius: 20,
          backgroundColor: '#00000020',
          marginLeft: 25
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
        }}/>
          <View style={{
            position: 'absolute',
            top: 250, left: 40,
            backgroundColor: COLORS.white,
            opacity: 1,
            width: 280, height: 250,
            borderRadius: 20,
            alignItems: 'center',
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
            <View style={{
              backgroundColor: COLORS.secondary,
              width: 280,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,
              marginBottom: 20,
            }}>
              <Text style={{textAlign: 'center', color: COLORS.white, fontSize: 20, padding: 10}}>다시 도전해 보세요!</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              marginTop: 35
            }}>
             <View sytle={{
               alignItems: 'center',
               justifyContent: 'center',
             }}>
                <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  width: '100%', borderRadius: 20
                }}>
                  <Image style={{width: 60, height: 60}} source={require('../assets/Quiz/home.png')} />
                </TouchableOpacity>
                <Text style={{textAlign: 'center',color: COLORS.black, fontSize: 20}}>홈</Text>
              </View>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 50
              }}>
                <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  width: '100%', borderRadius: 20,
                  alignItems: 'center', justifyContent: 'center'
                }}>
                  <Image style={{width: 60, height: 60}} source={require('../assets/Quiz/retry.png')} />
                </TouchableOpacity>
                <Text style={{textAlign: 'center', color: COLORS.black, fontSize: 20}}>다시 도전</Text>
              </View>
            </View>
          </View>
      </Modal>
      </View>
    </SafeAreaView>
  )
}

export default Quiz_beginner;