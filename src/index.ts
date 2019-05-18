type _InnerCondition = (node: Comment) => boolean
type Condition = RegExp | String | _InnerCondition | undefined

function isComment(elem: Node): elem is Comment {
  return elem.nodeType === Node.COMMENT_NODE
}

function normalizeCondition(condition: Condition): _InnerCondition {
  let _condition: Condition | undefined = condition
  if (typeof condition === 'undefined') {
    return () => true
  }
  if (typeof _condition === 'string') {
    _condition = new RegExp(_condition)
  }
  if (_condition instanceof RegExp) {
    const oldCondition = _condition
    _condition = elem => oldCondition.test(elem.textContent || '')
  }
  if (typeof _condition === 'function') {
    return _condition
  }
  throw new RangeError(
    `typeof condition suppose to be RegExp | String | (string) => Boolean, current is ${typeof condition}`
  )
}

function _getComments(condition: Condition, one: true, context?: Node): Comment
function _getComments(
  condition: Condition,
  one: false,
  context?: Node
): Comment[]
function _getComments(condition: any, one: any, context: any): any {
  const result: Comment[] = []
  const _condition = normalizeCondition(condition)
  function recurse(elem: Node) {
    if (isComment(elem)) {
      if (_condition(elem)) {
        result.push(elem)
      }
    } else {
      if (elem.childNodes && elem.childNodes.length) {
        for (let i = 0; i < elem.childNodes.length; i++) {
          recurse(elem.childNodes[i])
          if (one && result.length) break
        }
      }
    }
  }
  recurse(context)
  return one ? result[0] : result
}

function getComment(
  condition?: Condition,
  context: Node = document.documentElement
) {
  return _getComments(condition, true, context)
}

function getComments(
  condition?: Condition,
  context: Node = document.documentElement
) {
  return _getComments(condition, false, context)
}

export { getComments, getComment, Condition }
export default getComments
