/* 
 * Main  
 */ 
'use strict'
import {apiKey, cumtdUrl} from 'apiConfig'
var Alexa = require('alexa-sdk')

const SKILL_NAME = 'Bus Times'
const HELP_MESSAGE = 'You can say when is the 1 North Coming, or when is the 22 South coming, you can say exit...'
const HELP_REPROMPT = 'What can I help you with'
const STOP_MESSAGE = 'Goodbye!'
const ROUTES = {
    1: [['YELLOW','YELLOWHOPPER'],'NORTH'],
    2: [['YELLOW','YELLOWHOPPER'],'SOUTH'],
    3: [['ILLINI'],'NORTH'],
    4: [['ILLINI'],'SOUTH'],
    5: [['GOLD','GOLDHOPPER'],'EAST'],
    6: [['GOLD','GOLDHOPPER'],'WEST'],
    7: [['TEAL'],'EAST'],
    8: [['TEAL'], 'WEST']
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback)
    alexa.registerHandlers(handlers)
    alexa.execute()
}

var handlers = {
    'LaunchRequest': function() {
        this.emit('GetBusTimeIntent')
    },
    'GetBusTimeIntent': function() {
        
    }
}
