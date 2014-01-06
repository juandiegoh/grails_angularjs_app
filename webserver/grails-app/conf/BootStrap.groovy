import com.meli.configuration.ConfigParams
import grails.util.Environment

class BootStrap {

    def init = { servletContext ->
        if(Environment.DEVELOPMENT == Environment.current)  {
            new ConfigParams(mainScopeFunctionality: 'FACTORY',
                        instanceAvailables: 'e1',
                        active: true,
                        selectionType: 'MOD',
                        selectionId: '0',
                        quantity: 1001).save(flush: true)
            new ConfigParams(mainScopeFunctionality: 'CLOSER',
                    instanceAvailables: 'e1',
                    active: true,
                    selectionType: 'MOD',
                    selectionId: '0',
                    quantity: 1000).save(flush: true)
            new ConfigParams(mainScopeFunctionality: 'CLOSER',
                    instanceAvailables: 'e1',
                    active: true,
                    selectionType: 'MOD',
                    selectionId: '1',
                    quantity: 1000).save(flush: true)
        }
    }
    def destroy = {
    }
}
