import React, { Fragment } from 'react'
import { css } from '@emotion/core'

export const Hello = () => {
  return (
    <Fragment>
      <h1>this is not in the style scope</h1>
      <div css={style}>
        <h1>Hello World...</h1>
      </div>
    </Fragment>
  )
}

const style = css`
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
