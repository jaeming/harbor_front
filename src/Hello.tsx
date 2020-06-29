import React from 'react'
import { css } from '@emotion/core'

export const Hello = () => {
  return (
    <div css={Styles}>
      <h1>Data Loading...</h1>
    </div>
  )
}

const Styles = css`
  h1 {
    color: tomato;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: grey;
      border-bottom: 1px solid black;
    }
  }
`
