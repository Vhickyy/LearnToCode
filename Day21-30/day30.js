const obj = {
    name: "Victoria",
    normalFn(){
        console.log(this);
        console.log(this.name);
    },
    arrowFn: () => {
        console.log(this);
        console.log(this.name);
    },
    getThis() {
        const getter = () => {
            console.log(this.name);
            return this
        };
        return getter;
    },
}
obj.normalFn()
// {normalFn: ƒ, arrowFn: ƒ, getThis: ƒ}
// Victoria

obj.arrowFn()
// globalThis
// 
const result = obj.getThis();
console.log(result());
// Victoria
// {normalFn: ƒ, arrowFn: ƒ, getThis: ƒ}