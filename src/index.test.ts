import { getComments, getComment } from '.'

describe('simple-test', () => {
  const CONTEXT_ID = 'context'
  const RAMDOM = `comment-${Date.now()}`
  before(() => {
    const div = document.createElement('div')
    div.id = CONTEXT_ID
    document.body.appendChild(div)
    div.appendChild(document.createComment(`${RAMDOM}`))
    div.appendChild(document.createComment(`${RAMDOM}_2`))
  })
  it('works', () => {
    expect(typeof getComment).to.be('function')
  })
  it('throw', () => {
    //@ts-ignore
    expect(() => getComments(1)).to.throwError()
  })
  it('get comment', () => {
    expect(getComment(RAMDOM)).to.ok()
  })
  it('get comments', () => {
    expect(getComments(RAMDOM).length).to.be(2)
  })
  it('get all comments', () => {
    expect(
      getComments(undefined, document.querySelector(`#${CONTEXT_ID}`)).length
    ).to.be(2)
  })
  it('get comment not exist', () => {
    expect(getComment(`${RAMDOM}_3`)).not.ok()
  })
})
