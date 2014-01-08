class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

            "/configParams/list"(controller: "configParams") { action = [OPTIONS:"cors", GET:"list"] }

		"500"(view:'/error')
	}
}
