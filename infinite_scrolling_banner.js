import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SlideShowWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

const InfiniteSlideShow = styled.div`
  padding: 180px 0;
  width: 150vw;
  display: grid;
  grid-template-columns: repeat(6, 25vw);
  .gatsby-image-wrapper {
    place-self: center center;
    width: 15vw;
  }
  animation: ${(props) =>
    props.right
      ? 'bannerMoveRight 20s linear infinite'
      : 'bannerMoveLeft 20s linear infinite'};
  @keyframes bannerMoveLeft {
    0% {
      transform: translateX(0);
    }
    49% {
      transform: translateX(-150vw);
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: translateX(-150vw);
    }
    51% {
      opacity: 0;
      transform: translateX(150vw);
    }
    52% {
      opacity: 1;
      transform: translateX(150vw);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes bannerMoveRight {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    49% {
      transform: translateX(-150vw);
    }
    98% {
      transform: translateX(-300vw);
      opacity: 1;
    }
    99% {
      transform: translateX(-300vw);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 0;
    }
  }
`;
const Icon = styled(Img)`
  grid-row: 1;
  grid-column: ${(props) => props.col};
`;

export default () => {
  const data = useStaticQuery(graphql`
    {
      crous: file(relativePath: { eq: "temp/crous_versailles.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      enactus: file(relativePath: { eq: "temp/enactus.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      epfl: file(relativePath: { eq: "temp/epfl.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      ensta: file(relativePath: { eq: "temp/ensta_alumni.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      start: file(relativePath: { eq: "temp/start_in_saclay.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      incubateur: file(relativePath: { eq: "temp/incubateur_IESEG.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const iconObject = [
    { fluid: data.crous.childImageSharp.fluid, col: 1 },
    { fluid: data.epfl.childImageSharp.fluid, col: 2 },
    { fluid: data.ensta.childImageSharp.fluid, col: 3 },
    { fluid: data.start.childImageSharp.fluid, col: 4 },
    { fluid: data.incubateur.childImageSharp.fluid, col: 5 },
    { fluid: data.enactus.childImageSharp.fluid, col: 6 },
  ];

  return (
    <SlideShowWrapper>
      <InfiniteSlideShow right={false}>
        {icons &&
          icons.map((icon, index) => (
            <Icon fluid={icon.fluid} col={icon.col} key={index} />
          ))}
      </InfiniteSlideShow>
      <InfiniteSlideShow right={true}>
        {icons &&
          icons.map((icon, index) => (
            <Icon fluid={icon.fluid} col={icon.col} key={index} />
          ))}
      </InfiniteSlideShow>
    </SlideShowWrapper>
  );
};
