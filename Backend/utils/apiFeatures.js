class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr
    }
    // creating search api
    search() {
        const keyword = this.queryStr.keyword ? {
            message: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {}
        // console.log(keyword)
        this.query = this.query.find({ ...keyword })
        return this
    }


    // pagination
    pagination(resultPerPage) {

        const currentPage = Number(this.queryStr.page) || 1

        const skip = resultPerPage * (currentPage - 1)

        this.query = this.query.limit(resultPerPage).skip(skip)

        return this
    }
}

module.exports = ApiFeatures