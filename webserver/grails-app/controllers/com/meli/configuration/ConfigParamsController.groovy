package com.meli.configuration

import grails.converters.JSON

class ConfigParamsController {

    def list() {
        render ConfigParams.list() as JSON
    }
}
