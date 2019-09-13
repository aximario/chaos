import styled from 'styled-components'

function fontSizeConvertion (px) {
  return `${px * 0.0625}rem`
}

function letterSpacingConvertion (num) {
  return `${num / 16}rem`
}

export const Headline1 = styled.h1`
  font-family: Roboto;
  font-weight: lighter;
  font-size: ${fontSizeConvertion(96)};
  letter-spacing: ${letterSpacingConvertion(-1.5)};
`

export const Headline2 = styled.h2`
  font-family: Roboto;
  font-weight: lighter;
  font-size: ${fontSizeConvertion(60)};
  letter-spacing: ${letterSpacingConvertion(-0.5)};
`

export const Headline3 = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${fontSizeConvertion(48)};
  letter-spacing: 0;
`

export const Headline4 = styled.h4`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${fontSizeConvertion(34)};
  letter-spacing: ${letterSpacingConvertion(0.25)};
`

export const Headline5 = styled.h5`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${fontSizeConvertion(24)};
  letter-spacing: 0;
`

export const Headline6 = styled.h6`
  font-family: Roboto;
  font-weight: bold;
  font-size: ${fontSizeConvertion(20)};
  letter-spacing: ${letterSpacingConvertion(0.15)};
`

export const Subtitle1 = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${fontSizeConvertion(16)};
  letter-spacing: ${letterSpacingConvertion(0.15)};
`

export const Subtitle2 = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: ${fontSizeConvertion(14)};
  letter-spacing: ${letterSpacingConvertion(0.1)};
`

export const Body1 = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${fontSizeConvertion(16)};
  letter-spacing: ${letterSpacingConvertion(0.5)};
`

export const Body2 = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${fontSizeConvertion(14)};
  letter-spacing: ${letterSpacingConvertion(0.25)};
`

export const BUTTON = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: ${fontSizeConvertion(14)};
  letter-spacing: ${letterSpacingConvertion(1.25)};
`

export const Caption = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${fontSizeConvertion(12)};
  letter-spacing: ${letterSpacingConvertion(0.4)};
`

export const OVERLINE = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${fontSizeConvertion(10)};
  letter-spacing: ${letterSpacingConvertion(1.5)};
`