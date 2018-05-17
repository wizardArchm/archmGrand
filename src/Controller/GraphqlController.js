import {graphqlKoa} from 'apollo-server-koa'
import Router from 'koa-router'
import {buildSchema} from 'graphql'
import koaBody from 'koa-bodyparser'
import {TestObject, TestNestedObject} from "../Model"

const schema = buildSchema(
    `
    type Query {
        objectList: [TestObject],
        nestedObjectList(param:String!): [TestNestedObject]
    }
    type TestObject{
        valueString: String,
        valueNumber: Int
    }
    type TestNestedObject{
        valueObject: TestObject
    }
    `
)
const router = new Router({
    prefix: `/graphql`
})
const root = {
    objectList: () => {
        return [new TestObject(`this is a test object queried by graphql`, 1),]
    },
    nestedObjectList: (param) => {
        return new TestNestedObject(new TestObject(param, 1))
    }
}

router.post(`/`, koaBody(), graphqlKoa({schema: schema, rootValue: root}))
router.get(`/`, graphqlKoa({schema: schema, rootValue: root}))
export default router
