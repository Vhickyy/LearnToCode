const obj = {
    normalFn(){
        console.log(this);
    },
    arrowFn: () => {
        console.log(this);
    },
    getThis() {
        const getter = () => this;
        return getter;
    },
}


obj.normalFn()
// {normalFn: ƒ, arrowFn: ƒ, getThis: ƒ}

obj.arrowFn()
// globalThis

const result = obj.getThis();
console.log(result());
// {normalFn: ƒ, arrowFn: ƒ, getThis: ƒ}