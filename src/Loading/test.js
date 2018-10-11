import React from "react";
import Loading from './'

describe('Loading', () => {
  it('is truthy', () => {
    expect(Loading).toBeTruthy()
  })

  it('new', () => {
    const l = <Loading />;
    expect(l).toBeTruthy()
  })
})
