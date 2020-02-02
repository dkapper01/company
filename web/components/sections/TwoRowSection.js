import React from "react";
import styles from "../modules/TwoRowSection.module.css";
import imageUrlBuilder from "@sanity/image-url";
import PropTypes from "prop-types";
import client from "../../client";
import { Title, Heading, Text, SubHeading, Section } from "../../utils";

const builder = imageUrlBuilder(client);

const TwoRowSection = props => {
  const {
    heading,
    subheading,
    textOne,
    textTwo,
    textThree,
    textFour,
    titleOne,
    titleTwo,
    titleThree,
    titleFour,
    imageOne,
    imageTwo,
    imageThree,
    imageFour
  } = props;
  return (
    // <Section>
    <div className={styles.root}>
      <Heading>{heading}</Heading>
      <SubHeading>{subheading}</SubHeading>
      <div className={styles.iconWrapper}>
        <div className={styles.card}>
          <img
            src={builder
              .image(imageOne)
              .auto("format")
              .url()}
            className={styles.icon}
          />
          <Title>{titleOne}</Title>
          <Text>{textOne}</Text>
        </div>

        <Text className={styles.card}>
          <img
            src={builder
              .image(imageTwo)
              .auto("format")
              .url()}
            className={styles.icon}
          />
          <Title>{titleTwo}</Title>
          <Text>{textTwo}</Text>
        </Text>

        <div className={styles.card}>
          <img
            src={builder
              .image(imageThree)
              .auto("format")
              .url()}
            className={styles.icon}
          />
          <Title>{titleThree}</Title>
          <Text>{textThree}</Text>
        </div>

        <div className={styles.card}>
          <img
            src={builder
              .image(imageFour)
              .auto("format")
              .url()}
            className={styles.icon}
          />
          <Title>{titleFour}</Title>
          <Text>{textFour}</Text>
        </div>
      </div>
    </div>
    // </Section>
  );
};

TwoRowSection.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  textOne: PropTypes.string,
  textTwo: PropTypes.string,
  textThree: PropTypes.string,
  textFour: PropTypes.string,
  titleOne: PropTypes.string,
  titleTwo: PropTypes.string,
  titleThree: PropTypes.string,
  titleFour: PropTypes.string,
  imageOne: PropTypes.object,
  imageTwo: PropTypes.object,
  imageThree: PropTypes.object,
  imageFour: PropTypes.object
};
export default TwoRowSection;
