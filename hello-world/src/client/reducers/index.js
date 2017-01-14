/**
 * Created by konstantin on 1/14/17.
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp