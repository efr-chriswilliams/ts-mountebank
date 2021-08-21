import {assert} from "chai"
import {FlexiPredicate, Operator} from "./predicate"

describe.only("Predicate", () => {
    describe("FlexiPredicate", () => {

        const tests = [
            {operator: Operator.startsWith},
            {operator: Operator.endsWith},
            {operator: Operator.equals},
        ]

        tests.forEach(test => {
            describe("#withStartsWith", () => {
                const path = '/here/is/my/path';
                let pred = new FlexiPredicate()
                    .withOperator(test.operator)
                    .withPath(path)
                    .toJSON();
                // console.log(pred);
                it(`should have a ${test.operator} operator`, () => {
                    assert.property(pred, test.operator);
                })

                it("should have the expected Path", () => {
                    assert.equal(pred[test.operator].path, path);
                })
            })
        })

    })
})