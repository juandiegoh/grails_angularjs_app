package com.meli.configuration

import grails.converters.JSON

class ConfigParamsController {

    def list() {
      render ConfigParams.list() as JSON
    }

    def cors() {
      log.info "CORS"
      response.addHeader("Access-Control-Allow-Origin", "*")
      response.addHeader("Access-Control-Allow-Credentials", "true")
      response.addHeader("Access-Control-Request-Method", "GET")
      response.addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
      render(status : 200 , text : '')
    }
}
