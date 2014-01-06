package com.meli.configuration

class ConfigParams {

    String mainScopeFunctionality
    String instanceAvailables
    boolean active
    String selectionType // We can put here "MOD" or CUST_ID
    Integer selectionId
    Integer quantity

    static mapping = {
        table 'CONFIG_PARAMS'
        id generator:'sequence', params:[sequence:'SEQ_CONFIG_PARAMS']
        version false
    }

    static constraints = {
        mainScopeFunctionality(nullable:false)
        selectionId(nullable:false)
        selectionType(nullable:true)
        quantity (nullable: true)
    }

    String toString(){
        return "[CONFIG_PARAMS ->selectionId :${this.selectionId}, mainScopeFunctionality :${this.mainScopeFunctionality}, active :${this.active},selectionType:${this.selectionType}, quantity:${quantity}]" + "\n"
    }
}
