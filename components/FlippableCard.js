import React from 'react';
import PropTypes from 'prop-types';
import FlipCard from 'react-native-flip-card';
import { Dimensions, Text, View, StyleSheet } from 'react-native';

const FlippableCard = (props) => {
  const { height, width } = Dimensions.get('window');
  console.log("From FlippableCard check to see if received card from QuizScreen: ", props.card);
  return (
    <FlipCard
      flipHorizontal
      flipVertical={false}
      perspective={1000}
      // to ensure it is always a proportion of screen size and also so that it's a consistent fixed width
      style={{ width: width * 0.88, height: height * 0.2, borderWidth: 0 }} 
    >
      {/* Face Side */}
      <View style={[styles.cardContainer, { backgroundColor: 'silver' }]}>
        <Text style={styles.cardMainText}>{props.card.question}</Text>
        <Text style={styles.cardSecondaryText}>QUESTION</Text>
      </View>
      {/* Back Side */}
      <View style={[styles.cardContainer, { backgroundColor: 'gray' }]}>
        <Text style={styles.cardMainText}>{props.card.answer}</Text>
        <Text style={styles.cardSecondaryText}>ANSWER</Text>
      </View>
    </FlipCard>
  );
};

FlippableCard.propTypes = {
  card: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginHorizontal: 11,
    paddingVertical: 20,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20
  },
  cardMainText: {
    fontSize: 18,
    paddingHorizontal: 15
  },
  cardSecondaryText: {
    fontSize: 20,
    opacity: 0.5
  }
});

export default FlippableCard;