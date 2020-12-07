import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import {hl} from './Hero'
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}
const homeLanding = {
  width: "41px",
  height: 0,
  objectFit: "contain",
  border: "solid 8px #ab57ff",
  borderRightRadius:"2px"

}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'What we offer',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id="work"
    >
      <div className="container">
     
        <div className={innerClasses}>
     
          
          <SectionHeader data={sectionHeader} className="center-content" />
         <div color="primary" style={hl}></div>
          <div className={splitClasses}>
           
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning for client
                  </div> */}
                <h3 className="mt-0 mb-12">
                  For the Client
                  </h3>
                <p className="m-0">
                Get an interpreter with ease. Sign up and post a custom requirement. Track its status and if needed, negotiate to an agreed price with select interpreters from all over the country.<br/>
Flexible, convenient and personalized.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div> */}
                <h3 className="mt-0 mb-12">
                  For the Interpreter
                  </h3>
                <p className="m-0">
                Join the club and boost your income! Choose from a variety of jobs and grow as an interpreter.
              <br/>  You have the superpower to connect two communities. Together, we can build a more inclusive society.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.svg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;