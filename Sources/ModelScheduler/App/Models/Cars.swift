import Vapor
import Fluent
import FluentMySQLDriver

final class Cars: Model, Content {
    public static let schema = "car"

    @ID(custom: "sectionID", generatedBy: .database)
    var id: String?

    @Field(key: "make")
    var code: String

    @Field(key: "model")
    var name: String

    init() { }

    /*init(id: String? = nil, code: String, name: String) {
        self.id = id
        self.make = make
        self.model = model
    }*/   
}

