import {
    useReducer,
    useEffect,
    useRef
  } from 'react'
  import { reducer } from '../reducer/reducer'
  import { initTaskLog } from '../actions/actions'
  
  /**
   * カスタムフック
   * @param {String} jsonUri
   * @returns {Array} [todos]現在のTODOリスト, [dispatch]actionCreatorをReducerへ渡す関数
   */
  export const useRender = (jsonUri) => {
    const [taskLogs, dispatch] = useReducer(reducer, [])
    const isFirstRender = useRef(true)
  
    useEffect(() => {
      const newTaskLogs= {
        TASKLOGS: [...taskLogs]
      }
  
      // 初回レンダリング後の処理
      if (isFirstRender.current) {
        fetch(jsonUri)
        .then(response => {
          return response.json()
        })
        .then(init => {
          newTaskLogs.TASKLOGS = [init.TASKLOGS]
          dispatch(initTaskLog(init.TASKLOGS))
          isFirstRender.current = false
          return
        })
      }
  
      // ２回目以降のレンダリング後の処理
      fetch(jsonUri, {
        method: 'PUT',
        body: JSON.stringify(newTaskLogs),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }, [jsonUri, taskLogs])
  
    return [taskLogs, dispatch]
  }