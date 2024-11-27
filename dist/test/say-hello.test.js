import { sayHello } from "../src/say-hello";
describe("Hello", () => {
    it("should return hello Aqsa", () => {
        expect(sayHello("Aqsa")).toBe("Hello Aqsa");
    });
});
