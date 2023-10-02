import Vapor
import Fluent
import FluentMySQLDriver

final class Courses: Model, Content {
    public static let schema = "users"

    @ID(custom: "sectionID", generatedBy: .database)
    var id: String?

    @Field(key: "make")
    var code: String

    @Field(key: "model")
    var name: String

    /*@Enum(key: "term")
    var term: Semester

    @Field(key: "department")
    var department: String

    @Field(key: "period")
    //var period: CoursePeriod
    var period: Int

    @Field(key: "doubleBlockPeriod")
    var doubleBlockPeriod: Int?

    @Field(key: "location")
    var location: String

    @Field(key: "studentMax")
    var studentMax: Int*/
    /*
    @Field(key: "section")
    var section: String

    
    @Field(key: "dcDays")
    var dcDays: String?
    
    
    @Field(key: "location")
    var location: String

    @Field(key: "credits")
    var credits: Float

    @Field(key: "size")
    var size: Int
    
    @Field(key: "seatsTaken")
    var seatsTaken: Int
    */
    init() { }

    init(id: String? = nil, code: String, name: String) {
        self.id = id
        self.make = make
        self.model = model
    }   
}

