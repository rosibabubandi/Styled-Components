import {Component} from 'react'

import {
  CommonContainer,
  MainContainer,
  SmallDevicesMainContainer,
  Heading,
  SmallDevicesImageContainer,
  TextInsideContainer,
  FormContainer,
  Label,
  InputElement,
  SelectElement,
  OptionElement,
  MemeGenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    memeContainerValues: {
      containerImageUrl: fontSizesOptionsList[0].optionId,
      containerTopText: '',
      containerBottomText: '',
      textFontSize: '',
    },
  }

  setImageUrl = event => {
    const imageUrl = event.target.value

    if (imageUrl !== '') {
      this.setState({imageUrl})
    }
  }

  setTopText = event => {
    const topText = event.target.value

    if (topText !== '') {
      this.setState({topText})
    }
  }

  setBottomText = event => {
    const bottomText = event.target.value

    if (bottomText !== '') {
      this.setState({bottomText})
    }
  }

  setFontSize = event => {
    const fontSize = event.target.value

    if (fontSize !== '') {
      this.setState({fontSize})
    }
  }

  onSubmitMemeGenerator = event => {
    event.preventDefault()

    const {imageUrl, topText, bottomText, fontSize} = this.state

    const memeContainerValuesObject = {
      containerImageUrl: imageUrl,
      containerTopText: topText,
      containerBottomText: bottomText,
      textFontSize: fontSize,
    }

    if (
      imageUrl !== '' ||
      topText !== '' ||
      bottomText !== '' ||
      fontSize !== ''
    ) {
      this.setState({
        memeContainerValues: memeContainerValuesObject,
      })
    }
  }

  getMemeContainer = () => {
    const {memeContainerValues} = this.state
    const {
      containerImageUrl,
      containerTopText,
      containerBottomText,
      textFontSize,
    } = memeContainerValues
    return (
      <SmallDevicesImageContainer
        data-testid="meme"
        imageUrl={containerImageUrl}
      >
        <TextInsideContainer fontSize={textFontSize}>
          {containerTopText}
        </TextInsideContainer>
        <TextInsideContainer fontSize={textFontSize}>
          {containerBottomText}
        </TextInsideContainer>
      </SmallDevicesImageContainer>
    )
  }

  getFormContainer = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <FormContainer onSubmit={this.onSubmitMemeGenerator}>
        <Label htmlFor="image">Image URL</Label>
        <InputElement
          onChange={this.setImageUrl}
          value={imageUrl}
          id="image"
          type="text"
          placeholder="Enter the Image URL"
        />
        <Label htmlFor="topText">Top Text</Label>
        <InputElement
          value={topText}
          onChange={this.setTopText}
          id="topText"
          type="text"
          placeholder="Enter the Top Text"
        />
        <Label htmlFor="bottomText">Bottom Text</Label>
        <InputElement
          value={bottomText}
          onChange={this.setBottomText}
          id="bottomText"
          type="text"
          placeholder="Enter the Bottom Text"
        />
        <Label htmlFor="fontSize">Font Size</Label>
        <SelectElement
          id="fontSize"
          onChange={this.setFontSize}
          value={fontSize}
        >
          {fontSizesOptionsList.map(option => (
            <OptionElement key={option.optionId} value={option.optionId}>
              {option.displayText}
            </OptionElement>
          ))}
        </SelectElement>
        <MemeGenerateButton type="submit">Generate</MemeGenerateButton>
      </FormContainer>
    )
  }

  render() {
    return (
      <MainContainer>
        <SmallDevicesMainContainer>
          <Heading>Meme Generator</Heading>
          <CommonContainer>
            {this.getMemeContainer()}
            {this.getFormContainer()}
          </CommonContainer>
        </SmallDevicesMainContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
