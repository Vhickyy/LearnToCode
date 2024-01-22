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
        const getter = () => this;
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
// {normalFn: ƒ, arrowFn: ƒ, getThis: ƒ}