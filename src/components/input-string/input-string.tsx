import {
  InputStringProps,
  StyledInputString,
  StyledInputStringPostfixContent,
  StyledInputStringPrefixContent,
  StyledInputStringWrapper,
} from '.'
import { FC } from 'react'

/**
 * String input.
 */
export const InputString: FC<InputStringProps> = (props) => {
  return (
    <StyledInputStringWrapper className={props.className}>
      {props.prefixContent && (
        <StyledInputStringPrefixContent
          $theme={props.theme}
          $prefixContent={props.prefixContent}
          onClick={props.prefixContent.onClick}
        >
          {props.prefixContent.content}
        </StyledInputStringPrefixContent>
      )}
      <StyledInputString
        $theme={props.theme}
        $input={props.input}
        $prefixContent={props.prefixContent}
        $postfixContent={props.postfixContent}
        disabled={props.disabled}
        placeholder={props.placeholder}
        type={props.type}
        readOnly={props.readOnly}
        value={props.value}
        {...props.register}
      />
      {props.postfixContent && (
        <StyledInputStringPostfixContent
          $theme={props.theme}
          $postfixContent={props.postfixContent}
          onClick={props.postfixContent.onClick}
        >
          {props.postfixContent.content}
        </StyledInputStringPostfixContent>
      )}
    </StyledInputStringWrapper>
  )
}
