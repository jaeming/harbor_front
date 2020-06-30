import React, { Fragment } from 'react'
import { css } from '@emotion/core'

export const Hello = () => {
  const theme = { theme: 'yellow' }
  return (
    <Fragment>
      <h1>this is not in the style scope</h1>
      <div css={style(theme)}>
        <h1>Hello World...</h1>
      </div>
    </Fragment>
  )
}

const style = ({ theme }) => (
  css`
    h1 {
      color: tomato;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: ${theme};
        border-bottom: 1px solid black;
      }
    }
  `
)
