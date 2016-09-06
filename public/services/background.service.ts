let RandomBackgroundGenerator = require('./../lib/RandomBackgroundGenerator.min');

export class BackgroundService {
    private _generator: any;
    private _initialArgObj: Object;

    constructor() {}

    public init(argObj: Object) {
        this._initialArgObj = Object.assign({}, argObj);
        this._generator = new RandomBackgroundGenerator(argObj);
    }

    public generate() {
        this._generator.generate();
        console.log('gen');
    }

    public resize() {
        this._generator = new RandomBackgroundGenerator(this._initialArgObj);
        console.log(this._generator);
    }
}