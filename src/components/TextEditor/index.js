import {Component} from 'react'

import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {VscBold} from 'react-icons/vsc'
import {BgContainer, Button, TextArea} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onChangeBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onChangeUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    return (
      <BgContainer>
        <div className="container-card">
          <div className="img-container">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="img"
            />
          </div>
          <div className="text-container">
            <ul className="buttons-container">
              <li>
                <Button
                  type="button"
                  className="style-button"
                  data-testid="bold"
                  onClick={this.onChangeBold}
                  color={isBold}
                >
                  <VscBold size={25} className="icon" />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  className="style-button"
                  data-testid="italic"
                  onClick={this.onChangeItalic}
                  color={isItalic}
                >
                  <GoItalic size={25} className="icon" />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  className="style-button"
                  data-testid="underline"
                  onClick={this.onChangeUnderline}
                  color={isUnderline}
                >
                  <AiOutlineUnderline size={25} className="icon" />
                </Button>
              </li>
            </ul>
            <TextArea
              bold={isBold}
              italic={isItalic}
              underline={isUnderline}
              className="text-area"
            />
          </div>
        </div>
      </BgContainer>
    )
  }
}

export default TextEditor
