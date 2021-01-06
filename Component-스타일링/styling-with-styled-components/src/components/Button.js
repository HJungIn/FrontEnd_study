import React from 'react';
import styled,{ css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css` // 색상 부분을 바깥으로 꺼내서 사용하기
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background:${selected};
            &:hover { 
                background: ${lighten(0.1, selected)};
            }
            &:active { 
                background: ${darken(0.1, selected)};
            }
        `;
    }}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center; //중앙정렬1
  justify-content: center; //중앙정렬2
  outline: none;
  border: none;
  border-radius: 4px; //둥글둥글
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${colorStyles} // 바깥으로 꺼냈을 때 바로 사용할 수 있도록 함 => 분리가능

    ${({ theme, color }) => {
        // const color = props.theme.palette.[props.color]; // =>이건 ${props => {... }}이렇게 props 전체르 가져올 때 사용
        const selected = theme.palette[color];
        return css`
            background:${selected};
            &:hover { 
                background: ${lighten(0.1, selected)};
            }
            &:active { 
                background: ${darken(0.1, selected)};
            }
        `;
    }}

  /* background: #228be6; */
//  background: ${props => props.theme.palette.blue};
//  &:hover {
    /* background: #339af0; */
    /* background: ${lighten(0.1, '#228be6')}; // #228be6 색상에서 10프로 밝게 */
//    background: ${props => lighten(0.1, props.theme.palette.blue)};
//  }
//  &:active {
    /* background: #1c7ed6; */
    /* background: ${darken(0.1, '#228be6')}; // #228be6 색상에서 10프로 어둡게 */
//    background: ${props => darken(0.1, props.theme.palette.blue)};
//  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
  return <StyledButton color={color} {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
    color:'blue'
};

export default Button;